import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { useTranslation } from "react-i18next";
import {
  TablequalifyingKnockoutMatchReportModal,
  useTablequalifyingKnockout,
} from "./TablequalifyingKnockoutForm";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import {
  Bracket,
  IRenderSeedProps,
  Seed,
  SeedItem,
  SeedTeam,
} from "react-brackets";
import {
  tablequalifyingKnockoutGen,
  tablequalifyingKnockoutPairUpdate,
  tablequalifyingKnockoutUpdate,
} from "../../Service/tablequalifyingKnockout";
import {
  IKnockoutCreate,
  TTablequalifyingKnockout,
  TTablequalifyingKnockoutMatchReport,
} from "../../type/tablequalifyingKnockout";
import { KnockoutContextProvider, useKnockoutContext } from "./context";

import "./style.css";

interface IPairId {
  team1_id: string;
  team1_name: string;
  team1_point_win_count?: string;
  team2_id: string;
  team2_name: string;
  team2_point_win_count?: string;
}

const CustomSeed = ({
  seed,
  breakpoint,
  roundIndex,
  seedIndex,
  callback,
}: IRenderSeedProps & {
  callback?: () => void;
}) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed

  const { fetchTablequalifyingKnockout, sportId, knockoutTeams } =
    useKnockoutContext();

  const [pair, setPair] = useState<IPairId>({
    team1_id: seed.teams[0]?.id || "",
    team1_name: seed.teams[0]?.name || "",
    team1_point_win_count: seed.teams[0]?.winCount,
    team2_id: seed.teams[1]?.id || "",
    team2_name: seed.teams[1]?.name || "",
    team2_point_win_count: seed.teams[1]?.winCount,
  }); // each team's id in pair

  const [lockPick, setLockPick] = useState(
    seed.teams[0]?.id && seed.teams[1]?.id,
  );

  useEffect(() => {
    setPair({
      team1_id: seed.teams[0]?.id || "",
      team1_name: seed.teams[0]?.name || "",
      team1_point_win_count: seed.teams[0]?.winCount,
      team2_id: seed.teams[1]?.id || "",
      team2_name: seed.teams[1]?.name || "",
      team2_point_win_count: seed.teams[1]?.winCount,
    });
  }, [seed]);

  const isFilledPair = useMemo(() => {
    // if (seed.teams?.filter((t) => !!t.name)?.length === seed.teams?.length) {
    //   return true;
    // }
    // for (const t of Object.values(pair)) {
    for (const t of [pair.team1_id, pair.team2_id]) {
      if (!t) return false;
    }
    return true;
  }, [seed.teams, pair]);

  const refreshKnockoutBrackets = useCallback(() => {
    console.log("reload brackets");
    fetchTablequalifyingKnockout(sportId);
  }, [sportId]);

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport,
  ) => {
    const pairUpdate = { id: seed.id as string, ...pair };
    tablequalifyingKnockoutPairUpdate(pairUpdate)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          return tablequalifyingKnockoutUpdate(v).then((res) => {
            const { status } = res;
            if (status === 200) {
              toast.success(N["success"]);
              setLockPick(true);
              setPair((prev) => ({ ...prev }));
              refreshKnockoutBrackets();
            }
          });
        }
      })
      .catch((err) => {
        const {
          response: { data },
        } = err;
        toast.error(data || N["failed"]);
        console.log({ err });
      });
    // .finally(() => callback?.());
  };

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem className="seed">
        <div>
          {roundIndex == 0 && !lockPick
            ? (
              <InputSelect
                title={N["team"]}
                data={knockoutTeams}
                k="org_name"
                v="id"
                name="team1"
                handleChange={(e) => {
                  const teamId = e.target.value;
                  const team = knockoutTeams.find(({ id }) => id === teamId);
                  if (team) {
                    setPair((prev) => ({
                      ...prev,
                      team1_id: team.id,
                      team1_name: team.org_name,
                    }));
                  }
                }}
              />
            )
            : (
              <SeedTeam className="team">
                {pair.team1_name
                  ? `${pair.team1_name}: ${pair.team1_point_win_count || ""}`
                  : "NO TEAM"}
              </SeedTeam>
            )}
          <div className="p-2">
            {isFilledPair
              ? (
                <TablequalifyingKnockoutMatchReportModal
                  onSubmit={handleUpdateKnockoutMatch}
                  tablequalifyingKnockoutMatchReport={{
                    id: seed.id.toString(),
                    sets: [],
                  }}
                />
              )
              : <div>Chưa đủ cặp đấu</div>}
          </div>
          {roundIndex == 0 && !lockPick
            ? (
              <InputSelect
                title={N["team"]}
                data={knockoutTeams}
                k="org_name"
                v="id"
                name="team2"
                handleChange={(e) => {
                  const teamId = e.target.value;
                  const team = knockoutTeams.find(({ id }) => id === teamId);
                  if (team) {
                    setPair((prev) => ({
                      ...prev,
                      team2_id: team.id,
                      team2_name: team.org_name,
                    }));
                  }
                }}
              />
            )
            : (
              <SeedTeam className="team">
                {pair.team2_name
                  ? `${pair.team2_name}: ${pair.team2_point_win_count || ""}`
                  : "NO TEAM"}
              </SeedTeam>
            )}
        </div>
      </SeedItem>
    </Seed>
  );
};

const PageTablequalifyingKnockout = () => {
  const { t } = useTranslation();

  const {
    knockoutSports,
    sportId,
    setSportId,
    rounds: fetchedRounds,
    fetchTablequalifyingKnockout,
  } = useKnockoutContext();

  const [rounds, setRounds] = useState(fetchedRounds);

  useEffect(() => {
    setRounds(fetchedRounds);
  }, [fetchedRounds]);

  const handleAddKnockoutBracket = useCallback(
    (knockoutBracket: IKnockoutCreate) => {
      tablequalifyingKnockoutGen(knockoutBracket)
        .then((res) => {
          const { status, data } = res;
          console.log({ addTablequalifyingResult: data });
          if (status === 200) {
            fetchTablequalifyingKnockout(sportId);
            toast.info(t("success"));
            return;
          }
          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(t("error"));
          console.log({ err });
        });
    },
    [],
  );

  const {
    handleToggle: handleToggleAddModal,
    TablequalifyingKnockoutModal: TablequalifyingKnockoutAddModal,
  } = useTablequalifyingKnockout({
    onSubmit: handleAddKnockoutBracket,
    tablequalifyingKnockout: {
      number_team: 0,
      has_grade_3rd: false,
      sport_id: sportId,
    },
  });

  const addBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rounds?.length > 0) return;
    if (addBtnRef.current) addBtnRef.current.click();
  }, [rounds]);

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Thi đấu vòng loại"} parent={"HTTQ2024"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <InputSelect
                  title={N["sport"]}
                  data={knockoutSports}
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
                  renderSeedComponent={(props) => <CustomSeed {...props} />}
                  // bracketClassName="bracket"
                  // roundClassName="round"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const WrapperTablequalifyingKnockout = () => {
  return (
    <KnockoutContextProvider>
      <PageTablequalifyingKnockout />
    </KnockoutContextProvider>
  );
};
export { WrapperTablequalifyingKnockout as PageTablequalifyingKnockout };
