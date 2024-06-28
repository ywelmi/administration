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
import { TTeam } from "../../type/team";
import { useTeamStore } from "../../store/team";
import { useMemo, useState } from "react";
import { useTeamModal } from "./TeamForm";
import { teamCreate, teamDelete, teamUpdate } from "../../Service/team";
import { toast } from "react-toastify";
import { useConfirmModal } from "../../Component/confirmModal";
import { NAME_CONVERSION } from "../../name-conversion";

type TTeamColumn = Omit<TTeam, "list_member_id">;

const TeamTableAction = ({ team }: { team: TTeamColumn }) => {
  const { updateTeam, deleteTeam } = useTeamStore();
  const { t } = useTranslation();
  const handleUpdateTeam = (team: TTeam) => {
    // console.log({ handleUpdateTeam: team });
    teamUpdate(team).then(
      (res) => {
        const { status, data } = res;
        if (status === 200) {
          updateTeam(data as TTeam);
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
  const { handleToggle: handleToggleUpdateModal, TeamModal: TeamUpdateModal } =
    useTeamModal({ onSubmit: handleUpdateTeam, team });

  const handleConfirmDel = () => {
    const { confirm } = useConfirmModal();
    if (confirm) {
      teamDelete(team.id).then((res) => {
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
          onClick={handleToggleUpdateModal}
        />
        <TeamUpdateModal />
      </LI>
      <LI className="delete btn">
        <i className="icon-trash cursor-pointer" onClick={handleConfirmDel} />
      </LI>
    </UL>
  );
};

interface IListTeam {
  showAction?: boolean;
  selectableRows?: boolean;
  onRowSelect?: (row: TTeam, e: React.MouseEvent<Element, MouseEvent>) => void;
  onSelectedRowsChange?: (
    v: { allSelected: boolean; selectedCount: number; selectedRows: TTeam[] },
  ) => void;
  columns?: TableColumn<TTeamColumn>[];
}

const tableColumns = ([
  "competition_name",
  "org_name",
  "list_member_name",
] as (keyof TTeamColumn)[]).map((c) => ({
  "name": NAME_CONVERSION[c],
  selector: (row: TTeamColumn) => {
    const col = c as keyof TTeamColumn;
    return row?.[col] ? (row[col as keyof TTeamColumn] || "") : "";
  },
}));

const ListTeam = (
  {
    showAction,
    onRowSelect,
    onSelectedRowsChange,
    columns = [...tableColumns],
  }: IListTeam,
) => {
  const [filterText, setFilterText] = useState("");
  const { teams } = useTeamStore();
  const filteredItems = teams.filter((item) => item);

  if (columns.length > 0 && showAction) {
    columns.push(
      {
        name: "#",
        cell: (row: TTeamColumn) => <TeamTableAction team={row} />,
        sortable: true,
      },
    );
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
      />
    </div>
  );
};

const PageTeam = () => {
  const { t } = useTranslation();
  const { addTeam } = useTeamStore();
  const handleAddTeam = (team: TTeam) => {
    console.log({ handleAddTeam: team });
    const { id, ...rests } = team;
    teamCreate(rests).then((res) => {
      const { status, data } = res;
      console.log({ addTeamResult: data });
      if (status === 200) {
        addTeam(data as TTeam);
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };
  const { handleToggle: handleToggleAddModal, TeamModal: TeamAddModal } =
    useTeamModal({ onSubmit: handleAddTeam });

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
                <TeamAddModal />
              </CardHeader>
              <CardBody>
                <ListTeam showAction />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { ListTeam, PageTeam };
