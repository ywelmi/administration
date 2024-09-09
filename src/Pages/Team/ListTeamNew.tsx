import { Ref, useRef, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { confirmModal } from "../../Component/confirmModal";
import { N } from "../../name-conversion";
import { teamCreate, teamDelete, teamsGet, teamUpdate } from "../../Service/team";
import { useConfigStore } from "../../store/config";
import { useTeamStore } from "../../store/team";
import { TTeam } from "../../type/team";
import { useTeamModal } from "./TeamForm";
import { ColumnDef } from "@tanstack/react-table";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";

type TTeamColumn = Omit<TTeam, "list_member_id">;

const TeamTableAction = ({ team }: { team: TTeamColumn }) => {
    const { updateTeam, deleteTeam, addTeams } = useTeamStore();
    const { t } = useTranslation();

    const handleUpdateTeam = (team: TTeam) => {
        teamUpdate(team)
            .then((res) => {
                const { status, data } = res;
                if (status === 200) {
                    teamsGet().then((res) => {
                        const { data, status } = res;
                        if (!data.data) return;
                        if (status == 200) {
                            const {
                                data: teams,
                                sumData: { total },
                            } = data;
                            addTeams(teams);
                            toast.success(t("success"));
                        } else {
                            toast.error(data.data ? data.data.toString() : t("error"));
                        }
                    });

                    return;
                }
                return Promise.reject(status);
            })
            .catch((err) => {
                toast.error(err?.data ? err.data : t("error"));
                console.log({ err });
            });
    };

    const { handleToggle: handleToggleUpdateModal, TeamModal: TeamUpdateModal } = useTeamModal({
        onSubmit: handleUpdateTeam,
        team: { ...team, list_member_id: team.member_ids },
    });

    const handleConfirmDel = async () => {
        const { confirm } = await confirmModal();
        if (confirm) {
            teamDelete(team.team_sport_id)
                .then((res) => {
                    const { status, data } = res;
                    console.log({ status, data });
                    if (status === 200) {
                        teamsGet().then((res) => {
                            const { data, status } = res;
                            if (!data.data) return;
                            if (status == 200) {
                                const {
                                    data: teams,
                                    sumData: { total },
                                } = data;
                                addTeams(teams);
                                toast.success(t("success"));
                            } else {
                                toast.error(data.data ? data.data.toString() : t("error"));
                            }
                        });

                        return;
                    }
                    return Promise.reject(status);
                })
                .catch((err) => {
                    toast.error(t(err?.response?.data || "error"));
                    console.log({ err });
                });
        }
        return;
    };

    return (
        <UL className="action simple-list flex-row" id={team.id}>
            <LI className="edit btn">
                <i
                    className="icon-pencil-alt"
                    onClick={() => {
                        handleToggleUpdateModal();
                    }}
                />
                <TeamUpdateModal />
            </LI>
            <LI className="delete btn" onClick={handleConfirmDel}>
                <i className="icon-trash cursor-pointer" />
            </LI>
        </UL>
    );
};
const teamAction: ColumnDef<TTeamColumn> = {
    id: "actions",
    header: "#",
    cell: function Action(props) {
        const {
            row: { original: team },
        } = props;
        const { updateTeam, deleteTeam, addTeams } = useTeamStore();
        const { t } = useTranslation();

        const handleUpdateTeam = (team: TTeam) => {
            teamUpdate(team)
                .then((res) => {
                    const { status, data } = res;
                    if (status === 200) {
                        teamsGet().then((res) => {
                            const { data, status } = res;
                            if (!data.data) return;
                            if (status == 200) {
                                const {
                                    data: teams,
                                    sumData: { total },
                                } = data;
                                addTeams(teams);
                                toast.success(t("success"));
                            } else {
                                toast.error(data.data ? data.data.toString() : t("error"));
                            }
                        });

                        return;
                    }
                    return Promise.reject(status);
                })
                .catch((err) => {
                    toast.error(err?.data ? err.data : t("error"));
                    console.log({ err });
                });
        };

        const { handleToggle: handleToggleUpdateModal, TeamModal: TeamUpdateModal } = useTeamModal({
            onSubmit: handleUpdateTeam,
            team: { ...team, list_member_id: team.member_ids },
        });

        const handleConfirmDel = async () => {
            const { confirm } = await confirmModal();
            if (confirm) {
                teamDelete(team.team_sport_id)
                    .then((res) => {
                        const { status, data } = res;
                        console.log({ status, data });
                        if (status === 200) {
                            teamsGet().then((res) => {
                                const { data, status } = res;
                                if (!data.data) return;
                                if (status == 200) {
                                    const {
                                        data: teams,
                                        sumData: { total },
                                    } = data;
                                    addTeams(teams);
                                    toast.success(t("success"));
                                } else {
                                    toast.error(data.data ? data.data.toString() : t("error"));
                                }
                            });

                            return;
                        }
                        return Promise.reject(status);
                    })
                    .catch((err) => {
                        toast.error(t(err?.response?.data || "error"));
                        console.log({ err });
                    });
            }
            return;
        };

        return (
            <UL className="action simple-list flex-row" id={team.id}>
                <LI className="edit btn">
                    <i
                        className="icon-pencil-alt"
                        onClick={() => {
                            handleToggleUpdateModal();
                        }}
                    />
                    <TeamUpdateModal />
                </LI>
                <LI className="delete btn" onClick={handleConfirmDel}>
                    <i className="icon-trash cursor-pointer" />
                </LI>
            </UL>
        );
    },
};

interface IListTeam {
    showAction?: boolean;
    selectableRows?: boolean;

    onRowSelect?: (row: TTeamColumn, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: { allSelected: boolean; selectedCount: number; selectedRows: TTeamColumn[] }) => void;
    columns?: ColumnDef<TTeamColumn>[];
    data?: TTeamColumn[];
    selectableRowSelected?: (row: TTeamColumn) => boolean;
}

const tableColumns: ColumnDef<TTeamColumn>[] = [
    {
        accessorKey: "org_name",
        footer: (props) => props.column.id,
        header: N["org_name"],
        cell(props) {
            return <div className="form-control">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "sport_name",
        footer: (props) => props.column.id,
        header: N["sport_name"],
        cell(props) {
            return <div className="">{props.getValue() as string}</div>;
        },
    },

    {
        accessorKey: "list_member_name",
        footer: (props) => props.column.id,
        header: N["list_member_name"],
        cell(props) {
            return <div className="">{props.getValue() as string}</div>;
        },
    },
];
const ListTeam = ({
    data = [],
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],

    selectableRowSelected,
}: IListTeam) => {
    let displayColumns = [...columns];
    if (showAction) {
        displayColumns = [...displayColumns, teamAction];
    }
    return (
        <div className="table-responsive">
            <TanTable
                data={data}
                onSelectedRowsChange={onSelectedRowsChange}
                selectableRowSelected={selectableRowSelected}
                getRowId={(r) => r.team_sport_id}
                columns={displayColumns}
            />
        </div>
    );
};

const PageTeamNew = () => {
    const { t } = useTranslation();
    const { teamSelector } = useConfigStore();
    const { addTeams } = useTeamStore(teamSelector());
    const { teams } = useTeamStore(teamSelector());
    const handleAddTeam = (team: TTeam) => {
        console.log({ handleAddTeam: team });
        const { ...rests } = team;
        teamCreate(rests)
            .then((res) => {
                const { status, data } = res;
                console.log({ addTeamResult: data });
                if (status === 200) {
                    teamsGet().then((res) => {
                        const { data, status } = res;
                        if (!data.data) return;
                        if (status == 200) {
                            const {
                                data: teams,
                                sumData: { total },
                            } = data;
                            addTeams(teams);
                            toast.success(t("success"));
                        } else {
                            toast.error(data.data ? data.data.toString() : t("error"));
                        }
                    });

                    return;
                }
                return Promise.reject(status);
            })
            .catch((err) => {
                toast.error(err?.data || t("error"));
                console.log({ err });
            });
    };
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useTeamModal({ onSubmit: handleAddTeam });
    const ref = useRef<ITanTableRef<TTeamColumn>>(null);
    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Danh sách đội thi đấu"} parent={"HTTQ2024"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0 card-no-border">
                                <div className="btn btn-primary" onClick={handleToggleAddModal}>
                                    <i className="fa fa-plus" />
                                    {"Thêm mới"}
                                </div>
                                <TeamAddModal />
                            </CardHeader>
                            <CardBody>
                                <ListTeam data={teams} showAction />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export { ListTeam, PageTeamNew };
