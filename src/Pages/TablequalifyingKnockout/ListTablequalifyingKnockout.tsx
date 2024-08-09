import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
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
  TTablequalifyingKnockoutMatchReport,
} from "../../type/tablequalifyingKnockout";
import { KnockoutContextProvider, useKnockoutContext } from "./context";

import "./style.css";
import { CustomRoundComponent } from "./CustomRound.tsx";
import { ICustomSeedProps } from "../../typing/treeRound.ts";

interface ISeedPair {
  team1_id: string;
  team1_name: string;
  team1_point_win_count?: string;
  team2_id: string;
  team2_name: string;
  team2_point_win_count?: string;
}

const seed2pair = (seed: ICustomSeedProps): ISeedPair => {
  return {
    team1_id: seed.teams[0]?.id || "",
    team1_name: seed.teams[0]?.name || "",
    team1_point_win_count: seed.teams[0]?.winCount,
    team2_id: seed.teams[1]?.id || "",
    team2_name: seed.teams[1]?.name || "",
    team2_point_win_count: seed.teams[1]?.winCount,
  };
};

const CustomSeed = ({
  seed,
  breakpoint,
  roundIndex,
  seedIndex,
}: IRenderSeedProps) => {
  const { fetchTablequalifyingKnockout, sportId, knockoutTeams } =
    useKnockoutContext();

  const bracketId = seed.id;

  const [pair, setPair] = useState<ISeedPair>(seed2pair(seed)); // each team's id in pair

  const [lockPick, setLockPick] = useState(
    seed.teams[0]?.id && seed.teams[1]?.id
  );

  const [isUpdatingTeam, setIsUpdatingTeam] = useState(false);

  useEffect(() => {
    setPair(seed2pair(seed));
  }, [seed]);

  const isFilledPair = useMemo(() => {
    for (const t of [pair.team1_id, pair.team2_id]) {
      if (!t) return false;
    }

    return true;
  }, [pair]);

  const refreshKnockoutBrackets = useCallback(() => {
    console.log("reload brackets");
    fetchTablequalifyingKnockout(sportId);
  }, [sportId, fetchTablequalifyingKnockout]);

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport
  ) => {
    return tablequalifyingKnockoutUpdate(v)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          toast.success(N["success"]);
          setLockPick(true);
          setPair((prev) => ({ ...prev }));
          refreshKnockoutBrackets();
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

  const resetPair = () => {
    setIsUpdatingTeam(false);
    setLockPick(true);
    setPair(seed2pair(seed));
  };

  const updateBracketTeams = () => {
    setIsUpdatingTeam(false);
    setLockPick(true);
    const pairUpdate = {
      id: bracketId as string,
      team1_id: pair.team1_id,
      team2_id: pair.team2_id,
    };
    tablequalifyingKnockoutPairUpdate(pairUpdate)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          toast.success(N["success"]);
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

  const enableSelectTeam = () => {
    setLockPick(false);
    setIsUpdatingTeam(true);
  };

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem className="seed">
        <div>
          {!lockPick && isUpdatingTeam ? (
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
          ) : (
            <SeedTeam className="team">
              {pair.team1_name
                ? `${pair.team1_name}: ${pair.team1_point_win_count || ""}`
                : "NO TEAM"}
            </SeedTeam>
          )}
          <div className="p-2 flex gap-2 justify-center">
            {isUpdatingTeam ? (
              <div>
                {" "}
                <button
                  type="button"
                  className="cnf-btn"
                  onClick={updateBracketTeams}
                >
                  Lưu cặp
                </button>
                {"/"}
                <button type="button" className="cnf-btn" onClick={resetPair}>
                  Hủy
                </button>
              </div>
            ) : (
              <button
                className="cnf-btn"
                onClick={() => {
                  enableSelectTeam();
                }}
              >
                Sửa cặp
              </button>
            )}
            {isFilledPair && !isUpdatingTeam ? (
              <TablequalifyingKnockoutMatchReportModal
                onSubmit={handleUpdateKnockoutMatch}
                tablequalifyingKnockoutMatchReport={{
                  id: seed.id.toString(),
                  sets: [],
                }}
              />
            ) : (
              <div>Chưa đủ </div>
            )}
          </div>
          {!lockPick && isUpdatingTeam ? (
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
          ) : (
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
            toast.info(N["success"]);
            return;
          }
          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(N["error"]);
          console.log({ err });
        });
    },
    [sportId, fetchTablequalifyingKnockout]
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
      content_id: "",
    },
  });

  const addBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rounds?.length > 0) return;

    if (addBtnRef.current && !sportId) addBtnRef.current.click();
  }, [rounds, sportId]);

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
                  roundTitleComponent={CustomRoundComponent}
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
