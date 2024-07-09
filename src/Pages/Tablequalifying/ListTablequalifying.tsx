import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFilterByValue } from "../../Service/_getParams";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BasicDataTables,
  DataTables,
  SearchTableButton,
} from "../../utils/Constant";
import { LI, UL } from "../../AbstractElements";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { TTablequalifying } from "../../type/tablequalifying";
import { useTablequalifyingStore } from "../../store/tablequalifying";
import { useMemo, useState } from "react";
import { useTablequalifyingModal } from "./TablequalifyingForm";
import {
  tablequalifyingCreate,
  tablequalifyingDelete,
  tablequalifyingUpdate,
} from "../../Service/tablequalifying";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";
import { NAME_CONVERSION } from "../../name-conversion";
import { tablequalifyingMatchCreate } from "../../Service/tablequalifyingMatch";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import { useModalPageTablequalifyingMatch } from "../TablequalifyingMatch/ListTablequalifyingMatch";

type TTablequalifyingColumn = Omit<TTablequalifying, "list_member_id">;

const TablequalifyingTableAction = (
  { tablequalifying }: { tablequalifying: TTablequalifyingColumn },
) => {
  const { updateTablequalifying, deleteTablequalifying } =
    useTablequalifyingStore();
  const { addTablequalifyingMatch } = useTablequalifyingMatchStore();
  const { t } = useTranslation();

  const handleUpdateTablequalifying = (tablequalifying: TTablequalifying) => {
    tablequalifyingUpdate(tablequalifying).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateTablequalifying(data as TTablequalifying);
          toast.success(t("success"));
          return;
        }

        return Promise.reject(status);
      },
    ).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };

  const {
    handleToggle: handleToggleUpdateModal,
    TablequalifyingModal: TablequalifyingUpdateModal,
  } = useTablequalifyingModal({
    onSubmit: handleUpdateTablequalifying,
    tablequalifying,
  });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      tablequalifyingDelete(tablequalifying.id).then((res) => {
        const { status, data } = res;
        console.log({ status, data });
        if (status === 200) {
          toast.success(t("success"));
          deleteTablequalifying(tablequalifying.id);
          return;
        }
        return Promise.reject(status);
      })
        .catch((err) => {
          toast.error(t(err?.response?.data || "error"));
          console.log({ err });
        });
    }
    return;
  };

  const handleAddTablequalifyingMatch = (
    tablequalifyingMatch: Omit<TTablequalifyingMatch, "id">,
  ) => {
    tablequalifyingMatchCreate(tablequalifyingMatch).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          addTablequalifyingMatch(data);
          toast.info(t("success"));
          return;
        }

        return Promise.reject(status);
      },
    ).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };

  // const { handleToggle: toggleMatch, TablequalifyingMatchModal } =
  //   useModalPageTablequalifyingMatch({
  //     tableId: tablequalifying.id,
  //   });

  const navigate = useNavigate();

  return (
    <UL className="action simple-list flex-row" id={tablequalifying.id}>
      <LI className="edit btn">
        <i
          className="icon-pencil-alt"
          onClick={handleToggleUpdateModal}
        />
        <TablequalifyingUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>

      <LI
        className="edit btn"
        onClick={() =>
          navigate(`/tablequalifyings/match/${tablequalifying.id}`)}
      >
        <i className="icon-folder" />
        Lập lịch
      </LI>
      <LI
        className="edit btn"
        onClick={() =>
          navigate(`/tablequalifyings/match-report/${tablequalifying.id}`)}
      >
        <i className="icon-slice cursor-pointer">
        </i>
        Nhập kết quả
      </LI>
    </UL>
  );
};

interface IListTablequalifying {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (
    row: TTablequalifying,
    e: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  onSelectedRowsChange?: (
    v: {
      allSelected: boolean;
      selectedCount: number;
      selectedRows: TTablequalifying[];
    },
  ) => void;
  columns?: TableColumn<TTablequalifyingColumn>[];
  data?: TTablequalifying[];
  selectableRowSelected?: (row: TTablequalifying) => boolean;
}

const tableColumns = ([
  "name",
  "list_team",
] as (keyof TTablequalifyingColumn)[]).map(
  (c) => ({
    "name": NAME_CONVERSION[c],
    selector: (row: TTablequalifyingColumn) => {
      const col = c as keyof TTablequalifyingColumn;
      return row?.[col]
        ? (row[col as keyof TTablequalifyingColumn] || "")
        : "" as (string | number);
    },
  }),
);

const ListTablequalifying = (
  {
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
    data = [],
    selectableRowSelected,
  }: IListTablequalifying,
) => {
  const [filterText, setFilterText] = useState("");
  const { updateGetFilter, total, loading, filters } =
    useTablequalifyingStore();
  const filteredItems = data.filter((item) => item);

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    const take = newPerPage;
    const skip = Math.max(page - 1, 0) * take;
    updateGetFilter({ take, skip });
  };

  const handlePageChange = (page: number) => {
    if (!filters) return;
    const { take } = filters;
    if (take) {
      updateGetFilter({ skip: Math.max(page - 1, 0) * take });
    }
  };

  if (columns.length > 0 && showAction) {
    columns = [...columns, {
      name: "#",
      cell: (row: TTablequalifyingColumn) => (
        <TablequalifyingTableAction tablequalifying={row} />
      ),
      sortable: true,
    }];
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
            setFilterText(e.target.value)}
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
        paginationServer
        paginationTotalRows={total}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        selectableRowSelected={selectableRowSelected}
      />
    </div>
  );
};

const PageTablequalifying = () => {
  const { t } = useTranslation();
  const { tablequalifyings, addTablequalifying, updateGetFilter, filters } =
    useTablequalifyingStore();
  const { sports } = useSportStore();
  const [sportId, setSportId] = useState("");

  console.log({ tablequalifyings });
  const { sport_id: paramSportId } = useParams();

  useEffect(() => {
    if (paramSportId) {
      setSportId(paramSportId);
    }
  }, [paramSportId]);

  useEffect(() => {
    if (sportId) {
      const filterValue = getFilterByValue("sport_id", "=", sportId);
      updateGetFilter({ ...filters, filter: filterValue });
    } else {
      updateGetFilter({ ...filters, filter: "" });
    }
  }, [sportId]);

  const handleAddTablequalifying = (
    tablequalifying: Partial<TTablequalifying>,
  ) => {
    // console.log({ handleAddTablequalifying: tablequalifying });
    const { id, ...rests } = tablequalifying;
    tablequalifyingCreate(rests).then((res) => {
      const { status, data } = res;
      console.log({ addTablequalifyingResult: data });
      if (status === 200) {
        addTablequalifying(data as TTablequalifying);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };

  const {
    handleToggle: handleToggleAddModal,
    TablequalifyingModal: TablequalifyingAddModal,
  } = useTablequalifyingModal({
    onSubmit: handleAddTablequalifying,
    tablequalifying: {
      "sport_id": sportId || "",
      "name": "",
      "index": 0,
      "listTeams": [],
    },
  });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="btn btn-primary" onClick={handleToggleAddModal}>
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TablequalifyingAddModal />
                <InputSelect
                  title={NAME_CONVERSION["sport"]}
                  data={sports}
                  k="name"
                  v="id"
                  name="sport"
                  value={sportId}
                  handleChange={(e) => setSportId(e.target.value)}
                />
              </CardHeader>
              <CardBody>
                <ListTablequalifying data={tablequalifyings} showAction />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { ListTablequalifying, PageTablequalifying };
