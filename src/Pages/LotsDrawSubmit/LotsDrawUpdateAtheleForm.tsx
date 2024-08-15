import { Col } from "reactstrap";
import { TLotsDraw, TLotsDrawMember, TLotsDrawUpdateAthele } from "../../type/lotsdraw";
import { Btn } from "../../AbstractElements";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { N } from "../../name-conversion";
import {
    getMapTicketAthele,
    lotsdrawResultTableGet,
    lotsdrawResultUpdate,
    lotsdrawUpdateAthele,
} from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { DRank } from "../../type/enum";
import { TTeammember } from "../../type/teammember";
import { getFilterByValue } from "../../Service/_getParams";
import { teammembersGet } from "../../Service/teammember";
import { Inputs } from "../../utils/Constant";
import { InputSelect } from "../../Component/InputSelect";

interface ILotsDrawSubmitForm {
    // lotsdraw: TLotsDrawMember[];
    onCancel?: () => void;
    sportId: string;
    team_id: string;
    content_id: string;
    // onSubmit: () => void;
}

const getLotDrawId = (d: TLotsDrawUpdateAthele) => d.ticket_code?.toString();

const LotsDrawUpdateAtheleForm = ({ sportId, team_id, content_id, onCancel }: ILotsDrawSubmitForm) => {
    const [teammembers, setTeammembers] = useState<TTeammember[]>([]);
    const defaultColumns: ColumnDef<TLotsDrawUpdateAthele>[] = useMemo(
        () => [
            {
                header: "Cập nhật VĐV vào thăm",
                columns: [
                    {
                        accessorKey: "member_id",
                        header: "Tên vận động viên",
                        footer: (props) => props.column.id,
                        cell({ getValue, row: { index, original }, column: { id }, table }) {
                            // let hasEmptyFiled = false;
                            // const idx = Object.values(original).findIndex((v) => v == null);
                            // if (idx !== -1) hasEmptyFiled = true;
                            // if (hasEmptyFiled) return null;
                            // if (!original.isDetail) return null;

                            return (
                                <InputSelect
                                    data={teammembers}
                                    k={"name"}
                                    v={"id"}
                                    handleChange={(e) => {
                                        table.options.meta?.updateData(index, id, e.target.value);
                                    }}
                                    name={"name"}
                                    value={getValue()}
                                />
                            );
                        },
                    },
                    {
                        accessorKey: "ticket_code",
                        footer: (props) => props.column.id,
                        header: "Mã thăm cá nhân",
                        cell(props) {
                            return <div className="form-control">{props.getValue() as string}</div>;
                        },
                    },

                    {
                        accessorKey: "ticket_index",
                        footer: (props) => props.column.id,
                        header: "Mã thăm đơn vị",
                        cell(props) {
                            return <div className="form-control">{props.getValue() as string}</div>;
                        },
                    },
                ],
            },
        ],
        [teammembers]
    );
    const [columns, setColumns] = useState<ColumnDef<TLotsDrawUpdateAthele>[]>(defaultColumns);

    const [data, setData] = useState<TLotsDrawUpdateAthele[]>([]);

    useEffect(() => {
        getMapTicketAthele(sportId, team_id, content_id)
            .then(async (res) => {
                const { data, status } = res;
                if (status !== 200) return;
                const memberFilter1 = getFilterByValue("team_id", "=", team_id);
                const members = await teammembersGet({ filter: memberFilter1 }).then((res) => {
                    const {
                        data: { data },
                    } = res;

                    return data;
                });
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

                setData(data);

                setTeammembers(members);
                console.log({ members });
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [sportId, team_id]);
    useEffect(() => {
        setColumns(defaultColumns);
    }, [teammembers]);
    const handleSubmitLotsDraw = (results: TLotsDrawUpdateAthele[]) => {
        lotsdrawUpdateAthele(sportId, content_id, results)
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