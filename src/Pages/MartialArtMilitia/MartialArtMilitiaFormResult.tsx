import { Col, Modal } from "reactstrap";
import { TLotsDraw, TLotsDrawMember } from "../../type/lotsdraw";
import { Btn, H3 } from "../../AbstractElements";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { N } from "../../name-conversion";
import { getContentConfig, getPointConfig, lotsdrawResultTableGet, lotsdrawResultUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { DRank } from "../../type/enum";
import { InputSelect } from "../../Component/InputSelect";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { LotsDrawSubmitDetailsResultMartialModal } from "./MartialArtMilitiaFormDetailsResult";

interface ILotsDrawSubmitForm {
    // lotsdraw: TLotsDrawMember[];
    onCancel?: () => void;
    sportId: string;
    org_id: string;
    content_id: string;
    // onSubmit: () => void;
}

const defaultColumns: ColumnDef<TLotsDrawMember>[] = [
    {
        header: "Thông tin ",
        columns: [
            {
                accessorKey: "name",
                footer: (props) => props.column.id,
                header: "Tên đội",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            }, //   {
            //   accessorKey: "org_name",
            //   footer: (props) => props.column.id,
            //   header: N["org_name"],
            //   cell(props) {
            //     return <div className="form-control">{props.getValue() as string}</div>;
            //   },
            // },
        ],
    },
];

const getLotDrawId = (d: TLotsDrawMember) => d.id;
const canParseToNumber = (str: string) => {
    if (str.split(".").length > 1) {
        if (str.split(".")[1].split("").length == 1) {
            return false;
        } else {
            const num = Number(str);
            return !isNaN(num) && isFinite(num);
        }
    } else {
        const num = Number(str);
        return !isNaN(num) && isFinite(num);
    }
};
const checkValidValue = (data: any) => {
    var isCanSubmit = true;

    data.forEach((element: any) => {
        if (element[`content1_point_value`]) {
            if (element[`content1_point_value`] && element[`content1_point_value`].length > 5) {
                isCanSubmit = false;
            }
            if (
                (element[`content1_point_value`] && canParseToNumber(element[`content1_point_value`])) ||
                (element[`content1_point_value`] &&
                    element[`content1_point_value`].toString().split(":").length > 1 &&
                    element[`content1_point_value`] &&
                    element[`content1_point_value`].toString().split(":")[1].split("").length > 1)
            ) {
            } else {
                if (element[`content1_point_value`]) {
                    console.log("Sai định dạng");
                    isCanSubmit = false;
                    return false;
                }
            }
        }
        if (element[`content2_point_value`]) {
            if (element[`content2_point_value`] && element[`content2_point_value`].length > 5) {
                isCanSubmit = false;
            }
            if (
                (element[`content2_point_value`] && canParseToNumber(element[`content2_point_value`])) ||
                (element[`content2_point_value`] &&
                    element[`content2_point_value`].toString().split(":").length > 1 &&
                    element[`content2_point_value`] &&
                    element[`content2_point_value`].toString().split(":")[1].split("").length > 1)
            ) {
            } else {
                if (element[`content2_point_value`]) {
                    console.log("Sai định dạng");
                    isCanSubmit = false;
                    return false;
                }
            }
        }
    });
    return isCanSubmit;
};
const LotsDrawSubmitGroupResultForm = ({ sportId, content_id, onCancel }: any) => {
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawMember>[]>(defaultColumns);

    const [data, setData] = useState<TLotsDrawMember[]>([]);
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        lotsdrawResultTableGet(",", sportId, content_id)
            .then(async (res) => {
                const {
                    data: { lst_ticket_group, lst_map_sport_content },
                    status,
                } = res;
                if (status !== 200) return;

                const newCols: ColumnDef<TLotsDrawMember>[] = [...defaultColumns];

                const valueField = lst_map_sport_content.filter((e) => e.id == content_id)[0].field;
                const colSpecial: ColumnDef<any> = {
                    // accessorKey: field,
                    footer: (props) => props.column.id,
                    header: "Cập nhật điểm và Xử lý vi phạm",
                    columns: [
                        {
                            accessorKey: `${valueField}_ignore_type`,
                            header: "Lỗi",
                            footer: (props) => props.column.id,
                            cell({ getValue, row: { index, original }, column: { id }, table }) {
                                // let hasEmptyFiled = false;
                                // const idx = Object.values(original).findIndex((v) => v == null);
                                // if (idx !== -1) hasEmptyFiled = true;
                                // if (hasEmptyFiled) return null;
                                // if (!original.isDetail) return null;

                                return (
                                    <InputSelect
                                        data={[
                                            { id: 1, value: 1, name: "Phạm quy" },
                                            { id: 2, value: 2, name: "Bỏ cuộc" },
                                        ]}
                                        k={"name"}
                                        v={"id"}
                                        handleChange={(e) => {
                                            if (e.target.value == "") {
                                                table.options.meta?.updateData(index, id, null);
                                            } else {
                                                table.options.meta?.updateData(index, id, e.target.value);
                                            }
                                        }}
                                        name={"name"}
                                        value={getValue()}
                                    />
                                );
                            },
                        },
                        {
                            accessorKey: `${valueField}_ignore_content`,
                            header: "Chi tiết lỗi",
                            footer: (props) => props.column.id,
                        },
                        {
                            accessorKey: `${valueField}_record_violation`,
                            header: "Điểm trừ",
                            footer: (props) => props.column.id,
                        },
                        {
                            accessorKey: `${valueField}_point_value`,
                            header: "Điểm tổng",
                            footer: (props) => props.column.id,
                        },
                        {
                            // accessorKey: "locations",
                            header: "Cập nhật chi tiết",
                            footer: (props) => props.column.id,
                            cell({ getValue, row: { index, original }, column: { id }, table }) {
                                // let hasEmptyFiled = false;
                                // const idx = Object.values(original).findIndex((v) => v == null);
                                // if (idx !== -1) hasEmptyFiled = true;
                                // if (hasEmptyFiled) return null;
                                // if (!original.isDetail) return null;
                                if (valueField != "content1") {
                                    return <LotsDrawSubmitDetailsResultMartialModal result_id={original.result_id} />;
                                } else {
                                    return <></>;
                                }
                            },
                        },
                    ],
                };
                newCols.push(colSpecial);
                setColumns(newCols);
                setData(lst_ticket_group);
                console.log({ lst_ticket_group });
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [sportId]);

    const handleSubmitLotsDraw = (results: TLotsDrawMember[]) => {
        const dataSubmit = {
            listTicketMember: results,
            content_id: content_id,
        };
        lotsdrawResultUpdate(content_id, dataSubmit)
            .then((res) => {
                const { data, status } = res;
                if (status !== 200) return;
                console.log({ data });
                setData(results);
                toast.success(N["success"]);
            })
            .catch((err) => {
                console.log({ err });
                toast.error(N["failed"]);
            });
    };

    const ref = useRef<ITanTableRef<TLotsDrawMember>>(null);
    return (
        <div>
            <div>
                {data.length > 0 ? (
                    <TanTable ref={ref} data={data} getRowId={getLotDrawId} columns={columns} />
                ) : (
                    <H3 className="text-center">Chưa cập nhật kết quả bốc thăm cho nội dung</H3>
                )}
                <Col xs="12" className="gap-2 justify-content-center" style={{ display: "flex" }}>
                    <Btn
                        color="primary"
                        type="button"
                        onClick={() => {
                            const data = ref.current?.getData();
                            if (data) {
                                if (checkValidValue(data)) {
                                    handleSubmitLotsDraw(data);
                                } else {
                                    toast.error("Có dữ liệu nhập sai định dạng! Kiểm tra lại");
                                }
                            }
                        }}
                    >
                        Xác nhận
                    </Btn>
                    {onCancel ? (
                        <Btn color="primary" type="button" onClick={onCancel}>
                            Đóng
                        </Btn>
                    ) : null}
                </Col>
            </div>
        </div>
    );
};
interface ILotsDrawSubmitModal {
    lotsdraw?: TLotsDraw[];
    onCancel?: () => void;
    sportId: string;
    team_id: string;
    content_id: string;
    gender?: number;
    // onSubmit: (lotsdraw: TLotsDraw[]) => void;
}
const LotsDrawSubmitResultMartialModal = ({ sportId, content_id, gender }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => setOpenModal(!openModal);
    return (
        <>
            <Btn className="btn btn-info edit" onClick={openModalToggle}>
                <i className="icon-pencil-alt" />
                Cập nhật
            </Btn>
            <CommonModal isOpen={openModal} toggle={openModalToggle} fullscreen modalBodyClassName="p-0">
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                    <LotsDrawSubmitGroupResultForm
                        sportId={sportId}
                        // onSubmit={() => setOpened(false)}

                        content_id={content_id}
                        onCancel={() => setOpenModal(false)}
                    />
                </div>
            </CommonModal>
        </>
    );
};
export { LotsDrawSubmitResultMartialModal };
