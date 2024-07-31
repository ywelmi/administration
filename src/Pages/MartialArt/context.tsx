import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IRoundProps, ISeedProps } from "react-brackets";
import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";
import { tablequalifyingKnockoutsGet } from "../../Service/tablequalifyingKnockout";
import { useParams } from "react-router-dom";
import { TSport } from "../../type/sport";
import { useSportStore } from "../../store/sport";
import { TTeam } from "../../type/team";
import { teamsBySportGet } from "../../Service/team";
import { getMartialArtTree } from "../../Service/martialArt";

interface IKnockoutContext {
  sportId: string;
  setSportId: (s: string) => void;
  rounds: IRoundProps[];
  setRounds: (rounds: IRoundProps[]) => void;
  fetchTablequalifyingKnockout: (s: string, v: string) => void;
  knockoutTeams: TTeam[]; // which can be selected to create a new pair
  // updateMatch: (m: Partial<TTablequalifyingKnockout>) => void;
}

const KnockoutContext = createContext<IKnockoutContext>({
  sportId: "",
  setSportId: () => {},
  rounds: [],
  setRounds: () => {},
  fetchTablequalifyingKnockout: () => {},
  knockoutTeams: [],
  // updateMatch: () => {},
});

const KnockoutContextProvider = ({ children }: PropsWithChildren) => {
  const [sportId, setSportId] = useState("");

  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const { sport_id: paramSportId } = useParams();

  const [knockoutTeams, setKnockoutTeams] = useState<TTeam[]>([]);

  useEffect(() => {
    if (paramSportId) {
      setSportId(paramSportId);
    }
  }, [paramSportId]);

  const fetchTablequalifyingKnockout = useCallback(
    (sportId: string, contentId: string) => {
      getMartialArtTree(sportId, contentId).then((res) => {
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
          }
        }
      }).catch((err) => console.log({ err }));
    },
    [],
  );

  // const fetchKnockoutTeams = useCallback((sportId: string) => {
  //   teamsBySportGet(sportId).then((res) => {
  //     const { data: { data }, status } = res;
  //     if (status === 200) {
  //       setKnockoutTeams(data);
  //     }
  //   }).catch((err) => {
  //     console.log({ err });
  //   });
  // }, []);

  // useEffect(() => {
  //   if (sportId) {
  //     fetchTablequalifyingKnockout(sportId);
  //     fetchKnockoutTeams(sportId);
  //   }
  // }, [sportId]);

  // const updateMatch = () => {};

  return (
    <KnockoutContext.Provider
      value={{
        // updateMatch,
        knockoutTeams,
        sportId,
        setSportId,
        rounds,
        setRounds,
        fetchTablequalifyingKnockout,
      }}
    >
      {children}
    </KnockoutContext.Provider>
  );
};

const useKnockoutContext = () => {
  return { ...useContext(KnockoutContext) };
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
            id: bracket.team1_id,
            name: bracket.team1_name,
            winCount: bracket.team1_point_win_count,
          },
          {
            id: bracket.team2_id,
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

// const fakeRounds: IRoundProps[] = [
//   {
//     title: "Round one",
//     seeds: [
//       {
//         id: 1,
//         date: new Date().toDateString(),
//         teams: [{ name: "Team A" }, { name: "Team B" }],
//       },
//       {
//         id: 2,
//         date: new Date().toDateString(),
//         teams: [{ name: "Team C" }, { name: "Team D" }],
//       },
//     ],
//   },
//   {
//     title: "Round two",
//     seeds: [
//       {
//         id: 3,
//         date: new Date().toDateString(),
//         teams: [{ name: "Team A" }, { name: "Team C" }],
//       },
//     ],
//   },
// ];

export {
  convertKnockoutsToBrackets,
  KnockoutContextProvider,
  useKnockoutContext,
};
