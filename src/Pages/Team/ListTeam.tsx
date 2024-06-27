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
import { useGroupStore } from "../../store/group";
import { useCompetitionStore } from "../../store/competition";
import { useSportStore } from "../../store/sport";
import { useTeammemberStore } from "../../store/teammember";

type TTeamColumn = TTeam;

const TeamTableAction = ({ team }: { team: TTeamColumn }) => {
  const { updateTeam, deleteTeam } = useTeamStore();
  const { t } = useTranslation();
  const handleUpdateTeam = (team: TTeam) => {
    console.log({ handleUpdateTeam: team });
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
          toast.error(t("error"));
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

const ListTeam = () => {
  const [filterText, setFilterText] = useState("");
  const { t } = useTranslation();
  const { competitions } = useCompetitionStore();
  const { sports } = useSportStore();
  const { teammembers } = useTeammemberStore();
  const { teams, addTeam } = useTeamStore();
  const filteredItems = teams.filter((item) =>
    item.org_name &&
    item.org_name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns: TableColumn<TTeamColumn>[] = [
    "competition_id",
    "org_id",
    "sport_id",
    "org_name",
    "lst_member_id",
  ].map((c) => ({
    "name": t(c),
    selector: (row: TTeamColumn) => {
      const col = c as keyof TTeamColumn;
      switch (col) {
        case "competition_id":
          return competitions.find((i) => i.id === row[col])?.name || "";
        case "org_name":
          return row[col];
        case "sport_id":
          return sports.find((i) => i.id === row[col])?.name || "";
        case "lst_member_id":
          return teammembers.filter((m) => row[col].includes(m.id)).join(",") ||
            "";
        default:
          return "";
      }
    },
  }));

  if (columns.length > 0) {
    columns.push(
      {
        name: "#",
        cell: (row: TTeamColumn) => <TeamTableAction team={row} />,
        sortable: true,
      },
    );
  }

  const handleAddTeam = (team: TTeam) => {
    console.log({ handleAddTeam: team });
    const { id, ...rests } = team;
    teamCreate(rests).then((res) => {
      const { status, data } = res;
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
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListTeam };
