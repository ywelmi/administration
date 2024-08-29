import { useCallback, useEffect, useMemo, useState } from "react";
import { IRenderSeedProps, Seed, SeedItem, SeedTeam } from "react-brackets";
import { toast } from "react-toastify";
import { InputSelect } from "../../Component/InputSelect";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import {
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnsGet,
  knockoutMatchTurnUpdate,
} from "../../Service/matchTurn";
import {
  tablequalifyingKnockoutPairUpdate,
  tablequalifyingKnockoutResultUpdate,
  tablequalifyingKnockoutUpdate,
} from "../../Service/tablequalifyingKnockout";
import { TTablequalifyingKnockoutMatchReport } from "../../type/tablequalifyingKnockout";
import { ICustomSeedProps } from "../../typing/treeRound";
import { MatchTurnWrapper } from "../MatchTurn/matchTurnContext";
import { useKnockoutContext } from "./context";
import { TablequalifyingKnockoutMatchReportModal } from "./TablequalifyingKnockoutForm";

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
  const {
    fetchTablequalifyingKnockout,
    sportId,
    knockoutTeams,
    listTablequalifyingKnockout,
  } = useKnockoutContext();

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

  const matchTurnsGet = useCallback(async () => {
    if (bracketId) {
      // get all match turns belong to that match id
      const filter = getFilterByValue("match_id", "=", bracketId as string);
      return knockoutMatchTurnsGet({ filter });
    }
    return Promise.reject("no match id");
  }, [bracketId]);

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem>
        <div className="bracket-seed">
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
            <SeedTeam className="bracket-team">
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
              (() => {
                const match = listTablequalifyingKnockout.find(
                  ({ id }) => id === bracketId
                );
                console.log({ knockoutMatch: match });
                if (!match) return null;

                return (
                  <MatchTurnWrapper
                    match={match}
                    matchId={bracketId as string}
                    matchTurnsGet={matchTurnsGet}
                    matchTurnUpdate={knockoutMatchTurnUpdate}
                    matchTurnDel={knockoutMatchTurnDelete}
                    matchTurnCreate={knockoutMatchTurnCreate}
                    // matchTurnSetsUpdate={knockoutMatchTurnSetUpdate}
                    // matchTurnSetsGet={knockoutMatchTurnSetGet}
                  >
                    <TablequalifyingKnockoutMatchReportModal
                      onClose={() => {
                        tablequalifyingKnockoutResultUpdate(bracketId as string)
                          .then((res) => {
                            const { status } = res;
                            if (status === 200) {
                              refreshKnockoutBrackets();
                            }
                          })
                          .catch((err) => {
                            console.log({ err });
                          });
                      }}
                      // onSubmit={handleUpdateKnockoutMatch}
                      // tablequalifyingKnockoutMatchReport={{
                      //   id: seed.id.toString(),
                      //   sets: [],
                      // }}
                    />
                  </MatchTurnWrapper>
                );
              })()
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
            <SeedTeam className="bracket-team">
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

export { CustomSeed };
