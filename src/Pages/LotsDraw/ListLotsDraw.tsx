import { useNavigate, useParams } from "react-router-dom";
import { Ref, useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { TLotsDraw } from "../../type/lotsdraw";
import { useMemo, useState } from "react";
import {
    getContentSport,
    lotsdrawsGet,
    getNumberAthele,
    // lotsdrawCreate,
    // lotsdrawDelete,
    lotsdrawUpdate,
    lotsdrawGroupGetAll,
    lotsdrawScheduleGet,
    groupUpdate,
} from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import { ColumnDef } from "@tanstack/react-table";
import ReactDatePicker from "react-datepicker";
import { convertToDate } from "../../utils/date";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { Btn, H2, H3, H5, LI } from "../../AbstractElements";
import {
    useLotsDrawSubmitGroupModal,
    useLotsDrawSubmitModal,
    useLotsDrawUpdateAtheleModal,
} from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";
import { useTeamAtheleModal } from "./CreateGroupForm";
import {
    groupGetAll,
    martialArtMilitiaArmyGroupCreate,
    martialArtMilitiaArmyGroupGetUpdate,
} from "../../Service/martialArtMilitia";
import { martialArtArmyGroupDelete, martialArtArmyGroupGetAll } from "../../Service/martialArt";
import { getMoreFilterByValue } from "../../Service/_getParams";
import { useConfigStore } from "../../store/config";
// const LotsDrawTableAction = (
//   { lotsdraw }: { lotsdraw: TLotsDrawColumn },
// ) => {
//   const { updateLotsDraw, deleteLotsDraw } =
//     useLotsDrawStore();
//   const { addLotsDrawMatch } = useLotsDrawMatchStore();
//   const { t } = useTranslation();
//
//   const handleUpdateLotsDraw = (lotsdraw: TLotsDraw) => {
//     lotsdrawUpdate(lotsdraw).then(
//       (res) => {
//         const { status, data } = res;
//         if (status === 200) {
//           updateLotsDraw(data as TLotsDraw);
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
//     LotsDrawModal: LotsDrawUpdateModal,
//   } = useLotsDrawModal({
//     onSubmit: handleUpdateLotsDraw,
//     lotsdraw,
//   });
//
//   const handleConfirmDel =  async () => {
//     if (confirm) {
//     if (confirm) {
//       lotsdrawDelete(lotsdraw.id).then((res) => {
//         const { status, data } = res;
//         console.log({ status, data });
//         if (status === 200) {
//           toast.success(t("success"));
//           deleteLotsDraw(lotsdraw.id);
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
//   // const handleAddLotsDrawMatch = (
//   //   lotsdrawMatch: Omit<TLotsDrawMatch, "id">,
//   // ) => {
//   //   lotsdrawMatchCreate(lotsdrawMatch).then(
//   //     (res) => {
//   //       const { status, data } = res;
//   //       if (status === 200) {
//   //         addLotsDrawMatch(data);
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
//   // const { handleToggle: toggleMatch, LotsDrawMatchModal } =
//   //   useModalPageLotsDrawMatch({
//   //     tableId: lotsdraw.id,
//   //   });
//
//   const navigate = useNavigate();
//
//   return (
//     <UL className="action simple-list flex-row" id={lotsdraw.id}>
//       <LI className="edit btn">
//         <i
//           className="icon-pencil-alt"
//           onClick={handleToggleUpdateModal}
//         />
//         <LotsDrawUpdateModal />
//       </LI>
//       <LI className="delete btn" onClick={handleConfirmDel}>
//         <i className="icon-trash cursor-pointer" />
//       </LI>
//
//       <LI
//         className="edit btn"
//         onClick={() =>
//           navigate(`/lotsdraws/match/${lotsdraw.id}`)}
//       >
//         <i className="icon-folder" />
//         Lập lịch
//       </LI>
//       <LI
//         className="edit btn"
//         onClick={() =>
//           navigate(`/lotsdraws/match-report/${lotsdraw.id}`)}
//       >
//         <i className="icon-slice cursor-pointer">
//         </i>
//         Nhập kết quả
//       </LI>
//     </UL>
//   );
// };

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

const tableColumns: ColumnDef<TLotsDraw>[] = [
    {
        accessorKey: "team_name",
        footer: (props) => props.column.id,
        header: N["team_name"],
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
        accessorKey: "locations",
        footer: (props) => props.column.id,
        header: N["locations"],
    },
    {
        // accessorKey: "locations",
        header: "Lập lịch thi đấu",
        footer: (props) => props.column.id,
        cell({ getValue, row: { index, original }, column: { id }, table }) {
            // let hasEmptyFiled = false;
            // const idx = Object.values(original).findIndex((v) => v == null);
            // if (idx !== -1) hasEmptyFiled = true;
            // if (hasEmptyFiled) return null;
            // if (!original.isDetail) return null;

            const { LotsDrawUpdateAthele, handleToggle } = useLotsDrawUpdateAtheleModal({
                sportId: original.sport_id,
                team_id: original.team_id,
                content_id: original.content_id,
            });
            return (
                <Btn className="btn btn-success edit" onClick={handleToggle}>
                    <i className="icon-pencil-alt" />
                    Lập lịch
                    <LotsDrawUpdateAthele />
                </Btn>
            );
        },
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
            // if (!original.isDetail) return null;
            const { LotsDrawSubmitModal, handleToggle } = useLotsDrawSubmitModal({
                sportId: original.sport_id,
                team_id: original.org_id,
                content_id: original.content_id,
            });
            return (
                <Btn className="btn btn-info edit" onClick={handleToggle}>
                    <i className="icon-pencil-alt" />
                    Cập nhật
                    <LotsDrawSubmitModal />
                </Btn>
            );
        },
    },
];

const tableUnitColumns: ColumnDef<TLotsDraw>[] = [
    {
        accessorKey: "team_name",
        footer: (props) => props.column.id,
        header: N["team_name"],
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
const isUpdated = (d: TLotsDraw) => {
    const detailCols: (keyof TLotsDraw)[] = ["ticket_index", "match_hour", "match_date", "locations"];
    for (const c of detailCols) {
        if (!Object.keys(d).includes(c)) {
            return false;
        }
    }
    return true;
};

const ListContentLotsDraw = ({
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    data = [],
    tableRef,
    selectableRowSelected,
}: IListLotsDraw) => {
    // if (columns.length > 0 && showAction) {
    //   columns = [...columns, {
    //     name: "#",
    //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
    //     sortable: true,
    //   }];
    // }
    //
    //
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
        <div className="table-responsive">
            <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={columns} />
        </div>
    );
};

const ListUnitLotsDraw = ({
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableUnitColumns],
    data = [],
    tableRef,
    selectableRowSelected,
}: IListLotsDraw) => {
    // if (columns.length > 0 && showAction) {
    //   columns = [...columns, {
    //     name: "#",
    //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
    //     sortable: true,
    //   }];
    // }
    //
    //
    const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

    console.log({ tableData });
    return (
        <div className="table-responsive">
            <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={columns} />
        </div>
    );
};

const getLotDrawId = (d: TLotsDraw) => d.id;

//Component render page lots draw
const PageLotsDraw = () => {
    const tableGroupColumns: ColumnDef<TLotsDraw>[] = [
        {
            accessorKey: "name",
            footer: (props) => props.column.id,
            header: N["team_name"],
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
                // if (!original.isDetail) return null;
                const { LotsDrawSubmitGroupResultModal, handleToggle } = useLotsDrawSubmitGroupModal({
                    sportId: original.sport_id,
                    team_id: original.org_id,
                    content_id: original.content_id,
                });
                return (
                    <Btn className="btn btn-info edit" onClick={handleToggle}>
                        <i className="icon-pencil-alt" />
                        Cập nhật
                        <LotsDrawSubmitGroupResultModal />
                    </Btn>
                );
            },
        },
        {
            // accessorKey: "locations",
            header: "Hủy đăng ký ",
            footer: (props) => props.column.id,
            cell({ getValue, row: { index, original }, column: { id }, table }) {
                // let hasEmptyFiled = false;
                // const idx = Object.values(original).findIndex((v) => v == null);
                // if (idx !== -1) hasEmptyFiled = true;
                // if (hasEmptyFiled) return null;
                // if (!original.isDetail) return null;
                const handleToggle = useCallback((sportId: string) => {
                    martialArtArmyGroupDelete(original.id)
                        .then((res) => {
                            const { data, status } = res;
                            if (status === 200) {
                                toast.success(N["success"]);
                                fetchData(sportId);
                                fetchDataTable(sportId, selectedContentSport);
                            }
                        })
                        .catch((err) => {
                            toast.error(N["failed"]);
                            console.log({ err });
                        });
                }, []);

                return (
                    <Btn className="btn btn-danger edit" onClick={() => handleToggle(sportId)}>
                        <i className="icon-pencil-alt" />
                        Hủy đăng ký
                    </Btn>
                );
            },
        },
    ];
    const ListGroupLotsDraw = ({
        showAction,
        onRowSelect,
        onSelectedRowsChange,
        columns = [...tableGroupColumns],
        data = [],
        tableRef,
        selectableRowSelected,
    }: IListLotsDraw) => {
        // if (columns.length > 0 && showAction) {
        //   columns = [...columns, {
        //     name: "#",
        //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
        //     sortable: true,
        //   }];
        // }
        //
        //
        const tableData = data.map((d) => ({ ...d, isDetail: isUpdated(d) }));

        console.log({ tableData });
        return (
            <div className="table-responsive">
                <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={columns} />
            </div>
        );
    };
    const { sportSelector, unitType } = useConfigStore();
    const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
    const [sportId, setSportId] = useState("");
    const [listSport, setListSport] = useState(sports);
    const { sport_id: paramSportId } = useParams();
    // số VĐV thi đấu trong 1 lượt
    const [numberPlayedPerRound, setNumberPlayedPerRound] = useState<number>(3);
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");
    const [contentType, setContentType] = useState<any>("");
    useEffect(() => {
        unitType == "LLTT"
            ? setListSport(sportsMain.filter((e) => e.point_unit == 1))
            : setListSport(sportsSub.filter((e) => e.point_unit == 1));
    }, []);
    useEffect(() => {
        if (paramSportId) {
            setSportId(paramSportId);
        }
    }, [paramSportId]);
    //danh sách các nội dung thi đấu của môn
    const [contentSport, setContent] = useState<any>([]);
    // kiểm tra đã cập nhật thăm đơn vị chưa
    const [isUpdateTicketUnit, setIsUpdateTicketUnit] = useState<any>(false);
    const numberAthele = useRef<any>();
    // dữ liệu bảng thăm theo nội dung
    const [data, setData] = useState<TLotsDraw[]>([]);
    // dữ liệu bảng thăm theo đơn vị
    const [dataUnit, setDataUnit] = useState<TLotsDraw[]>([]);
    const handleAddNew = (e: any) => {
        martialArtMilitiaArmyGroupCreate(e)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(N["success"]);
                    fetchData(sportId);
                    fetchDataTable(sportId, selectedContentSport);
                }
            })
            .catch((err) => {
                toast.error(N["failed"]);
                console.log({ err });
            });
        return;
    };
    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const handleSelectContent = (id: any) => {
        getNumberAthele(id)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) numberAthele.current = data;
            })
            .catch((err) => console.log({ err }));

        fetchDataTable(sportId, id);
    };
    const fetchData = useCallback((sportId: string) => {
        getContentSport(sportId)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) setContent(data);
            })
            .catch((err) => console.log({ err }));
        lotsdrawsGet(sportId, "")
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) setDataUnit(data);
            })
            .catch((err) => console.log({ err }));
    }, []);

    const fetchDataTable = useCallback((sportId: string, content_id: string) => {
        getContentSport(sportId)
            .then((res) => {
                var listContentSport;
                const { data, status } = res;
                console.log({ data });
                if (status === 200) listContentSport = data;
                setContent(data);
                if (content_id != "") {
                    console.log(listContentSport);
                    if (listContentSport!.filter((el: any) => el.id == content_id)[0].content_type == 1) {
                        setContentType(listContentSport!.filter((el: any) => el.id == content_id)[0].content_type);
                        lotsdrawsGet(sportId, content_id)
                            .then((res) => {
                                const { data, status } = res;
                                console.log({ data });
                                if (status === 200) setData(data);
                            })
                            .catch((err) => console.log({ err }));
                        lotsdrawScheduleGet(numberPlayedPerRound, sportId, content_id).then((res) => {
                            console.log(res.data);
                        });
                    } else {
                        var contentFilter = getMoreFilterByValue("content_id", "=", content_id);
                        groupGetAll({ filter: `[${contentFilter}]` })
                            .then((res) => {
                                const { data, status } = res;
                                console.log({ data });
                                if (status === 200) setData(data.data);
                            })
                            .catch((err) => console.log({ err }));
                    }
                }
            })
            .catch((err) => console.log({ err }));
    }, []);
    const ref = useRef<ITanTableRef<TLotsDraw>>(null);

    const handleUpdate = useCallback(() => {
        const newData = ref.current?.getData();

        if (newData && sportId) {
            if (contentType == "1") {
                const dataSubmit = newData!.map((e: TLotsDraw) => {
                    return {
                        id: e.id,
                        sport_id: e.sport_id,
                        content_id: selectedContentSport,
                        team_id: e.team_id,
                        ticket_index: e.ticket_index,
                        has_ranking: true,
                        match_hour: e.match_hour,
                        match_date: e.match_date,
                        locations: e.locations,
                    };
                });
                lotsdrawUpdate(sportId, selectedContentSport, dataSubmit)
                    .then((res) => {
                        const { data, status } = res;
                        if (status === 200) {
                            toast.success(N["success"]);
                            fetchData(sportId);
                            fetchDataTable(sportId, selectedContentSport);
                        }
                    })
                    .catch((err) => {
                        toast.error(N["failed"]);
                        console.log({ err });
                    });
                fetchData(sportId);
                fetchDataTable(sportId, selectedContentSport);
                return;
            } else {
                groupUpdate(sportId, newData)
                    .then((res) => {
                        const { data, status } = res;
                        if (status === 200) {
                            toast.success(N["success"]);
                            fetchData(sportId);
                            fetchDataTable(sportId, selectedContentSport);
                        }
                    })
                    .catch((err) => {
                        toast.error(N["failed"]);
                        console.log({ err });
                    });
            }
            return;
        }
        toast.error(N["failed"]);
    }, [sportId]);

    const { handleToggle: toggleLotsDrawModal, LotsDrawModal: LotsDrawAddModal } = useLotsDrawModal({
        sportId: sportId,
        content_id: selectedContentSport,
        onSubmit: () => {
            if (sportId) {
                fetchData(sportId);
                fetchDataTable(sportId, selectedContentSport);
                setIsUpdateTicketUnit(true);
            }
        },
    });
    const { LotsDrawScheduleModal: LotsDrawScheduleModal, handleToggle: toggleLotsDrawScheduleModal } =
        useLotsDrawScheduleModal({
            sportId: sportId,
            content_id: selectedContentSport,
            numberPerRound: numberPlayedPerRound,
            numberOfTeam: data,
        });
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useTeamAtheleModal({
        sportId: sportId,
        content_id: selectedContentSport,
        onSubmit: (e) => {
            handleAddNew(e);
        },
    });
    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Thi đấu bốc thăm"} parent={"HTTQ2024"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0 card-no-border">
                                <Row className="d-flex justify-content-center">
                                    <Col md={6}>
                                        <InputSelect
                                            title={N["sport"]}
                                            data={sports.filter(({ point_unit }) => {
                                                return point_unit === 1;
                                            })}
                                            k="name"
                                            v="id"
                                            name="sport"
                                            value={sportId}
                                            handleChange={(e) => {
                                                setSportId(e.target.value);
                                                setSelectedContentSport("");
                                            }}
                                        />
                                    </Col>
                                </Row>
                                {sportId && (
                                    <div className="d-flex justify-content-center">
                                        <div className="flex gap-2 mt-4">
                                            <div
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    if (sportId) {
                                                        toggleLotsDrawModal();

                                                        // setTimeout(() => fetchData(sportId), 2000);
                                                    } else {
                                                        toast.warn("Mời chọn môn thi");
                                                    }
                                                }}
                                            >
                                                <i className="fa fa-plus" /> &nbsp;
                                                {"Cập nhật kết quả bốc thăm đơn vị"}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <LotsDrawAddModal />
                            </CardHeader>
                            <CardBody>
                                {sportId ? (
                                    <>
                                        <div className=" justify-content-center">
                                            <Row className="justify-content-center">
                                                <Col md={5}>
                                                    <div className="m-b-10">
                                                        {contentSport.length > 0 && (
                                                            <InputSelect
                                                                title={"Chọn nội dung thi đấu"}
                                                                data={contentSport.sort(
                                                                    (a: any, b: any) => a.indexs - b.indexs
                                                                )}
                                                                k="name"
                                                                v="id"
                                                                name="sport"
                                                                value={selectedContentSport}
                                                                handleChange={(e) => {
                                                                    setSelectedContentSport(e.target.value);

                                                                    setContentType(
                                                                        contentSport.filter(
                                                                            (el: any) => el.id == e.target.value
                                                                        )[0].content_type
                                                                    );
                                                                    handleSelectContent(e.target.value);
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                    {selectedContentSport != "" ? (
                                                        <H2 className="text-center m-20">
                                                            Lịch và kết quả thi đấu nội dung{" "}
                                                            <span className="text-danger">
                                                                {(contentSport &&
                                                                    contentSport.filter(
                                                                        (e: any) => e.id == selectedContentSport
                                                                    )[0].name) ??
                                                                    ""}
                                                            </span>
                                                        </H2>
                                                    ) : (
                                                        <H3 className="text-center">Bảng thăm đơn vị</H3>
                                                    )}
                                                    {selectedContentSport != "" && (
                                                        <div className="d-flex align-items-center">
                                                            <InputGroupText className="text-center">
                                                                <strong>Số VĐV thi đấu trong 1 lượt:</strong>
                                                            </InputGroupText>
                                                            <Row className="d-flex justify-content-center align-items-center m-l-10">
                                                                <Col
                                                                    md={3}
                                                                    className="d-flex justify-content-center align-items-center"
                                                                >
                                                                    <Btn
                                                                        className={`bg-primary`}
                                                                        onClick={() =>
                                                                            setNumberPlayedPerRound(
                                                                                (value) => value + 1
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fa fa-plus" />
                                                                    </Btn>
                                                                </Col>
                                                                <Col
                                                                    md={6}
                                                                    className="d-flex justify-content-center align-items-center"
                                                                >
                                                                    <Input
                                                                        className="me-1"
                                                                        type="number"
                                                                        value={numberPlayedPerRound}
                                                                        onChange={(e) =>
                                                                            setNumberPlayedPerRound(
                                                                                parseInt(e.target.value)
                                                                            )
                                                                        }
                                                                        min={2}
                                                                        readOnly
                                                                    />
                                                                </Col>
                                                                <Col
                                                                    md={3}
                                                                    className="d-flex justify-content-center align-items-center"
                                                                >
                                                                    <Btn
                                                                        className={`bg-primary`}
                                                                        onClick={() => {
                                                                            if (numberPlayedPerRound == 2) return;
                                                                            setNumberPlayedPerRound(
                                                                                (value) => value - 1
                                                                            );
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-minus" />
                                                                    </Btn>
                                                                </Col>
                                                            </Row>

                                                            <LotsDrawScheduleModal />
                                                        </div>
                                                    )}
                                                </Col>
                                            </Row>
                                        </div>
                                        {selectedContentSport != "" && contentType == "1" && (
                                            <div className="d-flex justify-content-center m-10">
                                                <Btn
                                                    className="btn btn-info m-l-10"
                                                    onClick={() => {
                                                        selectedContentSport != ""
                                                            ? toggleLotsDrawScheduleModal()
                                                            : alert("Chưa chọn nội dung thi");
                                                    }}
                                                >
                                                    Xem lịch thi đấu
                                                </Btn>
                                            </div>
                                        )}
                                        {selectedContentSport == "" ? (
                                            <>
                                                <ListUnitLotsDraw tableRef={ref} data={dataUnit} showAction />
                                                <H3 className="text-center text-danger">Chưa chọn nội dung thi đấu </H3>
                                            </>
                                        ) : (
                                            dataUnit.length == 0 && (
                                                <H3 className="text-center">Chưa thực hiện bốc thăm đơn vị </H3>
                                            )
                                        )}
                                        {selectedContentSport != "" && (
                                            <>
                                                {contentType == "2" && (
                                                    <div className="d-flex justify-content-center m-t-10">
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
                                                )}
                                                {data.length > 0 ? (
                                                    <div>
                                                        {contentType == 1 ? (
                                                            <ListContentLotsDraw
                                                                tableRef={ref}
                                                                data={data}
                                                                showAction
                                                            />
                                                        ) : (
                                                            <ListGroupLotsDraw tableRef={ref} data={data} showAction />
                                                        )}

                                                        <div className="d-flex justify-content-end">
                                                            <div
                                                                className="btn btn-primary "
                                                                onClick={() => {
                                                                    if (sportId) handleUpdate();
                                                                    else {
                                                                        toast.warn("Mời chọn môn thi");
                                                                    }
                                                                }}
                                                            >
                                                                <i className="fa fa-edit" />
                                                                {"Cập nhật lịch"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="d-flex justify-content-center mt-4">
                                                        <H3 className="m-r-10">Chưa có dữ liệu thi đấu </H3>
                                                        <div className="">
                                                            <div
                                                                className="btn btn-warning text-dark"
                                                                onClick={() => {
                                                                    if (sportId) {
                                                                        toggleLotsDrawModal();

                                                                        // setTimeout(() => fetchData(sportId), 2000);
                                                                    } else {
                                                                        toast.warn("Mời chọn môn thi");
                                                                    }
                                                                }}
                                                            >
                                                                <i className="fa fa-plus" /> &nbsp;
                                                                {"Cập nhật kết quả bốc thăm cho nội dung"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <H3 className="text-center">Chưa lựa chọn môn thi</H3>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export { ListContentLotsDraw, PageLotsDraw };
