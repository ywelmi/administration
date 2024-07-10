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
import { useTablequalifyingKnockoutModal } from "./TablequalifyingKnockoutForm";
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

import {
  Bracket,
  IRenderSeedProps,
  IRoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  SingleLineSeed,
} from "react-brackets";

const rounds: IRoundProps[] = [
  {
    title: "Round one",
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team B" }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: "Team C" }, { name: "Team D" }],
      },
    ],
  },
  {
    title: "Round one",
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
    ],
  },
];

const CustomSeed = (
  { seed, breakpoint, roundIndex, seedIndex }: IRenderSeedProps,
) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam style={{ color: "red" }}>
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
          <SeedTeam>{seed.teams[1]?.name || "NO TEAM "}</SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const PageTablequalifyingKnockout = () => {
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
    const { sport_id } = useParams();
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
  } = useTablequalifyingKnockoutModal({
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
                <InputSelect
                  title={NAME_CONVERSION["sport"]}
                  data={sports}
                  k="name"
                  v="id"
                  name="sport"
                  value={sportId}
                  handleChange={(e) => setSportId(e.target.value)}
                />
                <div className="btn btn-primary">
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TablequalifyingAddModal />
              </CardHeader>
              <CardBody>
                <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { PageTablequalifyingKnockout };
