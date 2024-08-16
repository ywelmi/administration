import { Col } from "reactstrap";
import { TLotsDraw, TLotsDrawMember } from "../../type/lotsdraw";
import { Btn } from "../../AbstractElements";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { N } from "../../name-conversion";
import { getContentConfig, getPointConfig, lotsdrawResultTableGet, lotsdrawResultUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { DRank } from "../../type/enum";

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
        header: "Thông tin vận động viên",
        columns: [
            {
                accessorKey: "name",
                footer: (props) => props.column.id,
                header: N["name"],
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
            {
                accessorKey: "rank",
                footer: (props) => props.column.id,
                header: N["rank"],
                cell(props) {
                    return <div className="form-control">{DRank[parseInt(props.getValue() as string)]}</div>;
                },
            },
            {
                accessorKey: "ticket_index",
                footer: (props) => props.column.id,
                header: N["ticket_index"] + " đơn vị",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
            {
                accessorKey: "ticket_code",
                footer: (props) => props.column.id,
                header: "Thăm cá nhân",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
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
const LotsDrawSubmitResultForm = ({ sportId, org_id, content_id, onCancel }: ILotsDrawSubmitForm) => {
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawMember>[]>(defaultColumns);
    const _content_point = window._content_point;
    const [data, setData] = useState<TLotsDrawMember[]>([]);
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        lotsdrawResultTableGet(org_id, sportId, content_id)
            .then(async (res) => {
                const {
                    data: { lst_ticket_member, lst_map_sport_content },
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
                                    accessorKey: `${field}_record_value`,
                                    header: (
                                        <p>
                                            {N[`${field}_record_value`]} <br />{" "}
                                            {valueType == 2 ? "(Giờ: phút: giây. mili giây)" : "(Nhập dạng số)"}
                                        </p>
                                    ),
                                    footer: (props) => props.column.id,
                                },
                                {
                                    accessorKey: `${field}_point_value`,
                                    header: N[`${field}_point_value`],
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
                                            original[`${field}_record_value`]
                                        );
                                        useEffect(() => {
                                            setRecord_value(original[`${field}_record_value`]);
                                            table.options.meta?.updateData(index, id, value);
                                        }, [original[`${field}_record_value`]]);
                                        const [record_value, setRecord_value] = useState(
                                            original[`${field}_record_value`]
                                        );

                                        if (valueType == 2) {
                                            if (
                                                (original[`${field}_record_value`] &&
                                                    canParseToNumber(original[`${field}_record_value`].toString())) ||
                                                (original[`${field}_record_value`] &&
                                                    original[`${field}_record_value`].toString().split(":").length >
                                                        1 &&
                                                    original[`${field}_record_value`] &&
                                                    original[`${field}_record_value`].toString().split(":")[1].split("")
                                                        .length > 1)
                                            ) {
                                                setCanSubmit(true);

                                                dataResult = <div>{value}</div>;
                                            } else {
                                                setCanSubmit(false);
                                                dataResult = (
                                                    <strong className="text-danger">
                                                        Sai định dạng
                                                        <br />
                                                        Định dạng: 00.00 / 00:00
                                                    </strong>
                                                );
                                            }
                                        }
                                        if (valueType == 1) {
                                            if (
                                                original[`${field}_record_value`] &&
                                                canParseToNumber(original[`${field}_record_value`].toString())
                                            ) {
                                                //console.log(value);
                                                setCanSubmit(true);
                                                // table.options.meta?.updateData(index, id, value);
                                                dataResult = <div>{value}</div>;
                                            } else {
                                                setCanSubmit(false);
                                                <strong className="text-danger">Sai định dạng</strong>;
                                            }
                                        }
                                        //table.options.meta?.updateData(index, id, value);
                                        return dataResult;
                                    },
                                },
                            ],
                        };
                        newCols.push(col);
                    }
                });
                setColumns(newCols);
                setData(lst_ticket_member);
                console.log({ lst_ticket_member });
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [sportId, org_id]);

    const handleSubmitLotsDraw = (results: TLotsDrawMember[]) => {
        const dataSubmit = {
            listTicketMember: results,
            content_id: content_id,
        };
        lotsdrawResultUpdate(org_id, dataSubmit)
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
            <TanTable ref={ref} data={data} getRowId={getLotDrawId} columns={columns} />
            <Col xs="12" className="gap-2" style={{ display: "flex" }}>
                <Btn
                    color="primary"
                    type="button"
                    onClick={() => {
                        const data = ref.current?.getData();
                        if (data) {
                            if (canSubmit) {
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
    );
};

export { LotsDrawSubmitResultForm };
