import { useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { Btn, LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { useSportStore } from "../../store/sport";
import { TSport } from "../../type/sport";

import { N } from "../../name-conversion";
import { sportexportschedulereport, sportXuatPhieuDiem, sportXuatPhieuKhoaTham } from "../../Service/sport";
import { useConfigStore } from "../../store/config";

type TSportColumn = TSport;

const SportTableAction = ({ sport }: { sport: TSportColumn }) => {
    const handleDownloadClick = () => {
        sportXuatPhieuDiem(sport.id);
    };
    const handleDownloadTicketClick = () => {
        sportXuatPhieuKhoaTham(sport.id);
    };
    const handleDownloadSchedule = () => {
        sportexportschedulereport(sport.id);
    };

    return (
        <UL className="action simple-list flex-row" id={sport.id}>
            <>
                <LI className=" d-flex justify-content-between">
                    <Btn color="warning" type="button" onClick={handleDownloadClick}>
                        Biên bản thi đấu
                    </Btn>
                    {sport.point_unit == 1 && (
                        <>
                            <Btn color="success" type="button" className="m-l-20" onClick={handleDownloadTicketClick}>
                                Phiếu khóa thăm
                            </Btn>
                            <Btn color="info" type="button" className="m-l-20" onClick={handleDownloadSchedule}>
                                Lịch thi đấu
                            </Btn>
                        </>
                    )}
                </LI>
            </>
        </UL>
    );
};

interface IListSport {
    showAction?: boolean;
    selectableRows?: boolean;
    onRowSelect?: (row: TSport, e: React.MouseEvent<Element, MouseEvent>) => void;
    onSelectedRowsChange?: (v: { allSelected: boolean; selectedCount: number; selectedRows: TSport[] }) => void;
    columns?: TableColumn<TSportColumn>[];
    data?: TSportColumn[];
    selectableRowSelected?: (row: TSportColumn) => boolean;
}

const tableColumns = (["name"] as (keyof TSportColumn)[]).map((c) => ({
    name: N[c],
    sortable: true,
    selector: (row: TSportColumn) => {
        return row[c as keyof TSportColumn] as string | number;
    },
}));

const ListSport = ({
    data = [],
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    selectableRowSelected,
}: IListSport) => {
    const [filterText, setFilterText] = useState("");
    const filteredItems = data.filter((item) => item);

    // const handlePerRowsChange = (newPerPage: number, page: number) => {
    //   const take = newPerPage;
    //   const skip = Math.max(page - 1, 0) * take;
    //   updateGetFilter({ take, skip });
    // };

    // const handlePageChange = (page: number) => {
    //   if (!filters) return;
    //   const { take } = filters;
    //   if (take) {
    //     updateGetFilter({ skip: Math.max(page - 1, 0) * take });
    //   }
    // };

    if (columns.length > 0 && showAction) {
        columns = [
            ...columns,
            {
                name: "#",
                cell: (row: TSportColumn) => <SportTableAction sport={row} />,
                sortable: true,
            },
        ];
    }

    const subHeaderComponentMemo = useMemo(() => {
        return (
            <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
                <Label className="me-2">Tìm kiếm</Label>
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                    type="search"
                    value={filterText}
                />
            </div>
        );
    }, [filterText]);

    return (
        <div className="table-responsive">
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                subHeader
                highlightOnHover
                striped
                persistTableHead
                selectableRowsHighlight
                onRowClicked={onRowSelect}
                onSelectedRowsChange={onSelectedRowsChange}
                selectableRows={!!onRowSelect || !!onSelectedRowsChange}
                // progressPending={loading}
                // paginationServer
                // paginationTotalRows={total}
                // onChangeRowsPerPage={handlePerRowsChange}
                // onChangePage={handlePageChange}
                selectableRowSelected={selectableRowSelected}
            />
        </div>
    );
};

const PageReportResult = () => {
    const { sportSelector } = useConfigStore();
    const { sports } = useSportStore(sportSelector());

    return (
        <div className="page-body">
            <Breadcrumbs mainTitle={"Xuất biên bản thi đấu"} parent={"HTTQ2024"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            {/* <CardHeader className="pb-0 card-no-border"> */}
                            {/*   <div className="btn btn-primary" onClick={handleToggleAddModal}> */}
                            {/*     <i className="fa fa-plus" /> */}
                            {/*     {"Thêm mới"} */}
                            {/*   </div> */}
                            {/*   <SportAddModal /> */}
                            {/* </CardHeader> */}
                            <CardBody>
                                <ListSport
                                    data={sports}
                                    showAction
                                    // columns={[...tableColumns]}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { ListSport, PageReportResult };
