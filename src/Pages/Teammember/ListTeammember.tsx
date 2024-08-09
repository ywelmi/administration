import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { LI, UL } from "../../AbstractElements";
import { useTranslation } from "react-i18next";
import { TTeammember } from "../../type/teammember";
import { useTeammemberStore } from "../../store/teammember";
import { useTeammemberModal } from "./TeammemberForm";
import { getTeammemberPhoto, teammemberCreate, teammemberDelete, teammemberUpdate } from "../../Service/teammember";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";
import { DGender, DRank } from "../../type/enum";
import { N } from "../../name-conversion";
import { convertToDate } from "../../utils/date";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

interface IListTeammember {
    showAction?: boolean;
    selectableRows?: boolean;
    data?: TTeammember[];
    onRowSelect?: (row: TTeammember, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: { allSelected: boolean; selectedCount: number; selectedRows: TTeammember[] }) => void;
    columns?: ColumnDef<TTeammember>[];
    selectableRowSelected?: (row: TTeammember) => boolean;
}

const tableColumns: ColumnDef<TTeammember>[] = [
    {
        accessorKey: "photo",
        footer: (props) => props.column.id,
        header: N["photo"],
        cell: (props) => {
            const [src, setSrc] = useState("#");
            useEffect(() => {
                const photoId = props.getValue() as string;
                if (!photoId) return;
                getTeammemberPhoto(photoId).then((imSrc) => {
                    setSrc(imSrc.url);
                });
            }, [props.getValue()]);
            return src ? <img src={src}></img> : null;
        },
    },
    {
        accessorKey: "name",
        footer: (props) => props.column.id,
        header: N["name"],
        cell: (props) => props.getValue() as string,
    },
    {
        accessorKey: "rank",
        footer: (props) => props.column.id,
        header: N["rank"],
        cell: (props) => DRank[props.getValue() as number],
    },
    {
        accessorKey: "gender",
        footer: (props) => props.column.id,
        header: N["gender"],
        cell: (props) => {
            return DGender[parseInt(props.getValue() as string)];
        },
        meta: { custom: { gender: true } },
    },
    {
        accessorKey: "created",
        footer: (props) => props.column.id,
        header: N["created"],
        cell: (props) => convertToDate(props.getValue() as string),
    },
    {
        accessorKey: "dob",
        footer: (props) => props.column.id,
        header: N["dob"],
        cell: (props) => convertToDate(props.getValue() as string),
        meta: { custom: { date: true } },
    },
    {
        accessorKey: "date_join_army",
        footer: (props) => props.column.id,
        header: N["date_join_army"],
        cell: (props) => convertToDate(props.getValue() as string),
    },
    {
        accessorKey: "org_name",
        footer: (props) => props.column.id,
        header: N["org_name"],
        cell: (props) => props.getValue() as string,
    },
    {
        accessorKey: "weights",
        footer: (props) => props.column.id,
        header: N["weights"],
        cell: (props) => props.getValue() as string,
    },
    {
        accessorKey: "competition_name",
        footer: (props) => props.column.id,
        header: N["competition_name"],
        cell: (props) => props.getValue() as string,
    },
];

const action: ColumnDef<TTeammember> = {
    id: "actions",
    header: "#",
    cell(props) {
        const {
            row: { original: teammember },
        } = props;

        const { updateTeammember, deleteTeammember } = useTeammemberStore();
        const { t } = useTranslation();
        const handleUpdateTeammember = (teammember: TTeammember) => {
            console.log({ handleUpdateTeammember: teammember });
            teammemberUpdate(teammember)
                .then((res) => {
                    const { status, data } = res;
                    if (status === 200) {
                        updateTeammember(data as TTeammember);
                        toast.success(t("success"));
                        return;
                    }

                    return Promise.reject(status);
                })
                .catch((err) => {
                    toast.error(t("error"));
                    console.log({ err });
                });
        };

        const { handleToggle: handleToggleUpdateModal, TeammemberModal: TeammemberUpdateModal } = useTeammemberModal({
            onSubmit: handleUpdateTeammember,
            teammember,
        });

        const handleConfirmDel = async () => {
            const { confirm } = await useConfirmModal();
            console.log({ confirm });
            if (confirm) {
                teammemberDelete(teammember.id)
                    .then((res) => {
                        const { status, data } = res;
                        console.log({ status, data });
                        if (status === 200) {
                            toast.success(t("success"));
                            deleteTeammember(teammember.id);
                            return;
                        }
                        return Promise.reject(status);
                    })
                    .catch((err) => {
                        const {
                            response: { data },
                        } = err;
                        if (data) toast.error(data);
                        else {
                            toast.error(t("error"));
                        }
                        console.log({ err });
                    });
            }
            return;
        };

        return (
            <UL className="action simple-list flex-row" id={teammember.id}>
                <LI className="edit btn">
                    <i className="icon-pencil-alt" onClick={handleToggleUpdateModal} />
                    <TeammemberUpdateModal />
                </LI>
                <LI className="delete btn" onClick={handleConfirmDel}>
                    <i className="icon-trash cursor-pointer" />
                </LI>
            </UL>
        );
    },
};

const ListTeammember = ({
    data = [],
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    selectableRowSelected,
}: IListTeammember) => {
    let displayColumns = [...columns];

    if (showAction) {
        displayColumns = [...displayColumns, action];
    }

    return (
        <div className="table-responsive">
            <TanTable
                data={data}
                columns={displayColumns}
                onSelectedRowsChange={onSelectedRowsChange}
                selectableRowSelected={selectableRowSelected}
                getRowId={(r) => r.id}
            />
        </div>
    );
};

const PageTeammember = () => {
    const { t } = useTranslation();
    const { addTeammember } = useTeammemberStore();
    const { teammembers } = useTeammemberStore();

    const handleAddTeammember = (teammember: TTeammember) => {
        console.log({ handleAddTeammember: teammember });
        const { id, ...rests } = teammember;
        teammemberCreate(rests)
            .then((res) => {
                const { status, data } = res;
                if (status === 200) {
                    console.log({ addmember: data });
                    addTeammember(data as TTeammember);
                    toast.info(t("success"));
                    return;
                }
                return Promise.reject(status);
            })
            .catch((err) => {
                toast.error(err?.data || t("error"));
                console.log({ err });
            });
    };
    const { handleToggle: handleToggleAddModal, TeammemberModal: TeammemberAddModal } = useTeammemberModal({
        onSubmit: handleAddTeammember,
    });

    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Danh sách vận động viên"} parent={"HTTQ2024"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0 card-no-border">
                                <div className="btn btn-primary" onClick={handleToggleAddModal}>
                                    <i className="fa fa-plus" />
                                    {"Thêm mới"}
                                </div>
                                <TeammemberAddModal />
                            </CardHeader>
                            <CardBody>
                                <ListTeammember data={teammembers} showAction />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { ListTeammember, PageTeammember };
