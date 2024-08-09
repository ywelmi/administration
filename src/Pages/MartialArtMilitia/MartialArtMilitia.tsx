import { useNavigate, useParams } from "react-router-dom";
import { Ref, useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { TMartialArtMilitiaArmyGroupCreate, TMartialArtMilitiaArmyGroupGet } from "../../type/martialArtMilitia";
import { useMemo, useState } from "react";
import {
    martialArtMilitiaArmyGroupCreate,
    martialArtMilitiaArmyGroupDelete,
    martialArtMilitiaArmyGroupGet,
    martialArtMilitiaArmyGroupGetAll,
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

const tableColumns: ColumnDef<TMartialArtMilitiaArmyGroupGet>[] = [
    {
        accessorKey: "content_name",
        footer: (props) => props.column.id,
        header: "Nội dung thi đấu",
        cell(props) {
            return <div className="form-control">{props.getValue() as string}</div>;
        },
    },
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
        accessorKey: "locations",
        footer: (props) => props.column.id,
        header: "Địa điểm thi đấu",
        cell(props) {
            return <div className="">{props.getValue() as string}</div>;
        },
    },
    {
        accessorKey: "match_date",
        footer: (props) => props.column.id,
        header: "Thời gian thi đấu",
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
    console.log(data);
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
        <div className="table-responsive">
            <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={columns} />
        </div>
    );
};

const getLotDrawId = (d: TMartialArtMilitiaArmyGroupGet) => d.id;

//Component render page lots draw
const PageMartialArtMilitia = () => {
    const { sports } = useSportStore();
    const [sportId, setSportId] = useState("");

    const { sport_id: paramSportId } = useParams();
    // số VĐV thi đấu trong 1 lượt
    const [numberPlayedPerRound, setNumberPlayedPerRound] = useState<number>(1);
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");

    useEffect(() => {
        if (paramSportId) {
            setSportId(paramSportId);
        }
    }, [paramSportId]);
    //danh sách các nội dung thi đấu của môn
    const contentSport = useRef<any>();
    //số VĐV tham gia môn thi
    const numberAthele = useRef<any>();
    const [data, setData] = useState<TMartialArtMilitiaArmyGroupGet[]>([]);

    const fetchData = useCallback(() => {
        martialArtMilitiaArmyGroupGetAll()
            .then((res) => {
                console.log("response here");
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch((err) => console.log({ err }));
        // getContentSport(sportId)
        //     .then((res) => {
        //         const { data, status } = res;
        //         console.log({ data });
        //         if (status === 200) contentSport.current = data;
        //         console.log(contentSport.current);
        //     })
        //     .catch((err) => console.log({ err }));
        // getNumberAthele(sportId)
        //     .then((res) => {
        //         const { data, status } = res;
        //         console.log({ data });
        //         if (status === 200) numberAthele.current = data;
        //         console.log(contentSport.current);
        //     })
        //     .catch((err) => console.log({ err }));
    }, []);
    useEffect(() => {
        fetchData();
    }, []);

    const ref = useRef<ITanTableRef<TMartialArtMilitiaArmyGroupGet>>(null);

    const handleUpdate = useCallback(() => {
        const newData = ref.current?.getData();
        if (newData && sportId) {
            // MartialArtMilitiaUpdate(sportId, newData)
            //     .then((res) => {
            //         const { data, status } = res;
            //         if (status === 200) {
            //             toast.success(N["success"]);
            //             fetchData(sportId);
            //         }
            //     })
            //     .catch((err) => {
            //         toast.error(N["failed"]);
            //         console.log({ err });
            //     });
            return;
        }
        toast.error(N["failed"]);
    }, [sportId]);

    const { handleToggle: toggleMartialArtMilitiaModal, MartialArtMilitiaModal: MartialArtMilitiaAddModal } =
        useMartialArtMilitiaModal({
            sportId: sportId,
            onSubmit: () => {
                fetchData();
            },
        });
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useGroupModal({ onSubmit: () => {} });

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
                                    <ListMartialArtMilitia tableRef={ref} data={data} showAction />
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
