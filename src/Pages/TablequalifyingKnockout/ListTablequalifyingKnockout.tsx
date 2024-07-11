import { useParams } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  TablequalifyingKnockoutMatchReportModal,
  useTablequalifyingKnockout,
} from "./TablequalifyingKnockoutForm";
import { toast } from "react-toastify";
import { NAME_CONVERSION } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import { useSportStore } from "../../store/sport";
import {
  Bracket,
  IRenderSeedProps,
  IRoundProps,
  ISeedProps,
  Seed,
  SeedItem,
  SeedTeam,
} from "react-brackets";
import {
  tablequalifyingKnockoutGen,
  tablequalifyingKnockoutsGet,
  tablequalifyingKnockoutUpdate,
} from "../../Service/tablequalifyingKnockout";
import {
  IKnockoutCreate,
  TTablequalifyingKnockout,
  TTablequalifyingKnockoutMatchReport,
} from "../../type/tablequalifyingKnockout";

const fakeRounds: IRoundProps[] = [
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
    title: "Round two",
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
  { seed, breakpoint, roundIndex, seedIndex, callback }: IRenderSeedProps & {
    callback?: () => void;
  },
) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport,
  ) => {
    tablequalifyingKnockoutUpdate(v).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        callback?.();
      }
    }).catch((err) => {
      console.log({ err });
    });
    // .finally(() => callback?.());
  };
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem>
        <div>
          <SeedTeam style={{ color: "red" }}>
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
          <TablequalifyingKnockoutMatchReportModal
            onSubmit={handleUpdateKnockoutMatch}
            tablequalifyingKnockoutMatchReport={{
              id: seed.id.toString(),
              sets: [],
            }}
          />
          <SeedTeam>{seed.teams[1]?.name || "NO TEAM "}</SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const convertKnockoutsToBrackets = (data: TTablequalifyingKnockout[]) => {
  const newRounds = data.reduce<IRoundProps[]>(
    (
      rounds: IRoundProps[],
      bracket: TTablequalifyingKnockout,
    ) => {
      const idx = rounds.findIndex((r) => r.title === bracket.turn_name);
      const bracketSeed: ISeedProps = {
        id: bracket.id,
        teams: [
          {
            name: bracket.team1_name,
            winCount: bracket.team1_point_win_count,
          },
          {
            name: bracket.team2_name,
            winCount: bracket.team2_point_win_count,
          },
        ],
      };
      if (idx === -1) {
        const newRound = {
          title: bracket.turn_name,
          seeds: [
            bracketSeed,
          ],
        } as IRoundProps;
        return [...rounds, newRound];
      } else {
        rounds[idx].seeds.push(bracketSeed);
        return rounds;
      }
    },
    [] as IRoundProps[],
  );
  return newRounds;
};

const PageTablequalifyingKnockout = () => {
  const { t } = useTranslation();
  const { sports } = useSportStore();
  const { sport_id: paramSportId } = useParams();
  const [sportId, setSportId] = useState("");

  const [rounds, setRounds] = useState<IRoundProps[]>([]);

  useEffect(() => {
    if (paramSportId) {
      setSportId(paramSportId);
    }
  }, [paramSportId]);

  useEffect(() => {
    if (sportId) {
      fetchTablequalifyingKnockout(sportId);
    }
  }, [sportId]);

  const fetchTablequalifyingKnockout = useCallback((sportId: string) => {
    tablequalifyingKnockoutsGet(sportId).then((res) => {
      const { data, status } = res;
      console.log({ fetchTablequalifyingKnockout: data });
      if (status === 200) {
        if (data?.length) {
          const newRounds = convertKnockoutsToBrackets(data);
          if (newRounds?.length) {
            setRounds(newRounds);
          }
        } else {
          console.log("update empty rounds");
          setRounds([]);
          if (addBtnRef.current) addBtnRef.current.click();
        }
      }
    }).catch((err) => console.log({ err }));
  }, []);

  const handleAddKnockoutBracket = (
    knockoutBracket: IKnockoutCreate,
  ) => {
    tablequalifyingKnockoutGen(knockoutBracket).then((res) => {
      const { status, data } = res;
      console.log({ addTablequalifyingResult: data });
      if (status === 200) {
        fetchTablequalifyingKnockout(sportId);
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
    TablequalifyingKnockoutModal: TablequalifyingKnockoutAddModal,
  } = useTablequalifyingKnockout({
    onSubmit: handleAddKnockoutBracket,
    tablequalifyingKnockout: {
      "number_team": 0,
      "has_grade_3rd": false,
      "sport_id": sportId,
    },
  });

  const refreshKnockoutBrackets = useCallback(() => {
    console.log("reload brackets");
    fetchTablequalifyingKnockout(sportId);
  }, [sportId]);

  const addBtnRef = useRef<HTMLDivElement>(null);

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
                <div
                  ref={addBtnRef}
                  className="btn btn-primary"
                  onClick={handleToggleAddModal}
                >
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TablequalifyingKnockoutAddModal />
              </CardHeader>
              <CardBody>
                <Bracket
                  rounds={rounds}
                  renderSeedComponent={(props) => (
                    <CustomSeed {...props} callback={refreshKnockoutBrackets} />
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { PageTablequalifyingKnockout };
