import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Bracket,
  IRenderSeedProps,
  Seed,
  SeedItem,
  SeedTeam,
} from "react-brackets";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect, InputSelectConfirm } from "../../Component/InputSelect";
import { N } from "../../name-conversion";
import { generateMartialArtContentTree } from "../../Service/martialArt";
import {
  tablequalifyingKnockoutPairUpdate,
  tablequalifyingKnockoutUpdate,
} from "../../Service/tablequalifyingKnockout";
import { TTablequalifyingKnockoutMatchReport } from "../../type/tablequalifyingKnockout";
import { ICustomSeedProps } from "../../typing/treeRound";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { KnockoutContextProvider, useKnockoutContext } from "./context";
import { CustomRoundComponent } from "./CustomRound";
import { TablequalifyingKnockoutMatchReportModal } from "./MartialArtForm";

interface ISeedTeam {
  team1_id: string;
  team1_name: string;
  team1_point_win_count?: string;
}
interface ISeedPair extends ISeedTeam {
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

const FullSeed = ({
  seed,
  breakpoint,
  roundIndex,
  seedIndex,
}: IRenderSeedProps) => {
  const { fetchTablequalifyingKnockout, sportId, contentId, knockoutTeams } =
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
    fetchTablequalifyingKnockout(sportId, contentId);
  }, [sportId, fetchTablequalifyingKnockout, contentId]);

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
              k="member_map_org"
              v="id"
              name="team1"
              handleChange={(e) => {
                const teamId = e.target.value;
                const team = knockoutTeams.find(({ id }) => id === teamId);
                if (team) {
                  setPair((prev) => ({
                    ...prev,
                    team1_id: team.id,
                    team1_name: team.member_map_org || "",
                  }));
                }
              }}
            />
          ) : (
            <SeedTeam className="team">
              {pair.team1_name
                ? `${pair.team1_name}: ${
                    pair.team1_point_win_count != null
                      ? pair.team1_point_win_count
                      : ""
                  }`
                : "CHƯA CÓ"}
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
              k="member_map_org"
              v="id"
              name="team2"
              handleChange={(e) => {
                const teamId = e.target.value;
                const team = knockoutTeams.find(({ id }) => id === teamId);
                if (team) {
                  setPair((prev) => ({
                    ...prev,
                    team2_id: team.id,
                    team2_name: team.member_map_org || "",
                  }));
                }
              }}
            />
          ) : (
            <SeedTeam className="team">
              {pair.team2_name
                ? `${pair.team2_name}: ${
                    pair.team2_point_win_count != null
                      ? pair.team2_point_win_count
                      : ""
                  }`
                : "CHƯA CÓ"}
            </SeedTeam>
          )}
        </div>
      </SeedItem>
    </Seed>
  );
};

const UnfullfilledSeed = ({
  seed,
  breakpoint,
  roundIndex,
  seedIndex,
}: IRenderSeedProps) => {
  const { refreshMartialArtKnockout, knockoutTeams } = useKnockoutContext();

  const [team, setTeam] = useState<ISeedTeam>({
    team1_id: seed.teams[0]?.id || "",
    team1_name: seed.teams[0]?.name || "",
    team1_point_win_count: seed.teams[0]?.winCount,
  }); // each team's id in pair

  const [lockPick, setLockPick] = useState(
    // seed.teams[0]?.id && seed.teams[1]?.id,
    team.team1_point_win_count != null
  );

  useEffect(() => {
    setTeam({
      team1_id: seed.teams[0]?.id || "",
      team1_name: seed.teams[0]?.name || "",
      team1_point_win_count: seed.teams[0]?.winCount,
    });
  }, [seed]);

  useEffect(() => {
    setLockPick(team.team1_point_win_count != null);
  }, [team.team1_point_win_count]);

  // const handleUpdateKnockoutMatch = (
  //   v: TTablequalifyingKnockoutMatchReport,
  // ) => {
  //   const pairUpdate = { id: seed.id as string, ...team };
  //   tablequalifyingKnockoutPairUpdate(pairUpdate).then(
  //     (res) => {
  //       const { status } = res;
  //       if (status === 200) {
  //         return tablequalifyingKnockoutUpdate(v).then((res) => {
  //           const { status } = res;
  //           if (status === 200) {
  //             toast.success(N["success"]);
  //             // setLockPick(true);
  //             setTeam((prev) => ({ ...prev }));
  //             refreshMartialArtKnockout();
  //           }
  //         });
  //       }
  //     },
  //   ).catch((err) => {
  //     const { response: { data } } = err;
  //     toast.error(data || N["failed"]);
  //     console.log({ err });
  //   });
  //   // .finally(() => callback?.());
  // };

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem className="seed-martial">
        {roundIndex == 0 && !lockPick ? (
          <InputSelectConfirm
            title={N["team"]}
            data={knockoutTeams}
            k="member_map_org"
            v="id"
            name="team1"
            placeHolder={team.team1_name}
            handleChange={(e) => {
              const teamId = e.target.value;
              const team = knockoutTeams.find(({ id }) => id === teamId);
              if (team) {
                setTeam((prev) => ({
                  ...prev,
                  team1_id: team.id,
                  team1_name: team.member_map_org || "",
                }));
              }
            }}
          />
        ) : (
          <SeedTeam className="team">
            {team.team1_name
              ? `${team.team1_name}: ${
                  team.team1_point_win_count != null
                    ? team.team1_point_win_count
                    : ""
                }`
              : "Chưa có"}
          </SeedTeam>
        )}
        <SeedTeam className="flex justify-center">Được vào thẳng</SeedTeam>
        <SeedTeam className="team">---</SeedTeam>
      </SeedItem>
    </Seed>
  );
};

const CustomSeed = (props: IRenderSeedProps) => {
  const { seed } = props;
  return seed?.direct ? (
    <UnfullfilledSeed {...props} />
  ) : (
    <FullSeed {...props} />
  );
};

const MartialArtKnockout = () => {
  const { rounds: fetchedRounds, sportId, contentId } = useKnockoutContext();

  const genMartialArtTree = () =>
    generateMartialArtContentTree(sportId, contentId).catch((err) => {
      toast.error(err?.data ? err.data : N["failed"]);
      console.log({ err });
    });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="btn btn-primary" onClick={genMartialArtTree}>
                  <i className="fa fa-plus" />
                  Sinh cây
                </div>
              </CardHeader>
              <CardBody>
                <Bracket
                  rounds={fetchedRounds}
                  renderSeedComponent={(props) => <CustomSeed {...props} />}
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

const WrapperMartialArtKnockout = () => {
  return (
    <KnockoutContextProvider>
      <MartialArtKnockout />
    </KnockoutContextProvider>
  );
};

export { WrapperMartialArtKnockout as MartialArtKnockout };
