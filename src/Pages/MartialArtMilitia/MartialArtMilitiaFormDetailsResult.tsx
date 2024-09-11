import { Col, Modal } from "reactstrap";

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
import {
    martialArtMilitiaArmyGroupGetDetailResult,
    martialArtMilitiaArmyGroupUpdateDetailResult,
} from "../../Service/martialArtMilitia";
import { TMartialArtMilitiaResultDetail } from "../../type/martialArtMilitia";

interface ILotsDrawSubmitForm {
    // lotsdraw: TMartialArtMilitiaResultDetail[];
    onCancel?: () => void;
    sportId: string;
    org_id: string;
    content_id: string;
    // onSubmit: () => void;
}

const defaultColumns: ColumnDef<TMartialArtMilitiaResultDetail>[] = [
    {
        header: "Chi tiết nhập điểm ",
        columns: [
            {
                accessorKey: "name",
                footer: (props) => props.column.id,
                header: "Tên động tác",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
            {
                accessorKey: "record1_value",
                footer: (props) => props.column.id,
                header: "Điểm trọng tài 1",
            },
            {
                accessorKey: "record2_value",
                footer: (props) => props.column.id,
                header: "Điểm trọng tài 2",
            },
            {
                accessorKey: "record3_value",
                footer: (props) => props.column.id,
                header: "Điểm trọng tài 3",
            },
            {
                accessorKey: `ignore_type`,
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
                accessorKey: `ignore_content`,
                header: "Chi tiết lỗi",
                footer: (props) => props.column.id,
            },
            {
                accessorKey: `record_violation`,
                header: "Điểm trừ",
                footer: (props) => props.column.id,
            },
            {
                accessorKey: `point_value`,
                header: "Điểm cuối cùng",
                footer: (props) => props.column.id,
            },
        ],
    },
];

const getLotDrawId = (d: TMartialArtMilitiaResultDetail) => d.sport_content_detail_id;
const canParseToNumber = (str: string) => {
    console.log(str);

    const num = Number(str);
    return !isNaN(num) && isFinite(num);
};
const checkValidValue = (data: any) => {
    var isCanSubmit = true;

    data.forEach((element: any) => {
        if (element[`point_value`] && element[`point_value`].length > 5) {
            isCanSubmit = false;
        }
        if (
            (element[`point_value`] && canParseToNumber(element[`point_value`])) ||
            (element[`point_value`] &&
                element[`point_value`].toString().split(":").length > 1 &&
                element[`point_value`] &&
                element[`point_value`].toString().split(":")[1].split("").length > 1)
        ) {
        } else {
            if (element[`point_value`]) {
                console.log("Sai định dạng");
                isCanSubmit = false;
                return false;
            }
        }
    });
    return isCanSubmit;
};
const LotsDrawSubmitDetailsResultForm = ({ result_id, onCancel }: any) => {
    const [columns, setColumns] = useState<ColumnDef<TMartialArtMilitiaResultDetail>[]>(defaultColumns);

    const [data, setData] = useState<TMartialArtMilitiaResultDetail[]>([]);
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        martialArtMilitiaArmyGroupGetDetailResult(result_id)
            .then(async (res) => {
                const { data, status } = res;
                if (status !== 200) return;
                console.log(res);

                setData(data);
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [result_id]);

    const handleSubmitLotsDraw = (results: TMartialArtMilitiaResultDetail[]) => {
        martialArtMilitiaArmyGroupUpdateDetailResult(result_id, results)
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

    const ref = useRef<ITanTableRef<TMartialArtMilitiaResultDetail>>(null);
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

const LotsDrawSubmitDetailsResultMartialModal = ({ result_id }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => setOpenModal(!openModal);
    return (
        <>
            <Btn className="btn btn-info edit" onClick={openModalToggle}>
                <i className="icon-pencil-alt" />
                Cập nhật chi tiết kết quả
            </Btn>
            <CommonModal isOpen={openModal} toggle={openModalToggle} fullscreen modalBodyClassName="p-0">
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                    <LotsDrawSubmitDetailsResultForm
                        result_id={result_id}
                        // onSubmit={() => setOpened(false)}

                        onCancel={() => setOpenModal(false)}
                    />
                </div>
            </CommonModal>
        </>
    );
};
export { LotsDrawSubmitDetailsResultMartialModal };
