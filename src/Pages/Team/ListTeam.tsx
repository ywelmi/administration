import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { LI, UL } from "../../AbstractElements";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { confirmModal } from "../../Component/confirmModal";
import { N } from "../../name-conversion";
import { teamCreate, teamDelete, teamUpdate } from "../../Service/team";
import { useConfigStore } from "../../store/config";
import { useTeamStore } from "../../store/team";
import { TTeam } from "../../type/team";
import { useTeamModal } from "./TeamForm";

type TTeamColumn = Omit<TTeam, "list_member_id">;

const TeamTableAction = ({ team }: { team: TTeamColumn }) => {
  const { updateTeam, deleteTeam } = useTeamStore();
  const { t } = useTranslation();

  const handleUpdateTeam = (team: TTeam) => {
    teamUpdate(team)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          updateTeam(data as TTeam);
          toast.success(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
        toast.error(err?.data ? err.data : t("error"));
        console.log({ err });
      });
  };

  const { handleToggle: handleToggleUpdateModal, TeamModal: TeamUpdateModal } =
    useTeamModal({
      onSubmit: handleUpdateTeam,
      team: { ...team, list_member_id: team.member_ids },
    });

  const handleConfirmDel = async () => {
    const { confirm } = await confirmModal();
    if (confirm) {
      teamDelete(team.team_sport_id)
        .then((res) => {
          const { status, data } = res;
          console.log({ status, data });
          if (status === 200) {
            toast.success(t("success"));
            deleteTeam(team.id);
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
    <UL className="action simple-list flex-row" id={team.id}>
      <LI className="edit btn">
        <i
          className="icon-pencil-alt"
          onClick={() => {
            handleToggleUpdateModal();
          }}
        />
        <TeamUpdateModal />
      </LI>
      <LI className="delete btn" onClick={handleConfirmDel}>
        <i className="icon-trash cursor-pointer" />
      </LI>
    </UL>
  );
};

interface IListTeam {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (row: TTeam, e: React.MouseEvent<Element, MouseEvent>) => void;
  onSelectedRowsChange?: (v: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: TTeam[];
  }) => void;
  columns?: TableColumn<TTeamColumn>[];
  data?: TTeam[];
  selectableRowSelected?: (row: TTeam) => boolean;
}

const tableColumns = (
  [
    // "competition_name",
    "org_name",
    "sport_name",
    "list_member_name",
  ] as (keyof Omit<TTeamColumn, "list_team_member">)[]
).map((c) => ({
  name: N[c],
  sortable: true,
  selector: (row: TTeamColumn) => {
    const col = c as keyof TTeamColumn;
    return row?.[col] ? row[col as keyof TTeamColumn] : ("" as string | number);
  },
}));

const ListTeam = ({
  data = [],
  showAction,
  onRowSelect,
  onSelectedRowsChange,
  columns = [...tableColumns],
  selectableRowSelected,
}: IListTeam) => {
  const [filterText, setFilterText] = useState("");
  const { updateGetFilter, total, loading, filters } = useTeamStore();
  const filteredItems = data.filter((item) => item);

  // const handlePerRowsChange = (newPerPage: number, page: number) => {
  //   const take = newPerPage;
  //   const skip = Math.max(page - 1, 0) * take;
  //   updateGetFilter({ take, skip });
  // };
  //
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
        cell: (row: TTeamColumn) => <TeamTableAction team={row} />,
        sortable: true,
      },
    ];
  }

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

  return (
    <div className="table-responsive">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        //subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover
        striped
        persistTableHead
        selectableRowsHighlight
        onRowClicked={onRowSelect}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRows={!!onRowSelect || !!onSelectedRowsChange}
        progressPending={loading}
        // paginationServer
        // paginationTotalRows={total}
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}
        selectableRowSelected={selectableRowSelected}
      />
    </div>
  );
};

const PageTeam = () => {
  const { t } = useTranslation();
  const { teamSelector } = useConfigStore();
  const { addTeam, teams } = useTeamStore(teamSelector());

  const handleAddTeam = (team: TTeam) => {
    console.log({ handleAddTeam: team });
    const { ...rests } = team;
    teamCreate(rests)
      .then((res) => {
        const { status, data } = res;
        console.log({ addTeamResult: data });
        if (status === 200) {
          addTeam(data as TTeam);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      })
      .catch((err) => {
        toast.error(err?.data || t("error"));
        console.log({ err });
      });
  };
  const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } =
    useTeamModal({ onSubmit: handleAddTeam });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Danh sách đội thi đấu"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="btn btn-primary" onClick={handleToggleAddModal}>
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TeamAddModal />
              </CardHeader>
              <CardBody>
                <ListTeam data={teams} showAction />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { ListTeam, PageTeam };
