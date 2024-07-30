import { useParams } from "react-router-dom";
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
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";
import { useMemo, useState } from "react";
import { useTablequalifyingMatchModal } from "./TablequalifyingMatchForm";
import {
  tablequalifyingMatchCreate,
  // tablequalifyingMatchDelete,
  // tablequalifyingMatchUpdate,
} from "../../Service/tablequalifyingMatch";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { convertToDate } from "../../utils/date";

type TTablequalifyingColumn = Omit<TTablequalifyingMatch, "list_member_id">;

// const TablequalifyingTableAction = (
//   { tablequalifyingMatch }: { tablequalifyingMatch: TTablequalifyingColumn },
// ) => {
//   const { updateTablequalifyingMatch, deleteTablequalifyingMatch } =
//     useTablequalifyingStore();
//   const { t } = useTranslation();
//   const handleUpdateTablequalifyingMatch = (tablequalifyingMatch: TTablequalifyingMatch) => {
//     // console.log({ handleUpdateTablequalifyingMatch: tablequalifyingMatch });
//     tablequalifyingUpdate(tablequalifyingMatch).then(
//       (res) => {
//         const { status, data } = res;
//         if (status === 200) {
//           updateTablequalifyingMatch(data as TTablequalifyingMatch);
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
//   const {
//     handleToggle: handleToggleUpdateModal,
//     TablequalifyingModal: TablequalifyingUpdateModal,
//   } = useTablequalifyingModal({
//     onSubmit: handleUpdateTablequalifyingMatch,
//     tablequalifyingMatch,
//   });
//
//   const handleConfirmDel =  async () => {
//     if (confirm) {
//     if (confirm) {
//       tablequalifyingDelete(tablequalifyingMatch.id).then((res) => {
//         const { status, data } = res;
//         console.log({ status, data });
//         if (status === 200) {
//           toast.success(t("success"));
//           deleteTablequalifyingMatch(tablequalifyingMatch.id);
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
//   return (
//     <UL className="action simple-list flex-row" id={tablequalifyingMatch.id}>
//       <LI className="edit btn">
//         <i
//           className="icon-pencil-alt"
//           onClick={handleToggleUpdateModal}
//         />
//         <TablequalifyingUpdateModal />
//       </LI>
//       <LI className="delete btn">
//         <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
//       </LI>
//       <LI className="btn">
//         <i className="icon-summernote cursor-pointer" />
//       </LI>
//       <LI className="btn">
//         <i className="icon-summernote cursor-pointer">Lập lịch</i>
//       </LI>
//       <LI className="btn">
//         <i className="icon-square cursor-pointer">Nhập kết quả</i>
//       </LI>
//     </UL>
//   );
// };

interface IListTablequalifyingMatch {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (
    row: TTablequalifyingMatch,
    e: React.MouseEvent<Element, MouseEvent>,
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
    // "created?",
    "match_day",
    "match_hour",
    "team1_name",
    "team2_name",
  ] as (keyof TTablequalifyingColumn)[]
).map((c) => ({
  name: N[c],
  sortable: true,
  selector: (row: TTablequalifyingColumn) => {
    const col = c as keyof TTablequalifyingColumn;
    switch (col) {
      case "match_day":
        return convertToDate(row[col]);
    }
    return row?.[col]
      ? (row[col as keyof TTablequalifyingColumn] || "").toString()
      : ("" as string | number);
  },
}));

const ListTablequalifyingMatch = ({
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  data = [],
  selectableRowSelected,
  loading,
}: IListTablequalifyingMatch) => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = data.filter((item) => item);

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
      />
    </div>
  );
};

const PageTablequalifyingMatch = () => {
  const { t } = useTranslation();
  const { updateTableId, addTablequalifyingMatch, tablequalifyingMatchs } =
    useTablequalifyingMatchStore();
  const { table_id } = useParams();

  useEffect(() => {
    if (table_id) {
      // const filterValue = getFilterByValue("sport_id", "=", table_id);
      updateTableId(table_id);
    } else {
      // updateGetFilter({ ...filters, filter: "" });
    }
  }, [table_id]);

  const handleAddTablequalifyingMatch = (
    tablequalifyingMatch: TTablequalifyingMatch,
  ) => {
    console.log({ handleAddTablequalifyingMatch: tablequalifyingMatch });
    const { id, ...rests } = tablequalifyingMatch;
    tablequalifyingMatchCreate(rests)
      .then((res) => {
        const { status, data } = res;
        console.log({ addTablequalifyingMatchResult: data });
        if (status === 200) {
          const newData = {
            ...tablequalifyingMatch,
            ...data,
          } as TTablequalifyingMatch;
          console.log({ tablequalifyingMatchCreate: newData });
          addTablequalifyingMatch(newData);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
        toast.error(t("error"));
        console.log({ err });
      });
  };

  const {
    handleToggle: handleToggleAddModal,
    TablequalifyingMatchModal: TablequalifyingAddModal,
  } = useTablequalifyingMatchModal({
    onSubmit: handleAddTablequalifyingMatch,
    tablequalifyingMatch: {
      table_id: table_id || "",
      team1_id: "",
      team2_id: "",
      indexs: 0,
      match_day: new Date().toISOString(),
      match_hour: "",
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
              </CardHeader>
              <CardBody>
                <ListTablequalifyingMatch
                  data={tablequalifyingMatchs}
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

interface IModalPageTablequalifyingMatch {
  tableId: string;
}

const useModalPageTablequalifyingMatch = ({
  tableId,
}: IModalPageTablequalifyingMatch) => {
  const { t } = useTranslation();
  const { updateTableId, addTablequalifyingMatch, tablequalifyingMatchs } =
    useTablequalifyingMatchStore();

  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((s) => !s);
  };

  useEffect(() => {
    if (tableId && opened) {
      console.log({ tableId });
      updateTableId(tableId);
    } else {
    }
  }, [opened]);

  const handleAddTablequalifyingMatch = (
    tablequalifyingMatch: TTablequalifyingMatch,
  ) => {
    console.log({ handleAddTablequalifyingMatch: tablequalifyingMatch });
    const { id, ...rests } = tablequalifyingMatch;
    tablequalifyingMatchCreate(rests)
      .then((res) => {
        const { status, data } = res;
        console.log({ addTablequalifyingMatchResult: data });
        if (status === 200) {
          const newData = {
            ...tablequalifyingMatch,
            ...data,
          } as TTablequalifyingMatch;
          console.log({ tablequalifyingMatchCreate: newData });
          addTablequalifyingMatch(newData);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
        toast.error(t("error"));
        console.log({ err });
      });
  };

  // const {
  //   TablequalifyingMatchPopover,
  //   handleToggle: handleToggleAddPopover,
  // } = useTablequalifyingMatchPopover({
  //   onSubmit: handleAddTablequalifyingMatch,
  //   tablequalifyingMatch: {
  //     table_id: tableId || "",
  //     team1_id: "",
  //     team2_id: "",
  //     indexs: 0,
  //     match_day: new Date().toISOString(),
  //     match_hour: "",
  //   },
  // });

  const TablequalifyingMatchModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <div>
        {/* <div className="page-body"> */}
        {/* <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} /> */}
        <Container fluid>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0 card-no-border"></CardHeader>
                {/* <CardBody> */}
                {/*   <ListTablequalifyingMatch */}
                {/*     data={tablequalifyingMatchs} */}
                {/*     showAction */}
                {/*   /> */}
                {/* </CardBody> */}
                <Btn type="button" color="danger" onClick={handleToggle}>
                  Đóng
                </Btn>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* <TablequalifyingMatchPopover target="add_match_123"> */}
        {/*   <Btn */}
        {/*     type="button" */}
        {/*     color="secondary" */}
        {/*     id="add_match_123" */}
        {/*     onClick={() => handleToggleAddPopover(true)} */}
        {/*   > */}
        {/*     Thêm lịch thi đấu */}
        {/*   </Btn> */}
        {/* </TablequalifyingMatchPopover> */}
      </div>
    </CommonModal>
  );
  return { handleToggle, TablequalifyingMatchModal };
};

export {
  ListTablequalifyingMatch,
  PageTablequalifyingMatch,
  useModalPageTablequalifyingMatch,
};
