import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { confirmModal } from "../../Component/confirmModal";
import { InputSelect } from "../../Component/InputSelect";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import useGetTablequalifyingMatch from "../../hook/useGetTablequalifyingMatch";
import { N } from "../../name-conversion";
import {
  tablequalifyingMatchCreate,
  tablequalifyingMatchDelete,
  tablequalifyingMatchListTeamUpdate,
  tablequalifyingMatchsGen,
  tablequalifyingMatchUpdate,
} from "../../Service/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../../store/tablequalifyingMatch";
import {
  TTablequalifyingMatch,
  TTablequalifyingMatchTeam,
} from "../../type/tablequalifyingMatch";
import { convertToDate } from "../../utils/date";
import { useTablequalifyingMatchModal } from "./TablequalifyingMatchForm";

type TTablequalifyingColumn = Omit<TTablequalifyingMatch, "list_member_id">;

const TablequalifyingTableAction = ({
  tablequalifyingMatch,
}: {
  tablequalifyingMatch: TTablequalifyingColumn;
}) => {
  const { updateTablequalifyingMatch, deleteTablequalifyingMatch } =
    useTablequalifyingMatchStore();
  const { t } = useTranslation();

  const handleUpdateTablequalifyingMatch = (
    tablequalifyingMatch: TTablequalifyingMatch
  ) => {
    // console.log({ handleUpdateTablequalifyingMatch: tablequalifyingMatch });
    tablequalifyingMatchUpdate(tablequalifyingMatch)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          console.log({ data });
          // updateTablequalifyingMatch(data as TTablequalifyingMatch);
          updateTablequalifyingMatch(tablequalifyingMatch);
          toast.success(t("success"));
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
    handleToggle: handleToggleUpdateModal,
    TablequalifyingMatchModal: TablequalifyingUpdateModal,
  } = useTablequalifyingMatchModal({
    onSubmit: handleUpdateTablequalifyingMatch,
    tablequalifyingMatch,
  });

  const handleConfirmDel = async () => {
    const { confirm } = await confirmModal();
    if (confirm) {
      tablequalifyingMatchDelete(tablequalifyingMatch.id)
        .then((res) => {
          const { status, data } = res;
          console.log({ status, data });
          if (status === 200) {
            toast.success(t("success"));
            deleteTablequalifyingMatch(tablequalifyingMatch.id);
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

  return (
    <UL className="action simple-list flex-row" id={tablequalifyingMatch.id}>
      <LI className="edit btn">
        <i className="icon-pencil-alt" onClick={handleToggleUpdateModal} />
        <TablequalifyingUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>
      <LI className="btn">
        <i className="icon-summernote cursor-pointer" />
      </LI>
      {/* <LI className="btn">
        <i className="icon-summernote cursor-pointer">Lập lịch</i>
      </LI>
      <LI className="btn">
        <i className="icon-square cursor-pointer">Nhập kết quả</i>
      </LI> */}
    </UL>
  );
};

interface IListTablequalifyingMatch {
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
  // columns?: TableColumn<TTablequalifyingColumn>[];
  columns?: ColumnDef<TTablequalifyingColumn>[];
  data?: TTablequalifyingMatch[];
  selectableRowSelected?: (row: TTablequalifyingMatch) => boolean;
  loading?: boolean;
}

const IgnoreTeamSelect = ({
  original,
}: {
  original: TTablequalifyingMatch;
}) => {
  const teamSelect = [
    { k: original.team1_name, v: original.team1_id },
    { k: original.team2_name, v: original.team2_id },
  ];
  const { updateTablequalifyingMatch } = useTablequalifyingMatchStore();
  const handleChangeIgnoreTeam = (e) => {
    const { value } = e.target;
    setValue(value);
    const newMatchUpdate: TTablequalifyingMatchTeam = {
      match_id: original.id,
    };
    if (value) {
      newMatchUpdate.ignore_team_id = value;
    }
    console.log({ newMatchUpdate, value });
    tablequalifyingMatchListTeamUpdate(newMatchUpdate)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          toast.success(N["success"]);
          updateTablequalifyingMatch({ ...original, ignore_team_id: value });
        }
      })
      .catch((err) => {
        toast.error(err?.data ? err.data : N["error"]);
        console.log({ err });
        setValue(original.ignore_team_id);
      });
  };
  const [value, setValue] = useState(original.ignore_team_id);
  return (
    <InputSelect
      data={teamSelect}
      k="k"
      v="v"
      name="teamSelect"
      handleChange={handleChangeIgnoreTeam}
      value={value}
    />
  );
};
const tableColumns: ColumnDef<TTablequalifyingMatch>[] = (
  [
    "indexs",
    // "list_team",
    "team1_name",
    "team2_name",
    "match_day",
    "match_hour",
    "match_location",
    // "match_location_chid",
    "ignore_team_id",
  ] as (keyof TTablequalifyingColumn)[]
).map((c) => ({
  accessorKey: c,
  footer: (props) => props.column.id,
  header: N[c],
  cell: function Cell(props) {
    if (c === "match_day")
      return props.getValue()
        ? convertToDate(props.getValue() as string)
        : null;
    if (c == "ignore_team_id") {
      const {
        row: { original },
      } = props;
      return <IgnoreTeamSelect original={original} />;
    }
    return props.getValue() as string;
  },

  selector: (row: TTablequalifyingColumn) => {
    const col = c as keyof TTablequalifyingColumn;
    switch (col) {
      case "match_day":
        return row[col] ? convertToDate(row[col]) : "";
    }
    return row?.[col]
      ? (row[col as keyof TTablequalifyingColumn] || "").toString()
      : ("" as string | number);
  },
}));

const ListTablequalifyingMatch = ({
  showAction,
  // onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  data = [],
  selectableRowSelected,
}: // loading,
IListTablequalifyingMatch) => {
  // const [filterText, setFilterText] = useState("");
  // const filteredItems = data.filter((item) => item);

  // const subHeaderComponentMemo = useMemo(() => {
  //   return (
  //     <div
  //       id="basic-1_filter"
  //       className="dataTables_filter d-flex align-items-center"
  //     >
  //       <Label className="me-2">{SearchTableButton}:</Label>
  //       <Input
  //         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //           setFilterText(e.target.value)
  //         }
  //         type="search"
  //         value={filterText}
  //       />
  //     </div>
  //   );
  // }, [filterText]);

  let displayColumns = [...columns];
  if (showAction) {
    displayColumns = [
      ...displayColumns,
      {
        // name: "#",
        // cell: (row: TTablequalifyingColumn) => (
        //   <TablequalifyingTableAction tablequalifyingMatch={row} />
        // ),
        // sortable: true,
        id: "actions",
        header: "#",
        cell: (props) => (
          <TablequalifyingTableAction
            tablequalifyingMatch={props.row.original}
          />
        ),
      },
    ];
  }
  return (
    // <div className="table-responsive">
    //   <DataTable
    //     columns={displayColumns}
    //     data={filteredItems}
    //     pagination
    //     subHeader
    //     subHeaderComponent={subHeaderComponentMemo}
    //     highlightOnHover
    //     striped
    //     persistTableHead
    //     selectableRowsHighlight
    //     onRowClicked={onRowSelect}
    //     onSelectedRowsChange={onSelectedRowsChange}
    //     selectableRows={!!onRowSelect || !!onSelectedRowsChange}
    //     progressPending={loading}
    //   />
    // </div>
    <div className="table-responsive">
      <TanTable
        data={data}
        columns={displayColumns}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRowSelected={selectableRowSelected}
        getRowId={(r) => r.id}
      />
    </div>
  );
};

const PageTablequalifyingMatch = () => {
  const { t } = useTranslation();
  const {
    updateTableId,
    addTablequalifyingMatch,
    tablequalifyingMatchs,
    addTablequalifyingMatchs,
  } = useTablequalifyingMatchStore();
  const { table_id } = useParams();

  const { refresh } = useGetTablequalifyingMatch();

  // console.log({ PageTablequalifyingMatch: tablequalifyingMatchs });
  useEffect(() => {
    if (table_id) {
      // const filterValue = getFilterByValue("sport_id", "=", table_id);
      updateTableId(table_id);
    } else {
      // updateGetFilter({ ...filters, filter: "" });
    }
  }, [table_id]);

  const handleAddTablequalifyingMatch = useCallback(
    (tablequalifyingMatch: TTablequalifyingMatch) => {
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
            // addTablequalifyingMatch(newData);
            refresh();
            toast.info(t("success"));
            return;
          }
          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(err?.data ? err.data : t("error"));
          console.log({ err });
        });
    },
    [refresh, t]
  );
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
      match_day: new Date().toLocaleDateString(),
      match_time: "",
    },
  });

  const handleMatchGen = useCallback(() => {
    if (!table_id) {
      toast.error(N["failed"]);
      return;
    }
    // tablequalifyingMatchMembersGet(table_id).then(
    //   res => {
    //     const {data, status} = res
    //     if (status!== 200){
    //       toast.error(N['failed'])
    //       return
    //     }
    //     if(!data?.length){
    //       toast.error("Bảng không có đội nào")
    //     }
    //     // const table = {
    //     //   "sport_id": "154D83EC-66F7-44C1-A2D3-84F821A9181E",
    //     //   "name": "Bảng B",
    //     //   "index": 0,
    //     //   "listTeams": [
    //     //     "99F001F0-5C5F-49D5-B22C-0C01164E7CB6"
    //     //   ]
    //     // }
    //   }

    // )

    tablequalifyingMatchsGen(table_id)
      .then((res) => {
        const { data, status } = res;
        console.log({ data, status });
        if (status === 200) {
          addTablequalifyingMatchs(data);
          toast.success(N["success"]);
        }
      })
      .catch((err) => {
        toast.error(err?.data ? err.data : N["failed"]);
        console.log(err);
      });
  }, [table_id]);

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Lịch thi đấu"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="flex gap-2">
                  <div
                    className="btn btn-primary"
                    onClick={handleToggleAddModal}
                  >
                    <i className="fa fa-plus" />
                    {"Thêm mới"}
                  </div>
                  <div className="btn btn-secondary" onClick={handleMatchGen}>
                    <i className="fa fa-plus" />
                    {"Sinh các trận"}
                  </div>
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

export { PageTablequalifyingMatch };
