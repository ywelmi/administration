import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { InputSelect } from "../../Component/InputSelect";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { getFilterByValue, getMoreFilterByValue } from "../../Service/_getParams";
import { getContentSport, getMapTicketAthele, lotsdrawUpdateAthele } from "../../Service/lotsdraw";
import { teammembersGet } from "../../Service/teammember";
import { TLotsDrawUpdateAthele } from "../../type/lotsdraw";
import { TTeammember } from "../../type/teammember";

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
                                        if (e.target.value == "") {
                                            table.options.meta?.updateData(
                                                index,
                                                id,
                                                "00000000-0000-0000-000000000000"
                                            );
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
                        accessorKey: "clothers_number",
                        footer: (props) => props.column.id,
                        header: "Số áo (Nếu có)",
                    },

                    {
                        accessorKey: "ticket_index",
                        footer: (props) => props.column.id,
                        header: "Mã thăm đơn vị",
                        cell(props) {
                            return <div className="form-control">{props.getValue() as string}</div>;
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
                        accessorKey: "turn",
                        footer: (props) => props.column.id,
                        header: "Đợt bơi/Lượt chạy",
                        cell(props) {
                            return <div className="form-control">{props.getValue() as string}</div>;
                        },
                    },
                    {
                        accessorKey: "turn_index",
                        footer: (props) => props.column.id,
                        header: "Làn bơi/Đường chạy",
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
        getContentSport(sportId).then((res) => {
            for (const element of res.data) {
                if (element.id == content_id) {
                    getMapTicketAthele(sportId, team_id, content_id)
                        .then(async (res) => {
                            const { data, status } = res;
                            if (status !== 200) return;
                            const memberFilter1 = getMoreFilterByValue("team_id", "=", team_id);
                            const sportFilter1 = getMoreFilterByValue("sport_id", "=", sportId);
                            if (element.gender != undefined) {
                                const genderFilter1 = getMoreFilterByValue("gender", "=", element.gender!.toString());
                                var allFilter = [memberFilter1, sportFilter1, genderFilter1];
                            } else {
                                var allFilter = [memberFilter1, sportFilter1];
                            }

                            const members = await teammembersGet({ filter: `[${allFilter}]` }).then((res) => {
                                const {
                                    data: { data },
                                } = res;

                                return data;
                            });

                            setData(data);

                            setTeammembers(members);
                            console.log({ members });
                        })
                        .catch((err) => {
                            console.log({ err });
                        });
                }
            }
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
        <div className="justify-content-center">
            <TanTable ref={ref} data={data} getRowId={getLotDrawId} columns={columns} />
            <Col xs="12" className="gap-2 d-flex justify-content-center" style={{ display: "flex" }}>
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
