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
    useLotsDrawSubmitAllModal,
    useLotsDrawSubmitGroupModal,
    useLotsDrawSubmitModal,
    useLotsDrawUpdateAtheleModal,
} from "../LotsDrawSubmit/LotsDrawSubmitForm";
import { useTeamAtheleModal } from "./CreateGroupForm";
import { useLotsDrawModal } from "./LotsDrawForm";
import { useLotsDrawScheduleModal } from "./LotsDrawSchedule";
import LotsdrawTabs from "./navbar_item";

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

//Component render page lots draw
const PageUpdateResult = () => {
    const { sportSelector, unitType } = useConfigStore();
    const { sports, sportsMain, sportsSub } = useSportStore(sportSelector());
    const [sportId, setSportId] = useState("");
    const [listSport, setListSport] = useState(sports);
    const { sport_id: paramSportId } = useParams();
    // số VĐV thi đấu trong 1 lượt
    const [contentType, setContentType] = useState<any>("");
    // số VĐV thi đấu trong 1 lượt
    const [selectedContentSport, setSelectedContentSport] = useState<string>("");

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

    const numberAthele = useRef<any>();

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
    const { LotsDrawSubmitModal, handleToggle } = useLotsDrawSubmitAllModal({
        content_id: selectedContentSport,
        sportId: sportId,
    });

    const { LotsDrawSubmitGroupResultModal, handleToggleGroup } = useLotsDrawSubmitGroupModal({
        content_id: selectedContentSport,
        sportId: sportId,
    });
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
                                                        setContentType(
                                                            contentSport.filter((el: any) => el.id == e.target.value)[0]
                                                                .content_type
                                                        );
                                                        handleSelectContent(e.target.value);
                                                    }}
                                                />
                                            )}
                                        </div>
                                        {selectedContentSport != "" && contentType == 1 ? (
                                            <div className="d-flex justify-content-center">
                                                {" "}
                                                <Btn className="btn btn-info edit" onClick={handleToggle}>
                                                    <i className="icon-pencil-alt" />
                                                    Cập nhật
                                                </Btn>
                                                <LotsDrawSubmitModal />
                                            </div>
                                        ) : (
                                            <div className="d-flex justify-content-center">
                                                {" "}
                                                <Btn className="btn btn-info edit" onClick={handleToggleGroup}>
                                                    <i className="icon-pencil-alt" />
                                                    Cập nhật
                                                </Btn>
                                                    <LotsDrawSubmitGroupResultModal />
                                            </div>
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
export { PageUpdateResult };
