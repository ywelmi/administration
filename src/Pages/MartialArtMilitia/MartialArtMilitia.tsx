import { useNavigate, useParams } from "react-router-dom";
import { Ref, useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroup, InputGroupText, List, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { TMartialArtMilitiaArmyGroupCreate, TMartialArtMilitiaArmyGroupGet } from "../../type/martialArtMilitia";
import { useMemo, useState } from "react";
import {
    martialArtMilitiaArmyGroupCreate,
    martialArtMilitiaArmyGroupDelete,
    martialArtMilitiaArmyGroupGet,
    martialArtMilitiaArmyGroupGetAll,
    martialArtMilitiaArmyGroupGetContent,
    martialArtMilitiaArmyGroupGetUpdate,
} from "../../Service/martialArtMilitia";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import { ColumnDef } from "@tanstack/react-table";
import ReactDatePicker from "react-datepicker";
import { convertToDate } from "../../utils/date";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { Btn, H3, H5, LI } from "../../AbstractElements";
import { useMartialArtMilitiaModal } from "./MartialArtMilitiaForm";
import { useGroupModal } from "./GroupForm";
import { useMartialArtMilitiaStore } from "../../store/martial_art_militia";
import { useOrgStore } from "../../store/org";
import { TTeammember } from "../../type/teammember";
import { getFilterByValue, getMoreFilterByValue } from "../../Service/_getParams";
import { teamsGet } from "../../Service/team";
import { useMartialArtMilitiaResultModal } from "./MartialArtMilitiaFormResult";

// import {  } from "./MartialArtMilitiaForm";
// import { useMartialArtMilitiaScheduleModal } from "./MartialArtMilitiaSchedule";

// const MartialArtMilitiaTableAction = (
//   { MartialArtMilitia }: { MartialArtMilitia: TMartialArtMilitiaColumn },
// ) => {
//   const { updateMartialArtMilitia, deleteMartialArtMilitia } =
//     useMartialArtMilitiaStore();
//   const { addMartialArtMilitiaMatch } = useMartialArtMilitiaMatchStore();
//   const { t } = useTranslation();
//
//   const handleUpdateMartialArtMilitia = (MartialArtMilitia: TMartialArtMilitia) => {
//     MartialArtMilitiaUpdate(MartialArtMilitia).then(
//       (res) => {
//         const { status, data } = res;
//         if (status === 200) {
//           updateMartialArtMilitia(data as TMartialArtMilitia);
//           toast.success(t("success"));
//           return;
//         }
//
//         return Promise.reject(status);
//       },
//     ).catch((err) => {
//       toast.error(t("error"));
//       console.log({ err });
//     });
//   };
//
//   const {
//     handleToggle: handleToggleUpdateModal,
//     MartialArtMilitiaModal: MartialArtMilitiaUpdateModal,
//   } = useMartialArtMilitiaModal({
//     onSubmit: handleUpdateMartialArtMilitia,
//     MartialArtMilitia,
//   });
//
//   const handleConfirmDel =  async () => {
//     if (confirm) {
//     if (confirm) {
//       MartialArtMilitiaDelete(MartialArtMilitia.id).then((res) => {
//         const { status, data } = res;
//         console.log({ status, data });
//         if (status === 200) {
//           toast.success(t("success"));
//           deleteMartialArtMilitia(MartialArtMilitia.id);
//           return;
//         }
//         return Promise.reject(status);
//       })
//         .catch((err) => {
//           toast.error(t(err?.response?.data || "error"));
//           console.log({ err });
//         });
//     }
//     return;
//   };
//
//   // const handleAddMartialArtMilitiaMatch = (
//   //   MartialArtMilitiaMatch: Omit<TMartialArtMilitiaMatch, "id">,
//   // ) => {
//   //   MartialArtMilitiaMatchCreate(MartialArtMilitiaMatch).then(
//   //     (res) => {
//   //       const { status, data } = res;
//   //       if (status === 200) {
//   //         addMartialArtMilitiaMatch(data);
//   //         toast.info(t("success"));
//   //         return;
//   //       }
//   //       return Promise.reject(status);
//   //     },
//   //   ).catch((err) => {
//   //     toast.error(t("error"));
//   //     console.log({ err });
//   //   });
//   // };
//
//   // const { handleToggle: toggleMatch, MartialArtMilitiaMatchModal } =
//   //   useModalPageMartialArtMilitiaMatch({
//   //     tableId: MartialArtMilitia.id,
//   //   });
//
//   const navigate = useNavigate();
//
//   return (
//     <UL className="action simple-list flex-row" id={MartialArtMilitia.id}>
//       <LI className="edit btn">
//         <i
//           className="icon-pencil-alt"
//           onClick={handleToggleUpdateModal}
//         />
//         <MartialArtMilitiaUpdateModal />
//       </LI>
//       <LI className="delete btn" onClick={handleConfirmDel}>
//         <i className="icon-trash cursor-pointer" />
//       </LI>
//
//       <LI
//         className="edit btn"
//         onClick={() =>
//           navigate(`/MartialArtMilitias/match/${MartialArtMilitia.id}`)}
//       >
//         <i className="icon-folder" />
//         Lập lịch
//       </LI>
//       <LI
//         className="edit btn"
//         onClick={() =>
//           navigate(`/MartialArtMilitias/match-report/${MartialArtMilitia.id}`)}
//       >
//         <i className="icon-slice cursor-pointer">
//         </i>
//         Nhập kết quả
//       </LI>
//     </UL>
//   );
// };

interface IListMartialArtMilitia {
    showAction?: boolean;
    selectableRows?: boolean;
    onRowSelect?: (row: TMartialArtMilitiaArmyGroupGet, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: {
        allSelected: boolean;
        selectedCount: number;
        selectedRows: TMartialArtMilitiaArmyGroupGet[];
    }) => void;
    columns?: ColumnDef<TMartialArtMilitiaArmyGroupGet>[];
    data?: TMartialArtMilitiaArmyGroupGet[];
    selectableRowSelected?: (row: TMartialArtMilitiaArmyGroupGet) => boolean;
    tableRef?: Ref<ITanTableRef<TMartialArtMilitiaArmyGroupGet>>;
}
const userAction: ColumnDef<TMartialArtMilitiaArmyGroupGet> = {
    id: "actions",

    header: "#",
    cell(props) {
        const {
            row: { original: group },
        } = props;

        const { addMartialArtMilitias, deleteMartialArtMilitia } = useMartialArtMilitiaStore();
        const fetchData = useCallback(() => {
            martialArtMilitiaArmyGroupGetAll()
                .then((res) => {
                    console.log("response here");
                    console.log(res.data.data);
                    addMartialArtMilitias(res.data.data);
                })
                .catch((err) => console.log({ err }));
        }, []);
        const deleteGroup = () => {
            martialArtMilitiaArmyGroupDelete(group.id)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success(N["success"]);
                        deleteMartialArtMilitia(group.id);
                        fetchData();
                    }
                })
                .catch((err) => {
                    toast.error(N["failed"] + err.data);
                    console.log({ err });
                });
            return;
        };
        return (
            <Btn className="btn btn-danger" onClick={deleteGroup}>
                <i className="icon-trash cursor-pointer" /> Hủy đăng ký
            </Btn>
        );
    },
};
const tableColumns: ColumnDef<TMartialArtMilitiaArmyGroupGet>[] = [
    {
        accessorKey: "name",
        footer: (props) => props.column.id,
        header: N["team_name"],
        cell(props) {
            return <div className="form-control">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "team_member_name",
        footer: (props) => props.column.id,
        header: "Thành viên",
        cell(props) {
            return <div className="form-control">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "team_name",
        footer: (props) => props.column.id,
        header: "Đơn vị",
        cell(props) {
            return <div className="form-control">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "ticket_index",
        footer: (props) => props.column.id,
        header: N["ticket_index"],
        cell(props) {
            return <div className="">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "match_hour",
        footer: (props) => props.column.id,
        header: N["match_hour"],
        cell({ getValue, row: { index, original }, column: { id }, table }) {
            return (
                <ReactDatePicker
                    className="form-control"
                    name="match_hour"
                    // selected={new Date(original.match_date as string || new Date())}
                    value={original.match_hour}
                    onChange={(date) =>
                        table.options.meta?.updateData(index, id, `${date?.getHours()}:${date?.getMinutes()}`)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Giờ"
                    locale={"vi"}
                />
            );
        },
    },
    {
        accessorKey: "match_date",
        footer: (props) => props.column.id,
        header: N["match_date"],
        cell({ getValue, row: { index, original }, column: { id }, table }) {
            return (
                <ReactDatePicker
                    className="form-control"
                    name="date_join_army"
                    showYearDropdown
                    // selected={new Date(getValue() as string || new Date())}
                    value={original.match_date ? convertToDate(original.match_date) : undefined}
                    onChange={(date) => {
                        table.options.meta?.updateData(index, id, date?.toISOString());
                    }}
                    locale={"vi"}
                    dateFormat={"dd/MM/yyyy"}
                />
            );
        },
    },
    {
        accessorKey: "match_time",
        footer: (props) => props.column.id,
        header: N["match_time"],
    },
    {
        accessorKey: "locations",
        footer: (props) => props.column.id,
        header: N["locations"],
    },
    {
        // accessorKey: "locations",
        header: "Kết quả thi đấu",
        footer: (props) => props.column.id,
        cell({ getValue, row: { index, original }, column: { id }, table }) {
            // let hasEmptyFiled = false;
            // const idx = Object.values(original).findIndex((v) => v == null);
            // if (idx !== -1) hasEmptyFiled = true;
            // if (hasEmptyFiled) return null;

            const { MartialArtMilitiaModal, handleToggle } = useMartialArtMilitiaResultModal({
                sportId: original.sport_id,
                orgId: original.org_id,
                onsubmit: (e: any) => alert(e),
            });
            return (
                <Btn className="btn btn-info edit" onClick={handleToggle}>
                    <i className="icon-pencil-alt" />
                    Cập nhật
                    <MartialArtMilitiaModal />
                </Btn>
            );
        },
    },
];

const isUpdated = (d: TMartialArtMilitiaArmyGroupGet) => {
    const detailCols: (keyof TMartialArtMilitiaArmyGroupGet)[] = [
        "ticket_index",
        "match_hour",
        "match_date",
        "locations",
    ];
    for (const c of detailCols) {
        if (!Object.keys(d).includes(c)) {
            return false;
        }
    }
    return true;
};

const ListMartialArtMilitia = ({
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    data = [],
    tableRef,
    selectableRowSelected,
}: IListMartialArtMilitia) => {
    // if (columns.length > 0 && showAction) {
    //   columns = [...columns, {
    //     name: "#",
    //     cell: (row: TMartialArtMilitiaColumn) => <MartialArtMilitiaTableAction MartialArtMilitia={row} />,
    //     sortable: true,
    //   }];
    // }
    //
    //
    let displayColumns = [...columns];
    if (showAction) {
        displayColumns = [...displayColumns, userAction];
    }

    console.log(data);
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
        <div className="table-responsive">
            <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={displayColumns} />
        </div>
    );
};

const getLotDrawId = (d: TMartialArtMilitiaArmyGroupGet) => d.id;

//Component render page lots draw
const PageMartialArtMilitia = () => {
    const { MartialArtMilitias, addMartialArtMilitias } = useMartialArtMilitiaStore();
    const [sportId, setSportId] = useState("");

    const { sport_id: paramSportId } = useParams();
    const { orgs } = useOrgStore();
    useEffect(() => {
        if (paramSportId) {
            setSportId(paramSportId);
        }
    }, [paramSportId]);
    const [gender, setGender] = useState<any>("");
    const [orgName, setOrgName] = useState<any>(null);

    const [type, setType] = useState<any>(null);
    const fetchData = useCallback(() => {
        martialArtMilitiaArmyGroupGetAll()
            .then((res) => {
                console.log("response here");
                console.log(res.data.data);
                addMartialArtMilitias(res.data.data);

                fetch_data_content();
            })
            .catch((err) => console.log({ err }));
    }, []);
    useEffect(() => {
        (async () => {
            // const members = await teammembersGet({ filter: memberFilter }).then((res) => {
            //     const {
            //         data: { data },
            //     } = res;
            //     return data;
            // });
            // setOrgMembers(members);
            var allFilter: any[] = [];
            if (orgName) {
                const orgFilter = getMoreFilterByValue("org_id", "=", orgName);
                allFilter = [...allFilter, orgFilter];
            }

            if (gender) {
                const genderFilter = getMoreFilterByValue("gender", "=", gender);
                allFilter = [...allFilter, genderFilter];
            }
            const group = await martialArtMilitiaArmyGroupGetAll({ filter: `[${allFilter}]` }).then((res) => {
                const {
                    data: { data },
                } = res;

                return data;
            });
            console.log("new");
            console.log(group);
            addMartialArtMilitias(group);
        })();
    }, [type, orgName, gender]);
    useEffect(() => {
        fetchData();
        fetch_data_content();
    }, []);

    const ref = useRef<ITanTableRef<TMartialArtMilitiaArmyGroupGet>>(null);

    const handleUpdate = useCallback(() => {
        const newData = ref.current?.getData();

        if (newData) {
            martialArtMilitiaArmyGroupGetUpdate(newData)
                .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                        console.log({ data });
                        fetchData();

                        toast.success(N["success"]);
                    }
                })
                .catch((err) => {
                    console.log({ err });
                    toast.error(err.data);
                });
            return;
        }
    }, [sportId]);
    const handleAddNew = (e: any) => {
        martialArtMilitiaArmyGroupCreate(e)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(N["success"]);
                    fetchData();
                }
            })
            .catch((err) => {
                toast.error(N["failed"]);
                console.log({ err });
            });
        return;
    };
    const { handleToggle: toggleMartialArtMilitiaModal, MartialArtMilitiaModal: MartialArtMilitiaAddModal } =
        useMartialArtMilitiaModal({
            sportId: sportId,
            content_id: type ? type.id : "",
            onSubmit: () => {
                fetchData();
            },
        });
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useGroupModal({
        sportId: sportId,
        onSubmit: (e) => {
            handleAddNew(e);
        },
    });

    const listContent = useRef<any>([]);
    const fetch_data_content = () => {
        (async () => {
            const contents = await martialArtMilitiaArmyGroupGetContent().then((res) => {
                return res.data;
            });
            console.log(contents);
            listContent.current = contents;
        })();
    };
    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Thi đấu võ Dân quân tự vệ"} parent={"HTTQ2024"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0 card-no-border">
                                <div className="d-flex justify-content-center">
                                    <H3 className="text-center">Môn Võ Dân quân tự vệ</H3>
                                    <div
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleToggleAddModal();
                                        }}
                                    >
                                        <i className="fa fa-plus" />
                                        &nbsp;
                                        {"Tạo đội thi đấu"}
                                    </div>
                                    <TeamAddModal />
                                </div>
                                <Row className="m-t-10">
                                    <Col md={6}>
                                        <InputSelect
                                            title={"Đơn vị"}
                                            data={orgs}
                                            k="name"
                                            name="org_id"
                                            v="id"
                                            handleChange={(e) => {
                                                e.target.value != "" ? setOrgName(e.target.value) : setOrgName(null);
                                            }}
                                            value={orgName}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <InputSelect
                                            title={"Giới tính"}
                                            data={[
                                                { id: 1, name: "Nam" },
                                                { id: 2, name: "Nữ" },
                                                { id: 0, name: "Tất cả" },
                                            ]}
                                            k="name"
                                            name="name"
                                            v="id"
                                            handleChange={(e) => {
                                                e.target.value != "" ? setGender(e.target.value) : setGender(null);
                                            }}
                                            value={gender}
                                        />
                                    </Col>
                                </Row>

                                <div className="d-flex justify-content-center">
                                    <div className="flex gap-2 mt-4">
                                        <div
                                            className="btn btn-primary"
                                            onClick={() => {
                                                handleUpdate();
                                            }}
                                        >
                                            <i className="fa fa-edit" />
                                            {"Cập nhật lịch"}
                                        </div>
                                        <div
                                            className="btn btn-danger"
                                            onClick={() => {
                                                toggleMartialArtMilitiaModal();

                                                // setTimeout(() => fetchData(sportId), 2000);
                                            }}
                                        >
                                            <i className="fa fa-plus" /> &nbsp;
                                            {"Cập nhật kết quả bốc thăm"}
                                        </div>
                                    </div>
                                </div>

                                <MartialArtMilitiaAddModal />
                            </CardHeader>
                            <CardBody>
                                <>
                                    <ListMartialArtMilitia tableRef={ref} data={MartialArtMilitias} showAction />
                                </>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export { ListMartialArtMilitia, PageMartialArtMilitia };
