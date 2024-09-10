import { ColumnDef } from "@tanstack/react-table";
import { Ref, useCallback, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Input, InputGroupText, Row } from "reactstrap";

import { ITanTableRef, TanTable } from "../../Component/Tables/TanTable/TanTble";
import { N } from "../../name-conversion";

import { lotsdrawsGet } from "../../Service/lotsdraw";

import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TLotsDraw } from "../../type/lotsdraw";
import { useLotsDrawModal } from "../LotsDraw/LotsDrawForm";

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
const PageUpdateLotsDrawUnit = () => {
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

    // kiểm tra đã cập nhật thăm đơn vị chưa
    const [gender, setGender] = useState(0);
    // dữ liệu bảng thăm theo đơn vị
    const [dataUnit, setDataUnit] = useState<TLotsDraw[]>([]);

    useEffect(() => {
        if (sportId) {
            fetchData(sportId);
        }
    }, [sportId]);

    const fetchData = useCallback((sportId: string) => {
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

    const ref = useRef<ITanTableRef<TLotsDraw>>(null);

    const { handleToggle: toggleLotsDrawModal, LotsDrawModal: LotsDrawAddModal } = useLotsDrawModal({
        sportId: sportId,
        content_id: selectedContentSport,
        onSubmit: () => {
            if (sportId) {
                fetchData(sportId);
            }
        },
    });

    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader className="pb-0 card-no-border">
                            {sportId && sports.filter((e) => e.id == sportId).length > 0 && (
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
                            <ListUnitLotsDraw tableRef={ref} data={dataUnit} showAction />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export { PageUpdateLotsDrawUnit };
