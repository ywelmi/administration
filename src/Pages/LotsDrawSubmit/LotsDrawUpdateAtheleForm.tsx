import { Col } from "reactstrap";
import { TLotsDraw, TLotsDrawMember, TLotsDrawUpdateAthele } from "../../type/lotsdraw";
import { Btn } from "../../AbstractElements";
import { useEffect, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { N } from "../../name-conversion";
import { getMapTicketAthele, lotsdrawResultTableGet, lotsdrawResultUpdate } from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { DRank } from "../../type/enum";

interface ILotsDrawSubmitForm {
    // lotsdraw: TLotsDrawMember[];
    onCancel?: () => void;
    sportId: string;
    // onSubmit: () => void;
    orgId: string;
}

const defaultColumns: ColumnDef<TLotsDrawUpdateAthele>[] = [
    {
        header: "Cập nhật VĐV vào thăm",
        columns: [
            {
                accessorKey: "member_name",
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
                accessorKey: "ticket_index",
                footer: (props) => props.column.id,
                header: "Mã thăm",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
            {
                accessorKey: "match_hour",
                footer: (props) => props.column.id,
                header: "Thời gian thi đấu",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
            {
                accessorKey: "locations",
                footer: (props) => props.column.id,
                header: "Địa điểm thi đấu",
                cell(props) {
                    return <div className="form-control">{props.getValue() as string}</div>;
                },
            },
        ],
    },
];

const getLotDrawId = (d: TLotsDrawUpdateAthele) => d.member_id;

const LotsDrawUpdateAtheleForm = ({ sportId, orgId, onCancel }: ILotsDrawSubmitForm) => {
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawUpdateAthele>[]>(defaultColumns);

    const [data, setData] = useState<TLotsDrawUpdateAthele[]>([]);

    useEffect(() => {
        getMapTicketAthele(sportId, orgId)
            .then((res) => {
                const { data, status } = res;
                if (status !== 200) return;
                // const newCols: ColumnDef<TLotsDrawMember>[] = [...defaultColumns];
                // lst_map_sport_content.forEach(({ field, name }) => {
                //     const col: ColumnDef<TLotsDrawMember> = {
                //         // accessorKey: field,
                //         footer: (props) => props.column.id,
                //         header: name,
                //         columns: [
                //             {
                //                 accessorKey: `${field}_record_value`,
                //                 header: N[`${field}_record_value`],
                //                 footer: (props) => props.column.id,
                //             },
                //             {
                //                 accessorKey: `${field}_point_value`,
                //                 header: N[`${field}_point_value`],
                //                 footer: (props) => props.column.id,
                //             },
                //         ],
                //     };
                //     newCols.push(col);
                // });
                // setColumns(newCols);
                // setData(lst_ticket_member);
                console.log({ data });
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [sportId, orgId]);

    const handleSubmitLotsDraw = (results: TLotsDrawUpdateAthele[]) => {
        lotsdrawResultUpdate(orgId, results)
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

    const ref = useRef<ITanTableRef<TLotsDrawUpdateAthele>>(null);
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

export { LotsDrawUpdateAtheleForm };
