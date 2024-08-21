import { useCallback, useEffect, useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useParams } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { N } from "../../name-conversion";
import { tablequalifyingMatchsGet } from "../../Service/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { SearchTableButton } from "../../utils/Constant";
import TablequalifyingTableAction from "./MatchAction";

type TTablequalifyingColumn = TTablequalifyingMatch;

interface IListTablequalifyingMatchReport {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (
    row: TTablequalifyingMatch,
    e: React.MouseEvent<Element, MouseEvent>
  ) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TTablequalifyingMatch[];
  }) => void;
  columns?: TableColumn<TTablequalifyingColumn>[];
  data?: TTablequalifyingMatch[];
  selectableRowSelected?: (row: TTablequalifyingMatch) => boolean;
  loading?: boolean;
}

const tableColumns = (
  [
    "indexs",
    "match_day",
    "team1_name",
    "team1_set_win_count",
    "team2_name",
    // "match_hour",
    "team2_set_win_count",
  ] as (keyof TTablequalifyingColumn)[]
).map((c) => ({
  name: N[c],
  sortable: true,
  selector: (row: TTablequalifyingColumn) => {
    const col = c as keyof TTablequalifyingColumn;
    const v =
      row?.[col] !== null
        ? row[col as keyof TTablequalifyingColumn]
        : ("" as string | number);
    return v;
  },
}));

const ListTablequalifyingMatchReport = ({
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  data = [],
  selectableRowSelected,
  loading,
}: IListTablequalifyingMatchReport) => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = data.filter((item) => item);

  if (columns.length > 0 && showAction) {
    columns = [
      ...columns,
      {
        name: "#",
        cell: (row: TTablequalifyingMatch) => (
          <TablequalifyingTableAction tablequalifyingMatch={row} />
        ),
        sortable: true,
      },
    ];
  }
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div
        id="basic-1_filter"
        className="dataTables_filter d-flex align-items-center"
      >
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
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
        subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover
        striped
        persistTableHead
        selectableRowsHighlight
        onRowClicked={onRowSelect}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRows={!!onRowSelect || !!onSelectedRowsChange}
        progressPending={loading}
      />
    </div>
  );
};

// interface IPageTablequalifyingMatchReport {
//   tableId: string
// }

const PageTablequalifyingMatchReport = () => {
  const { table_id: tableId } = useParams();

  const [tablequalifyingMatchReports, setTablequalifyingMatchReports] =
    useState<TTablequalifyingMatch[]>([]);

  const { counter } = useTablequalifyingMatchStore();

  const refreshMatchReports = useCallback(() => {
    console.log({ tableId });
    if (tableId) {
      tablequalifyingMatchsGet(tableId)
        .then((res) => {
          const { data, status } = res;
          console.log({ tablequalifyingMatchsGet: data });
          if (data?.length) {
            setTablequalifyingMatchReports(data);
            return;
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [tableId]);

  useEffect(() => {
    refreshMatchReports();
  }, [refreshMatchReports]);

  useEffect(() => {
    refreshMatchReports();
  }, [counter, refreshMatchReports]);

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Nhập kết quả thi đấu"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              {/* <CardHeader className="pb-0 card-no-border"> */}
              {/*   <div className="btn btn-primary" onClick={handleToggleAddModal}> */}
              {/*     <i className="fa fa-plus" /> */}
              {/*     {"Thêm mới"} */}
              {/*   </div> */}
              {/*   <TablequalifyingAddModal /> */}
              {/* </CardHeader> */}
              <CardBody>
                <ListTablequalifyingMatchReport
                  data={tablequalifyingMatchReports}
                  showAction
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListTablequalifyingMatchReport, PageTablequalifyingMatchReport };
