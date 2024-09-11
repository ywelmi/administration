import { useNavigate, useParams } from "react-router-dom";
import { Ref, useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroup, InputGroupText, List, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { TMartialArtMilitiaArmyGroupCreate, TMartialArtMilitiaArmyGroupGet } from "../../type/martialArtMilitia";
import { useMemo, useState } from "react";
import {
    groupGetAll,
    martialArtMilitiaArmyGroupCreate,
    martialArtMilitiaArmyGroupDelete,
    martialArtMilitiaArmyGroupGet,
    martialArtMilitiaArmyGroupGetContent,
    martialArtMilitiaArmyGroupGetUpdate,
} from "../../Service/martialArtMilitia";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import { ColumnDef } from "@tanstack/react-table";
import ReactDatePicker from "react-datepicker";
import { convertHoursToDate, convertToDate } from "../../utils/date";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { Btn, H3, H5, LI } from "../../AbstractElements";
import { useMartialArtMilitiaModal } from "./MartialArtMilitiaForm";
import { useGroupModal } from "./GroupForm";
import { useMartialArtMilitiaStore } from "../../store/martial_art_militia";
import { useOrgStore } from "../../store/org";
import { TTeammember } from "../../type/teammember";
import { getFilterByValue, getMoreFilterByValue } from "../../Service/_getParams";
import { teamsGet } from "../../Service/team";

import { useConfigStore } from "../../store/config";
import { TLotsDraw } from "../../type/lotsdraw";
import { getContentSport, lotsdrawScheduleGet, lotsdrawsGet, lotsdrawUpdate } from "../../Service/lotsdraw";

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
interface IListLotsDraw {
    showAction?: boolean;
    selectableRows?: boolean;
    onRowSelect?: (row: TLotsDraw, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: { allSelected: boolean; selectedCount: number; selectedRows: TLotsDraw[] }) => void;
    columns?: ColumnDef<TLotsDraw>[];
    data?: TLotsDraw[];
    selectableRowSelected?: (row: TLotsDraw) => boolean;
    tableRef?: Ref<ITanTableRef<TLotsDraw>>;
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
            const sportFilter = getMoreFilterByValue("sport_id", "=", group.sport_id);
            groupGetAll({ filter: `[${sportFilter}]` })
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
            <TanTable ref={tableRef} data={tableData} getRowId={getMartialArtMilitiaId} columns={displayColumns} />
        </div>
    );
};

const getLotDrawId = (d: TLotsDraw) => d.id;
const getMartialArtMilitiaId = (d: TMartialArtMilitiaArmyGroupGet) => d.id;
//Component render page lots draw
const MartialArtMilitia = () => {
    const { MartialArtMilitias, addMartialArtMilitias } = useMartialArtMilitiaStore();
    const [sportId, setSportId] = useState("");
    const [stateMartial, setStateMartial] = useState("manager");
    const { sport_id: paramSportId } = useParams();
    const { orgs } = useOrgStore();
    const { sportSelector } = useConfigStore();
    const { sports } = useSportStore();
    const sportMartialArtMilitia = sports.find((s) => s.point_unit === 2);
    useEffect(() => {
        if (paramSportId) {
            setSportId(paramSportId);
        }
    }, [paramSportId]);
    const [gender, setGender] = useState<any>("");
    const [orgName, setOrgName] = useState<any>(null);
    const [dataLotsdraw, setDataLotsdraw] = useState<any>([]);
    const [type, setType] = useState<any>(null);
    const [content, setContent] = useState<any>(null);
    const fetchDataGroup = useCallback(() => {
        const sportFilter = getMoreFilterByValue("sport_id", "=", sportMartialArtMilitia?.id!);
        groupGetAll({ filter: `[${sportFilter}]` })
            .then((res) => {
                console.log("response here");
                console.log(res.data.data);
                addMartialArtMilitias(res.data.data);

                fetch_data_content();
            })
            .catch((err) => console.log({ err }));
    }, []);
    const fetchDataLotsdraw = useCallback((content_id: any) => {
        if (sportMartialArtMilitia!.id && content_id) {
            setContent(content_id);
            lotsdrawsGet(sportMartialArtMilitia!.id, content_id)
                .then((res) => {
                    const { data, status } = res;
                    console.log({ data });
                    if (status === 200) {
                        setDataLotsdraw(data);
                    }
                })
                .catch((err) => console.log({ err }));
        }
    }, []);
    useEffect(() => {
        (async () => {
            if (stateMartial == "manager") {
                var allFilter: any[] = [];
                if (orgName) {
                    const orgFilter = getMoreFilterByValue("org_id", "=", orgName);
                    allFilter = [...allFilter, orgFilter];
                }
                if (type) {
                    const typeFilter = getMoreFilterByValue("content_name", "=", type);
                    allFilter = [...allFilter, typeFilter];
                }
                if (gender) {
                    const genderFilter = getMoreFilterByValue("gender", "=", gender);
                    allFilter = [...allFilter, genderFilter];
                }
                if (sportMartialArtMilitia?.id) {
                    const sportFilter = getMoreFilterByValue("sport_id", "=", sportMartialArtMilitia?.id);
                    allFilter = [...allFilter, sportFilter];
                }
                const group = await groupGetAll({ filter: `[${allFilter}]` }).then((res) => {
                    const {
                        data: { data },
                    } = res;

                    return data;
                });
                console.log("new");
                console.log(group);
                addMartialArtMilitias(group);
            } else {
                fetchDataLotsdraw(content);
            }
        })();
    }, [type, orgName, gender]);
    useEffect(() => {
        if (sportMartialArtMilitia) {
            stateMartial == "manager" ? fetchDataGroup() : fetchDataLotsdraw(content);
        }
    }, [stateMartial, content]);

    const refGroup = useRef<ITanTableRef<TMartialArtMilitiaArmyGroupGet>>(null);
    const ref = useRef<ITanTableRef<TLotsDraw>>(null);
    const listTypeGroup = [
        { id: 1, name: "Thi đấu đôi", number: 2, gender: 1 },

        { id: 2, name: "Đồng diễn", number: 100, gender: 0 },
    ];
    const autoCallUpdateSchedule = useCallback((content_id: any) => {
        setContent(content_id);
        lotsdrawsGet(sportMartialArtMilitia!.id, "")
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) {
                    if (data && sportMartialArtMilitia!.id) {
                        const dataSubmit = data!.map((e: TLotsDraw) => {
                            return {
                                id: e.id,
                                team_name: e.team_name,
                                org_id: e.org_id,
                                sport_id: e.sport_id,
                                content_id: content_id,
                                team_id: e.team_id,
                                ticket_index: e.ticket_index,
                                has_ranking: true,
                                match_hour: e.match_hour,
                                match_date: e.match_date,
                                locations: e.locations,
                            };
                        });
                        lotsdrawUpdate(sportMartialArtMilitia!.id, content_id, dataSubmit)
                            .then((res) => {
                                const { data, status } = res;
                                if (status === 200) {
                                    setDataLotsdraw(dataSubmit);
                                    fetchDataLotsdraw(content);
                                }
                            })
                            .catch((err) => {
                                toast.error(err.data);
                                console.log({ err });
                            });
                        lotsdrawScheduleGet(sportMartialArtMilitia!.id, content_id).then((res) => {
                            const { data, status } = res;
                            if (status === 200) toast.info("Đã cập nhật thông tin làn lượt");
                        });
                        return;
                    }
                }
            })
            .catch((err) => console.log({ err }));
    }, []);
    const handleUpdate = useCallback(() => {
        const newData = ref.current?.getData();

        if (newData && sportMartialArtMilitia!.id) {
            const dataSubmit = newData!.map((e: TLotsDraw) => {
                return {
                    id: e.id,
                    sport_id: e.sport_id,
                    content_id: content,
                    team_id: e.team_id,
                    ticket_index: e.ticket_index,
                    has_ranking: true,
                    match_hour: e.match_hour,
                    match_date: e.match_date,
                    locations: e.locations,
                };
            });

            lotsdrawUpdate(sportMartialArtMilitia!.id, content, dataSubmit)
                .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                        toast.success(N["success"]);
                        fetchDataLotsdraw(content);
                    }
                })
                .catch((err) => {
                    toast.error(N["failed"] + err);
                    console.log({ err });
                });

            return;
        }
    }, [content]);
    const handleAddNew = (e: any) => {
        martialArtMilitiaArmyGroupCreate(e)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(N["success"]);
                    fetchDataGroup();
                } else {
                    toast.error(res.data);
                }
            })
            .catch((err) => {
                toast.error(N["failed"]);
                console.log({ err });
            });
        return;
    };

    // const { handleToggle: toggleMartialArtMilitiaModal, MartialArtMilitiaModal: MartialArtMilitiaAddModal } =
    //     useMartialArtMilitiaModal({
    //         sportId: sportMartialArtMilitia ? sportMartialArtMilitia!.id! : sportId,

    //         onSubmit: () => {
    //             fetchDataGroup();
    //         },
    //     });
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useGroupModal({
        sportId: sportMartialArtMilitia ? sportMartialArtMilitia!.id! : sportId,
        onSubmit: (e) => {
            handleAddNew(e);
        },
    });

    const listContent = useRef<any>([]);
    const fetch_data_content = () => {
        (async () => {
            const contents = await martialArtMilitiaArmyGroupGetContent(sportMartialArtMilitia!.id!).then((res) => {
                return res.data;
            });
            console.log(contents);
            listContent.current = contents;
        })();
    };
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader className="pb-0 card-no-border">
                            {stateMartial == "manager" ? (
                                <>
                                    <div className="d-flex justify-content-center">
                                        <H3 className="text-center">Danh sách thi đấu võ Dân quân tự vệ</H3>
                                    </div>
                                    <div className="d-flex justify-content-center">
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
                                        <Col md={4}>
                                            <InputSelect
                                                title={"Đơn vị"}
                                                data={orgs}
                                                k="name"
                                                name="org_id"
                                                v="id"
                                                handleChange={(e) => {
                                                    e.target.value != ""
                                                        ? setOrgName(e.target.value)
                                                        : setOrgName(null);
                                                }}
                                                value={orgName}
                                            />
                                        </Col>
                                        <Col md={4}>
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
                                        <Col md={4}>
                                            <InputSelect
                                                title={"Nội dung"}
                                                data={listTypeGroup}
                                                k="name"
                                                name="name"
                                                v="name"
                                                handleChange={(e) => {
                                                    e.target.value != "" ? setType(e.target.value) : setType(null);
                                                    fetchDataLotsdraw(e.target.value);
                                                }}
                                                value={type}
                                            />
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                <></>
                            )}
                        </CardHeader>
                        <CardBody>
                            <>
                                {stateMartial == "manager" ? (
                                    <ListMartialArtMilitia tableRef={refGroup} data={MartialArtMilitias} showAction />
                                ) : dataLotsdraw.length > 0 ? (
                                    <>
                                        <div className="d-flex justify-content-center mt-2">
                                            <div
                                                className="btn btn-warning text-dark"
                                                onClick={() => {
                                                    if (content) {
                                                        autoCallUpdateSchedule(content);

                                                        // setTimeout(() => fetchData(sportId), 2000);
                                                    } else {
                                                        toast.warn("Mời chọn môn thi");
                                                    }
                                                }}
                                            >
                                                <i className="fa fa-plus" /> &nbsp;
                                                {"Làm mới bốc thăm nội dung"}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="d-flex justify-content-center mt-2">
                                        <H3 className="text-danger text-center">Chưa cập nhật bốc thăm nội dung</H3>
                                        <div
                                            className="btn btn-warning text-dark"
                                            onClick={() => {
                                                if (content) {
                                                    autoCallUpdateSchedule(content);

                                                    // setTimeout(() => fetchData(sportId), 2000);
                                                } else {
                                                    toast.warn("Mời chọn môn thi");
                                                }
                                            }}
                                        >
                                            <i className="fa fa-plus" /> &nbsp;
                                            {"Làm mới bốc thăm nội dung"}
                                        </div>
                                    </div>
                                )}
                            </>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { ListMartialArtMilitia, MartialArtMilitia };
