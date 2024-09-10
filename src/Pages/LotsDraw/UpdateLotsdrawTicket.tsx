import { ColumnDef } from "@tanstack/react-table";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroupText, Row } from "reactstrap";
import { Btn, H1, H2, H3, H5, P } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect } from "../../Component/InputSelect";
import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";
import { getMoreFilterByValue } from "../../Service/_getParams";
import {
    getContentSport,
    getNumberAthele,
    getScheduleContent,
    lotsdrawResultTableGet,
    lotsdrawScheduleGet,
    lotsdrawsGet,
    // lotsdrawCreate,
    // lotsdrawDelete,
    lotsdrawUpdate,
    updateScheduleContent,
} from "../../Service/lotsdraw";
import { martialArtArmyGroupDelete } from "../../Service/martialArt";
import { groupGetAll, martialArtMilitiaArmyGroupCreate } from "../../Service/martialArtMilitia";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";
import { convertToDate } from "../../utils/date";
import { useLotsDrawSubmitGroupModal, useLotsDrawUpdateAtheleModal } from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useTeamAtheleModal } from "./CreateGroupForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";
import LotsdrawTabs from "./navbar_item";
import NavBar from "./navbar";
import { useViewLotsDrawScheduleModal } from "./ViewLotsdrawTicket";
import { TGroup } from "../../type/team";
import { ContentSchedule } from "./ContentSchedule";

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
const getGroupId = (d: TGroup) => d.id;

interface IListGroup {
    showAction?: boolean;
    selectableRows?: boolean;
    onRowSelect?: (row: TGroup, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: { allSelected: boolean; selectedCount: number; selectedRows: TGroup[] }) => void;
    columns?: ColumnDef<TGroup>[];
    data?: TGroup[];
    selectableRowSelected?: (row: TGroup) => boolean;
    tableRef?: Ref<ITanTableRef<TGroup>>;
}

//Component render page lots draw
const PageUpdateLotsdrawTicket = () => {
    const tableGroupColumns: ColumnDef<TGroup>[] = [
        {
            accessorKey: "name",
            footer: (props) => props.column.id,
            header: N["team_name"] + " tiếp sức",
            cell(props) {
                return <div className="form-control">{props.getValue() as string}</div>;
            },
        },
        // {
        //     accessorKey: "ticket_index",
        //     footer: (props) => props.column.id,
        //     header: N["ticket_index"],
        //     cell(props) {
        //         return <div className="">{props.getValue() as string}</div>;
        //     },
        // },
        {
            accessorKey: "team_member_name",
            footer: (props) => props.column.id,
            header: "Thành viên",
            cell(props) {
                return <div className="">{props.getValue() as string}</div>;
            },
        },
        {
            footer: (props) => props.column.id,
            header: "Thành viên",
            cell({ getValue, row: { index, original }, column: { id }, table }) {
                return (
                    <Btn className="btn btn-danger edit" onClick={() => handleDeleteGroup(original.id)}>
                        <i className="icon-pencil-alt" />
                        Hủy đăng ký đội
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
    }: IListGroup) => {
        // if (columns.length > 0 && showAction) {
        //   columns = [...columns, {
        //     name: "#",
        //     cell: (row: TLotsDrawColumn) => <LotsDrawTableAction lotsdraw={row} />,
        //     sortable: true,
        //   }];
        // }
        //
        //
        const tableData = data.map((d) => ({ ...d }));

        console.log({ tableData });
        return (
            <div className="table-responsive">
                <TanTable ref={tableRef} data={tableData} getRowId={getGroupId} columns={columns} />
            </div>
        );
    };
    const { sportSelector, unitType } = useConfigStore();
    const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
    const [sportId, setSportId] = useState("");
    const [listSport, setListSport] = useState(sports);
    const { sport_id: paramSportId } = useParams();
    // số VĐV thi đấu trong 1 lượt
    const [contentSport, setContent] = useState<any>([]);
    const [numberPlayedPerRound, setNumberPlayedPerRound] = useState<any>(null);
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");
    const [contentType, setContentType] = useState<any>("");
    const refGroup = useRef<ITanTableRef<TGroup>>(null);
    useEffect(() => {
        unitType == "LLTT"
            ? setListSport(sportsMain.filter((e) => e.point_unit == 1))
            : setListSport(sportsSub.filter((e) => e.point_unit == 1));
    }, []);
    const { selectSport } = useSportStore();

    const updateSportId = useCallback(
        (v: string) => {
            selectSport(v);
            setSportId(v);
        },
        [selectSport]
    );

    useEffect(() => {
        if (paramSportId) {
            updateSportId(paramSportId);
        }
    }, [paramSportId, updateSportId]);
    //danh sách các nội dung thi đấu của môn
    const numberAthele = useRef<any>();
    // kiểm tra đã cập nhật thăm đơn vị chưa
    const [gender, setGender] = useState(0);
    // dữ liệu bảng thăm theo đơn vị
    const [dataUnit, setDataUnit] = useState<TLotsDraw[]>([]);
    const [dataGroup, setDataGroup] = useState<TGroup[]>([]);

    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const handleSelectContent = (id: any, content_type: any) => {
        getNumberAthele(id)
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) numberAthele.current = data;
                setNumberPlayedPerRound(data);
            })
            .catch((err) => console.log({ err }));
        fetchData(sportId);

        if (content_type == 2) {
            const contentFilter = getMoreFilterByValue("content_id", "=", id);

            groupGetAll({ filter: `[${contentFilter}]` })
                .then((res) => {
                    const { data, status } = res;
                    console.log({ data });
                    if (status === 200) {
                        setDataGroup(data.data);
                    }
                })
                .catch((err) => console.log({ err }));
        }
        setSelectedContentSport(id);
    };
    const handleDeleteGroup = (id: any) => {
        martialArtArmyGroupDelete(id)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    toast.success(N["success"]);
                    fetchDataGroup();
                }
            })
            .catch((err) => {
                toast.error(N["failed"]);
                console.log({ err });
            });
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
                if (status === 200) {
                    setDataUnit(data);
                }
            })
            .catch((err) => console.log({ err }));
    }, []);
    const fetchDataGroup = () => {
        const contentFilter = getMoreFilterByValue("content_id", "=", selectedContentSport);

        groupGetAll({ filter: `[${contentFilter}]` })
            .then((res) => {
                const { data, status } = res;
                console.log({ data });
                if (status === 200) {
                    setDataGroup(data.data);
                }
            })
            .catch((err) => console.log({ err }));
    };
    const handleAddNew = (e: any) => {
        martialArtMilitiaArmyGroupCreate(e)
            .then((res) => {
                if (res.status === 200) {
                    fetchDataGroup();
                }
            })
            .catch((err) => {
                toast.error(err.data);
                console.log({ err });
            });
        return;
    };
    const ref = useRef<ITanTableRef<TLotsDraw>>(null);

    const { LotsDrawScheduleModal: LotsDrawScheduleModal, handleToggle: toggleLotsDrawScheduleModal } =
        useLotsDrawScheduleModal({
            sportId: sportId,
            content_id: selectedContentSport,
            numberPerRound: numberPlayedPerRound,
            numberOfTeam: dataUnit.length,
        });
    const { ViewLotsDrawScheduleModal: ViewLotsDrawScheduleModal, handleToggle: toggleViewLotsDrawScheduleModal } =
        useViewLotsDrawScheduleModal({
            sportId: sportId,
            content_id: selectedContentSport,
            numberPerRound: numberPlayedPerRound,
            numberOfTeam: dataUnit.length,
        });
    const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } = useTeamAtheleModal({
        sportId: sportId,
        content_id: selectedContentSport,
        onSubmit: (e) => {
            handleAddNew(e);
        },
    });

    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader className="pb-0 card-no-border"></CardHeader>
                        <CardBody>
                            <div className="m-b-10">
                                {contentSport.length > 0 && (
                                    <InputSelect
                                        title={"Chọn nội dung thi đấu"}
                                        data={contentSport.sort((a: any, b: any) => a.indexs - b.indexs)}
                                        k="name"
                                        v="id"
                                        name="sport"
                                        value={selectedContentSport}
                                        handleChange={(e) => {
                                            setSelectedContentSport(e.target.value);
                                            setGender(
                                                contentSport.filter((el: any) => el.id == e.target.value)[0].gender
                                            );
                                            setContentType(
                                                contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                    .content_type
                                            );
                                            handleSelectContent(
                                                e.target.value,
                                                contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                    .content_type
                                            );
                                        }}
                                    />
                                )}
                            </div>
                            {selectedContentSport != "" && (
                                <>
                                    <div className="d-flex justify-content-center">
                                        <>
                                            {/* <div className="d-flex align-items-center">
                                                <H5 className="text-center">Số VĐV thi đấu trong 1 lượt:</H5>
                                                <Row className="d-flex justify-content-center align-items-center m-l-10">
                                                    <Col
                                                        md={3}
                                                        className="d-flex justify-content-center align-items-center"
                                                    >
                                                        <Btn
                                                            className={`bg-primary btn-xs`}
                                                            onClick={() =>
                                                                setNumberPlayedPerRound((value: any) => value + 1)
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
                                                                setNumberPlayedPerRound(parseInt(e.target.value))
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
                                                            className={`bg-primary btn-xs`}
                                                            onClick={() => {
                                                                if (numberPlayedPerRound == 2) return;
                                                                setNumberPlayedPerRound((value: any) => value - 1);
                                                            }}
                                                        >
                                                            <i className="fa fa-minus" />
                                                        </Btn>
                                                    </Col>
                                                </Row>
                                            </div> */}
                                        </>
                                    </div>
                                    <ViewLotsDrawScheduleModal />
                                    <LotsDrawScheduleModal />
                                    <ContentSchedule content_id={selectedContentSport} />
                                    {contentType == "2" && (
                                        <div className="d-flex justify-content-center m-b-10">
                                            <div
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    handleToggleAddModal();
                                                }}
                                            >
                                                <i className="fa fa-plus" />
                                                &nbsp;
                                                {"Tạo đội tiếp sức"}
                                            </div>
                                            <TeamAddModal />
                                        </div>
                                    )}
                                    <div className="d-flex justify-content-center">
                                        <ListUnitLotsDraw tableRef={ref} data={dataUnit} showAction />
                                        {contentType == 2 && dataGroup.length > 0 ? (
                                            <ListGroupLotsDraw tableRef={refGroup} data={dataGroup} showAction />
                                        ) : (
                                            contentType == 2 && (
                                                <H3 className="text-center">Chưa có đội nào được tạo</H3>
                                            )
                                        )}
                                    </div>
                                    <div className="d-flex justify-content-center m-10">
                                        <Btn
                                            className="btn btn-info m-l-10"
                                            onClick={() => {
                                                if (contentType == 2) {
                                                    dataGroup.length == dataUnit.length
                                                        ? toggleLotsDrawScheduleModal()
                                                        : toast.error("Chưa đăng ký đủ số đội vào nội dung thi");
                                                } else {
                                                    toggleLotsDrawScheduleModal();
                                                }
                                            }}
                                        >
                                            Cập nhật khóa thăm
                                        </Btn>
                                    </div>
                                    <div className="d-flex justify-content-center m-10">
                                        <Btn
                                            className="btn btn-success m-l-10"
                                            onClick={() => {
                                                selectedContentSport != ""
                                                    ? toggleViewLotsDrawScheduleModal()
                                                    : alert("Chưa chọn nội dung thi");
                                            }}
                                        >
                                            Xem khóa thăm
                                        </Btn>
                                    </div>
                                </>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { PageUpdateLotsdrawTicket };
