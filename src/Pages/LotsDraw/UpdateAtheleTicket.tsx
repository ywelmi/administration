import { ColumnDef } from "@tanstack/react-table";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroupText, Row } from "reactstrap";
import { Btn, H1, H2, H3 } from "../../AbstractElements";
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
} from "../../Service/lotsdraw";
import { martialArtArmyGroupDelete } from "../../Service/martialArt";
import { groupGetAll, martialArtMilitiaArmyGroupCreate } from "../../Service/martialArtMilitia";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";
import { convertToDate } from "../../utils/date";
import {
    useLotsDrawSubmitGroupModal,
    useLotsDrawSubmitModal,
    useLotsDrawUpdateAtheleModal,
} from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useTeamAtheleModal } from "./CreateGroupForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";
import LotsdrawTabs from "./navbar_item";
import { TGroup } from "../../type/team";

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

const getLotDrawId = (d: TLotsDraw) => d.id;

//Component render page lots draw
const PageUpdateAtheleTicket = () => {
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
    ];

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
        const tableData = data.map((d) => ({ ...d }));

        console.log({ tableData });
        return (
            <div className="table-responsive">
                <TanTable ref={tableRef} data={tableData} getRowId={getLotDrawId} columns={columns} />
            </div>
        );
    };
    const tableContentGroupColumns: ColumnDef<TLotsDraw>[] = [
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
    const ListContentGroupLotsDraw = ({
        showAction,
        onRowSelect,
        onSelectedRowsChange,
        columns = [...tableContentGroupColumns],
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
        const tableData = data.map((d) => ({ ...d }));

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

    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");
    const [contentType, setContentType] = useState<any>("");
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

            setData([]);
            setSelectedContentSport("");
        },
        [selectSport]
    );

    useEffect(() => {
        if (paramSportId) {
            updateSportId(paramSportId);
        }
    }, [paramSportId, updateSportId]);
    //danh sách các nội dung thi đấu của môn
    const [contentSport, setContent] = useState<any>([]);
    // kiểm tra đã cập nhật thăm đơn vị chưa
    const [gender, setGender] = useState(0);
    const numberAthele = useRef<any>();
    // dữ liệu bảng thăm theo nội dung
    const [data, setData] = useState<TLotsDraw[]>([]);
    // dữ liệu bảng thăm theo đơn vị

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
        setSelectedContentSport(id);

        fetchData(sportId);
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
    }, []);

    const fetchDataTable = useCallback((sportId: string, content_id: string) => {
        getContentSport(sportId)
            .then((res) => {
                var listContentSport;
                const { data, status } = res;
                console.log({ data });
                if (status === 200) listContentSport = data;
                setContent(data);

                lotsdrawsGet(sportId, content_id)
                    .then((res) => {
                        const { data, status } = res;
                        console.log({ data });
                        if (status === 200) {
                            setData(data);
                        }
                    })
                    .catch((err) => console.log({ err }));

                // lotsdrawScheduleGet(numberPlayedPerRound, sportId, content_id).then((res) => {
                //     const { data, status } = res;
                //     if (status === 200) toast.info("Đã cập nhật thông tin làn lượt");
                // });
            })
            .catch((err) => console.log({ err }));
    }, []);
    const ref = useRef<ITanTableRef<TLotsDraw>>(null);

    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader className="pb-0 card-no-border"></CardHeader>
                        <CardBody>
                            {sportId && sports.filter((e) => e.id == sportId).length > 0 ? (
                                <>
                                    <>
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
                                                            contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                                .gender
                                                        );
                                                        setContentType(
                                                            contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                                .content_type
                                                        );
                                                        handleSelectContent(e.target.value);
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {data.length > 0 ? (
                                            <div>
                                                {contentType == 1 ? (
                                                    <ListContentLotsDraw tableRef={ref} data={data} showAction />
                                                ) : (
                                                    <ListContentGroupLotsDraw tableRef={ref} data={data} showAction />
                                                )}
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                </>
                            ) : (
                                <H3 className="text-center">Chưa lựa chọn môn thi</H3>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { PageUpdateAtheleTicket };
