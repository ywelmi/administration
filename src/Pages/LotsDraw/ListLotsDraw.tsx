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
} from "../../Service/lotsdraw";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import { ColumnDef } from "@tanstack/react-table";
import ReactDatePicker from "react-datepicker";
import { convertToDate } from "../../utils/date";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { Btn, H3, H5, LI } from "../../AbstractElements";
import { useLotsDrawSubmitModal } from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";

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
            if (!original.isDetail) return null;
            const { LotsDrawSubmitModal, handleToggle } = useLotsDrawSubmitModal({
                sportId: original.sport_id,
                orgId: original.org_id,
            });
            return (
                <Btn className="btn btn-success edit" onClick={handleToggle}>
                    Phiếu đăng ký
                    <LotsDrawSubmitModal />
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
            if (!original.isDetail) return null;
            const { LotsDrawSubmitModal, handleToggle } = useLotsDrawSubmitModal({
                sportId: original.sport_id,
                orgId: original.org_id,
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

const isUpdated = (d: TLotsDraw) => {
    const detailCols: (keyof TLotsDraw)[] = ["ticket_index", "match_hour", "match_date", "locations"];
    for (const c of detailCols) {
        if (!Object.keys(d).includes(c)) {
            return false;
        }
    }
    return true;
};

const ListLotsDraw = ({
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

const getLotDrawId = (d: TLotsDraw) => d.id;

//Component render page lots draw
const PageLotsDraw = () => {
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
    const [data, setData] = useState<TLotsDraw[]>([]);

    const fetchData = useCallback((sportId: string) => {
        lotsdrawsGet(sportId)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) setData(data);
            })
            .catch((err) => console.log({ err }));
        getContentSport(sportId)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) contentSport.current = data;
                console.log(contentSport.current);
            })
            .catch((err) => console.log({ err }));
        getNumberAthele(sportId)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) numberAthele.current = data;
                console.log(contentSport.current);
            })
            .catch((err) => console.log({ err }));
    }, []);
    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const ref = useRef<ITanTableRef<TLotsDraw>>(null);

    const handleUpdate = useCallback(() => {
        const newData = ref.current?.getData();
        if (newData && sportId) {
            lotsdrawUpdate(sportId, newData)
                .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                        toast.success(N["success"]);
                        fetchData(sportId);
                    }
                })
                .catch((err) => {
                    toast.error(N["failed"]);
                    console.log({ err });
                });
            return;
        }
        toast.error(N["failed"]);
    }, [sportId]);

    const { handleToggle: toggleLotsDrawModal, LotsDrawModal: LotsDrawAddModal } = useLotsDrawModal({
        sportId: sportId,
        onSubmit: () => {
            if (sportId) {
                fetchData(sportId);
            }
        },
    });
    const { LotsDrawScheduleModal: LotsDrawScheduleModal, handleToggle: toggleLotsDrawScheduleModal } =
        useLotsDrawScheduleModal({
            sportId: sportId,
            numberPerRound: numberPlayedPerRound,
            numberOfTeam: data,
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
                                            handleChange={(e) => setSportId(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center">
                                    <div className="flex gap-2 mt-4">
                                        <div
                                            className="btn btn-primary"
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
                                        <div
                                            className="btn btn-danger"
                                            onClick={() => {
                                                if (sportId) {
                                                    toggleLotsDrawModal();
                                                    alert("hii");
                                                    // setTimeout(() => fetchData(sportId), 2000);
                                                } else {
                                                    toast.warn("Mời chọn môn thi");
                                                }
                                            }}
                                        >
                                            <i className="fa fa-plus" /> &nbsp;
                                            {"Cập nhật kết quả bốc thăm"}
                                        </div>
                                    </div>
                                </div>

                                <LotsDrawAddModal />
                            </CardHeader>
                            <CardBody>
                                {sportId ? (
                                    <>
                                        <H3 className="text-center">Lịch thi đấu</H3>

                                        <div className=" justify-content-center">
                                            <Row className="justify-content-center">
                                                <Col md={5}>
                                                    <div className="m-b-10">
                                                        {contentSport.current && (
                                                            <InputSelect
                                                                title={"Chọn nội dung thi đấu"}
                                                                data={contentSport.current}
                                                                k="name"
                                                                v="id"
                                                                name="sport"
                                                                value={selectedContentSport}
                                                                handleChange={(e) =>
                                                                    setSelectedContentSport(e.target.value)
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                    <Row className="d-flex">
                                                        <Col md={7}>
                                                            <InputGroup>
                                                                <InputGroupText className="text-center">
                                                                    <strong>Số VĐV thi đấu trong 1 lượt:</strong>
                                                                </InputGroupText>
                                                                <Input
                                                                    type="number"
                                                                    value={numberPlayedPerRound}
                                                                    onChange={(e) =>
                                                                        setNumberPlayedPerRound(
                                                                            parseInt(e.target.value)
                                                                        )
                                                                    }
                                                                />
                                                            </InputGroup>
                                                        </Col>
                                                        <Col md={5}>
                                                            <Btn
                                                                className="btn btn-info"
                                                                onClick={() => {
                                                                    toggleLotsDrawScheduleModal();
                                                                }}
                                                            >
                                                                Xem lịch thi đấu
                                                            </Btn>
                                                        </Col>
                                                        <LotsDrawScheduleModal />
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>

                                        <ListLotsDraw tableRef={ref} data={data} showAction />
                                    </>
                                ) : (
                                    <H3>Chưa lựa chọn môn thi</H3>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export { ListLotsDraw, PageLotsDraw };
