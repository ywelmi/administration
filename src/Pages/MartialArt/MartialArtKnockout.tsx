import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { TablequalifyingKnockoutMatchReportModal } from "./MartialArtForm";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
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
  TTablequalifyingKnockoutMatchReport,
} from "../../type/tablequalifyingKnockout";
import { KnockoutContextProvider, useKnockoutContext } from "./context";
import { InputSelect } from "../../Component/InputSelect";
import { extend } from "lodash";

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

const FullSeed = (
  { seed, breakpoint, roundIndex, seedIndex }: IRenderSeedProps,
) => {
  const { refreshMartialArtKnockout, knockoutTeams } = useKnockoutContext();

  const [pair, setPair] = useState<ISeedPair>({
    team1_id: seed.teams[0]?.id || "",
    team1_name: seed.teams[0]?.name || "",
    team1_point_win_count: seed.teams[0]?.winCount,
    team2_id: seed.teams[1]?.id || "",
    team2_name: seed.teams[1]?.name || "",
    team2_point_win_count: seed.teams[1]?.winCount,
  }); // each team's id in pair

  const [lockPick, setLockPick] = useState(
    // seed.teams[0]?.id && seed.teams[1]?.id,
    pair.team1_point_win_count != null && pair.team2_point_win_count != null,
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
    for (const t of [pair.team1_id, pair.team2_id]) {
      if (!t) return false;
    }
    return true;
  }, [seed.teams, pair]);

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport,
  ) => {
    const pairUpdate = { id: seed.id as string, ...pair };
    tablequalifyingKnockoutPairUpdate(pairUpdate).then(
      (res) => {
        const { status } = res;
        if (status === 200) {
          return tablequalifyingKnockoutUpdate(v).then((res) => {
            const { status } = res;
            if (status === 200) {
              toast.success(N["success"]);
              setLockPick(true);
              setPair((prev) => ({ ...prev }));
              refreshMartialArtKnockout();
            }
          });
        }
      },
    ).catch((err) => {
      const { response: { data } } = err;
      toast.error(data || N["failed"]);
      console.log({ err });
    });
    // .finally(() => callback?.());
  };

  return (
    <Seed
      mobileBreakpoint={breakpoint}
      style={{ fontSize: 14 }}
    >
      <SeedItem className="seed-martial">
        <div>
          {roundIndex == 0 && !lockPick
            ? (
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
            )
            : (
              <SeedTeam className="team">
                {pair.team1_name
                  ? `${pair.team1_name}: ${pair.team1_point_win_count || ""}`
                  : "Chưa có"}
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
                k="member_map_org"
                v="id"
                name="team1"
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
            )
            : (
              <SeedTeam className="team">
                {pair.team2_name
                  ? `${pair.team2_name}: ${pair.team2_point_win_count || ""}`
                  : "Chưa có"}
              </SeedTeam>
            )}
        </div>
      </SeedItem>
    </Seed>
  );
};

const UnfullfilledSeed = (
  { seed, breakpoint, roundIndex, seedIndex }: IRenderSeedProps,
) => {
  const { refreshMartialArtKnockout, knockoutTeams } = useKnockoutContext();

  const [team, setTeam] = useState<ISeedTeam>({
    team1_id: seed.teams[0]?.id || "",
    team1_name: seed.teams[0]?.name || "",
    team1_point_win_count: seed.teams[0]?.winCount,
  }); // each team's id in pair

  const [lockPick, setLockPick] = useState(
    // seed.teams[0]?.id && seed.teams[1]?.id,
    team.team1_point_win_count != null,
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
  }, [team.team1_point_win_count != null]);

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport,
  ) => {
    const pairUpdate = { id: seed.id as string, ...team };
    tablequalifyingKnockoutPairUpdate(pairUpdate).then(
      (res) => {
        const { status } = res;
        if (status === 200) {
          return tablequalifyingKnockoutUpdate(v).then((res) => {
            const { status } = res;
            if (status === 200) {
              toast.success(N["success"]);
              // setLockPick(true);
              setTeam((prev) => ({ ...prev }));
              refreshMartialArtKnockout();
            }
          });
        }
      },
    ).catch((err) => {
      const { response: { data } } = err;
      toast.error(data || N["failed"]);
      console.log({ err });
    });
    // .finally(() => callback?.());
  };

  return (
    <Seed
      mobileBreakpoint={breakpoint}
      style={{ fontSize: 14 }}
    >
      <SeedItem className="seed-martial">
        {roundIndex == 0 && !lockPick
          ? (
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
                  setTeam((prev) => ({
                    ...prev,
                    team1_id: team.id,
                    team1_name: team.member_map_org || "",
                  }));
                }
              }}
            />
          )
          : (
            <SeedTeam className="team">
              {team.team1_name
                ? `${team.team1_name}: ${team.team1_point_win_count || ""}`
                : "Chưa có"}
            </SeedTeam>
          )}
        <SeedTeam className="flex justify-center">Được vào thẳng</SeedTeam>
        <SeedTeam className="team">---</SeedTeam>
      </SeedItem>
    </Seed>
  );
};

const CustomSeed = (
  props: IRenderSeedProps,
) => {
  const { seed } = props;
  return seed?.direct
    ? <UnfullfilledSeed {...props} />
    // ? (
    //   <div style={{ border: "1px solid black", margin: "2px" }}>
    //     unfullfilled
    //   </div>
    // )
    // : (
    //   <div style={{ border: "1px solid red", margin: "2px" }}>
    //     {JSON.stringify(seed)}
    //   </div>
    // );
    : <FullSeed {...props} />;
};

const MartialArtKnockout = () => {
  const {
    rounds: fetchedRounds,
  } = useKnockoutContext();

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
              </CardHeader>
              <CardBody>
                <Bracket
                  rounds={fetchedRounds}
                  renderSeedComponent={(props) => <CustomSeed {...props} />}
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
