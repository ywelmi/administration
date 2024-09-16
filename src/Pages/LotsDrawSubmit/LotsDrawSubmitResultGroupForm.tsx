import { Col } from "reactstrap";
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

interface ILotsDrawSubmitForm {
    // lotsdraw: TLotsDrawMember[];
    onCancel?: () => void;
    sportId: string;

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
        if (element[`content2_record_value`] && element[`content2_record_value`].length > 5) {
            isCanSubmit = false;
        }
        if (
            (element[`content2_record_value`] && canParseToNumber(element[`content2_record_value`])) ||
            (element[`content2_record_value`] &&
                element[`content2_record_value`].toString().split(":").length > 1 &&
                element[`content2_record_value`] &&
                element[`content2_record_value`].toString().split(":")[1].split("").length > 1)
        ) {
        } else {
            if (element[`content2_record_value`]) {
                console.log("Sai định dạng");
                isCanSubmit = false;
                return false;
            }
        }
    });
    return isCanSubmit;
};
const LotsDrawSubmitGroupResultForm = ({ sportId, content_id, onCancel }: ILotsDrawSubmitForm) => {
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawMember>[]>(defaultColumns);
    const _content_point = window._content_point;
    const [data, setData] = useState<TLotsDrawMember[]>([]);
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        lotsdrawResultTableGet("", sportId, content_id)
            .then(async (res) => {
                const {
                    data: { lst_ticket_group, lst_map_sport_content },
                    status,
                } = res;
                if (status !== 200) return;

                const newCols: ColumnDef<TLotsDrawMember>[] = [...defaultColumns];
                const pointConfig = await getPointConfig(sportId).then((res) => {
                    return res.data;
                });
                const contentConfig = await getContentConfig(sportId).then((res) => {
                    return res.data;
                });
                const valueType = contentConfig.filter((e: any) => e.id == content_id)[0].record_type;
                console.log(valueType);
                _content_point.setPoints(pointConfig);

                lst_map_sport_content.forEach(({ field, name, id }) => {
                    if (id == content_id) {
                        const col: ColumnDef<any> = {
                            // accessorKey: field,
                            footer: (props) => props.column.id,
                            header: name,
                            columns: [
                                {
                                    accessorKey: `${field}_record1_value`,
                                    header:
                                        N[`${field}_record_value`] +
                                        (valueType == 2 ? "(Giờ: phút: giây. mili giây)" : "(Nhập dạng số)"),
                                    footer: (props) => props.column.id,
                                },
                            ],
                        };
                        newCols.push(col);
                    }
                });
                const valueField = lst_map_sport_content.filter((e) => e.id == content_id)[0].field;
                const colSpecial: ColumnDef<any> = {
                    // accessorKey: field,
                    footer: (props) => props.column.id,
                    header: "Xử lý vi phạm",
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
                                                table.options.meta?.updateData(index, id, parseInt(e.target.value));
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
                            accessorKey: `${valueField}_record_value`,
                            header: "Thành tích cuối cùng",
                            footer: (props) => props.column.id,
                        },
                        {
                            accessorKey: `${valueField}_point_value`,
                            header: "Điểm (Định dạng: 00.00 / 00:00)",
                            footer: (props) => props.column.id,
                            cell({ getValue, row: { index, original }, column: { id }, table }) {
                                // let hasEmptyFiled = false;
                                // const idx = Object.values(original).findIndex((v) => v == null);
                                // if (idx !== -1) hasEmptyFiled = true;
                                // if (hasEmptyFiled) return null;
                                // if (!original.isDetail) return null;

                                var dataResult;
                                const value = _content_point.convert(
                                    content_id,
                                    original[`${valueField}_record_value`]
                                );
                                useEffect(() => {
                                    setRecord_value(original[`${valueField}_record_value`]);
                                    table.options.meta?.updateData(index, id, value);
                                }, [original[`${valueField}_record_value`]]);
                                const [record_value, setRecord_value] = useState(
                                    original[`${valueField}_record_value`]
                                );

                                if (valueType == 2) {
                                    if (
                                        (original[`${valueField}_record_value`] &&
                                            canParseToNumber(original[`${valueField}_record_value`].toString())) ||
                                        (original[`${valueField}_record_value`] &&
                                            original[`${valueField}_record_value`].toString().split(":").length > 1 &&
                                            original[`${valueField}_record_value`] &&
                                            original[`${valueField}_record_value`].toString().split(":")[1].split("")
                                                .length > 1)
                                    ) {
                                        setCanSubmit(true);

                                        dataResult = <div>{value}</div>;
                                    } else {
                                        if (original[`${valueField}_record_value`]) {
                                            setCanSubmit(false);
                                            dataResult = <strong className="text-danger">Sai định dạng</strong>;
                                        } else {
                                            dataResult = <></>;
                                        }
                                    }
                                }
                                if (valueType == 1) {
                                    if (
                                        original[`${valueField}_record_value`] &&
                                        canParseToNumber(original[`${valueField}_record_value`].toString())
                                    ) {
                                        //console.log(value);
                                        setCanSubmit(true);
                                        // table.options.meta?.updateData(index, id, value);
                                        dataResult = <div>{value}</div>;
                                    } else {
                                        if (original[`${valueField}_record_value`]) {
                                            setCanSubmit(false);
                                            <strong className="text-danger">Sai định dạng</strong>;
                                        } else {
                                            dataResult = <></>;
                                        }
                                    }
                                }
                                //table.options.meta?.updateData(index, id, value);
                                return dataResult;
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
            {data.length > 0 ? (
                <div>
                    <TanTable ref={ref} data={data} getRowId={getLotDrawId} columns={columns} />
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
            ) : (
                <H3 className="text-center">Chưa cập nhật kết quả bốc thăm cho nội dung</H3>
            )}
        </div>
    );
};

export { LotsDrawSubmitGroupResultForm };
