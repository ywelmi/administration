import { Col } from "reactstrap";
import { TLotsDraw, TLotsDrawMember } from "../../type/lotsdraw";
import { Btn } from "../../AbstractElements";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { N } from "../../name-conversion";
import { lotsdrawResultTableGet, lotsdrawResultUpdate } from "../../Service/lotsdraw";
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
        header: "Vận động viên",
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
                accessorKey: "ticket_code",
                footer: (props) => props.column.id,
                header: "Thăm cá nhân",
            },
            {
                accessorKey: "ticket_index",
                footer: (props) => props.column.id,
                header: N["ticket_index"] + " đơn vị",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
        ],
    },
];

const getLotDrawId = (d: TLotsDrawMember) => d.id;

const LotsDrawSubmitResultForm = ({ sportId, org_id, content_id, onCancel }: ILotsDrawSubmitForm) => {
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawMember>[]>(defaultColumns);

    const [data, setData] = useState<TLotsDrawMember[]>([]);

    useEffect(() => {
        lotsdrawResultTableGet(org_id, sportId, content_id)
            .then((res) => {
                const {
                    data: { lst_ticket_member, lst_map_sport_content },
                    status,
                } = res;
                if (status !== 200) return;
                const newCols: ColumnDef<TLotsDrawMember>[] = [...defaultColumns];
                lst_map_sport_content.forEach(({ field, name, id }) => {
                    if (id == content_id) {
                        const col: ColumnDef<TLotsDrawMember> = {
                            // accessorKey: field,
                            footer: (props) => props.column.id,
                            header: name,
                            columns: [
                                {
                                    accessorKey: `${field}_record_value`,
                                    header: N[`${field}_record_value`],
                                    footer: (props) => props.column.id,
                                },
                                {
                                    accessorKey: `${field}_point_value`,
                                    header: N[`${field}_point_value`],
                                    footer: (props) => props.column.id,
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
        lotsdrawResultUpdate(org_id, results)
            .then((res) => {
                const { data, status } = res;
                if (status !== 200) return;
                console.log({ data });
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
                            handleSubmitLotsDraw(data);
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
