import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IRoundProps, ISeedProps } from "react-brackets";
import {
  DIRECT_KNOCKOUT_GRADE,
  TTablequalifyingKnockout,
} from "../../type/tablequalifyingKnockout";
import { useParams } from "react-router-dom";
import {
  generateMartialArtContentTree,
  genMartialArtTreeForContents,
  getMartialArtContentTree,
} from "../../Service/martialArt";
import { TTeammember } from "../../type/teammember";
import { teammembersByContent } from "../../Service/teammember";

interface IKnockoutContext {
  sportId: string;
  setSportId: (s: string) => void;
  contentId: string;
  setContentId: (s: string) => void;
  rounds: IRoundProps[];
  setRounds: (rounds: IRoundProps[]) => void;
  fetchTablequalifyingKnockout: (s: string, v: string) => void;
  refreshMartialArtKnockout: () => void;
  knockoutTeams: TTeammember[]; // which can be selected to create a new pair
  // updateMatch: (m: Partial<TTablequalifyingKnockout>) => void;
}

const KnockoutContext = createContext<IKnockoutContext>({
  sportId: "",
  setSportId: () => {},
  contentId: "",
  setContentId: () => {},
  rounds: [],
  setRounds: () => {},
  fetchTablequalifyingKnockout: () => {},
  refreshMartialArtKnockout: () => {},
  knockoutTeams: [],
  // updateMatch: () => {},
});

// export const generateKnockoutTable = (sportId: string) => {
//   genMartialArtTreeForContents(sportId).then(
//     (res) => {
//       const { data, status } = res;
//       console.log({ generateKnockoutTable: status });
//     },
//   ).catch((err) => {
//     console.log({ err });
//   });
// };

const KnockoutContextProvider = ({ children }: PropsWithChildren) => {
  const [sportId, setSportId] = useState("");
  const [contentId, setContentId] = useState("");

  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const { sport_id: paramSportId, content_id: paramContentId } = useParams();

  const [knockoutTeams, setKnockoutTeams] = useState<TTeammember[]>([]);

  // console.log({ sport_id: paramSportId, content_id: paramContentId });

  useEffect(() => {
    if (paramSportId) {
      setSportId(paramSportId);
    }
  }, [paramSportId]);

  useEffect(() => {
    if (paramContentId) {
      setContentId(paramContentId);
    }
  }, [paramContentId]);

  const fetchTablequalifyingKnockout = useCallback(
    (sportId: string, contentId: string, refetchable = true) => {
      getMartialArtContentTree(sportId, contentId).then((res) => {
        const { status, data } = res;
        // console.log({ fetchTablequalifyingKnockout: data, status });
        if (status === 200) {
          if (data && data?.length) {
            const newRounds = convertKnockoutsToBrackets(data);
            if (newRounds?.length) {
              console.log({ newRounds });
              // newRounds[0].seeds.push(newRounds[0].seeds[0]);
              setRounds(newRounds);
            }
          } else {
            setRounds([]);
            console.log("MartialArt got no rounds");
            generateMartialArtContentTree(sportId, contentId).then((res) => {
              const { data, status } = res;
              if (status === 200) {
                console.log("Generate new ones");
                if (refetchable) {
                  fetchTablequalifyingKnockout(
                    sportId,
                    contentId,
                    refetchable = false,
                  );
                }
              }
            }).catch((err) => console.log({ err }));
          }
        }
      });
    },
    [],
  );

  const refreshMartialArtKnockout = useCallback(() => {
    // console.log({ sportId, contentId });
    if (sportId && contentId) {
      fetchTablequalifyingKnockout(sportId, contentId);
    }
  }, [sportId, contentId]);

  useEffect(() => {
    refreshMartialArtKnockout();
  }, [refreshMartialArtKnockout]);

  const fetchKnockoutTeams = useCallback(
    (sportId: string, contentId: string) => {
      teammembersByContent(sportId, contentId).then((res) => {
        const { data, status } = res;
        console.log({ knockoutTeams: data });
        if (status === 200) {
          setKnockoutTeams(data);
        }
      }).catch((err) => {
        console.log({ err });
      });
    },
    [],
  );

  useEffect(() => {
    if (sportId && contentId) {
      fetchTablequalifyingKnockout(sportId, contentId);
      fetchKnockoutTeams(sportId, contentId);
    }
  }, [sportId, contentId]);

  return (
    <KnockoutContext.Provider
      value={{
        knockoutTeams,
        sportId,
        contentId,
        setSportId,
        setContentId,
        rounds,
        setRounds,
        fetchTablequalifyingKnockout,
        refreshMartialArtKnockout,
      }}
    >
      {children}
    </KnockoutContext.Provider>
  );
};

const useKnockoutContext = () => {
  return { ...useContext(KnockoutContext) };
};

const compareKnockoutPair = (
  a: TTablequalifyingKnockout,
  b: TTablequalifyingKnockout,
) => {
  if (a.grade === b.grade) {
    return a.indexs - b.indexs;
  } else {
    return b.grade - a.grade;
  }
};

const knockoutToSeed = (knockout: TTablequalifyingKnockout): ISeedProps => {
  return {
    id: knockout.id,
    teams: [
      {
        id: knockout.team1_id,
        name: knockout.member1_name,
        winCount: knockout.team1_point_win_count,
      },
      {
        id: knockout.team2_id,
        name: knockout.member2_name,
        winCount: knockout.team2_point_win_count,
      },
    ],
  };
};

const convertKnockoutsToBrackets = (
  data: TTablequalifyingKnockout[],
): IRoundProps[] => {
  const sortedData = data.sort(compareKnockoutPair);
  const directKnockouts: TTablequalifyingKnockout[] = [];
  const normalKnockouts: TTablequalifyingKnockout[] = [];
  sortedData.forEach((d) => {
    if (d.grade === DIRECT_KNOCKOUT_GRADE) {
      directKnockouts.push(d);
    } else {
      normalKnockouts.push(d);
    }
  });
  // console.log({ normalKnockouts, directKnockouts });
  const newRounds = normalKnockouts.reduce<IRoundProps[]>(
    (
      rounds: IRoundProps[],
      knockout: TTablequalifyingKnockout,
    ) => {
      const idx = rounds.findIndex((r) => r.title === knockout.turn_name);
      const bracketSeed: ISeedProps = knockoutToSeed(knockout);
      // console.log({ rounds, idx, bracketSeed, knockout });
      if (idx === -1) {
        const newRound = {
          title: knockout.turn_name,
          seeds: [
            bracketSeed,
          ],
        } as IRoundProps;
        return [...rounds, newRound];
      } else {
        rounds[idx].seeds = [...rounds[idx].seeds, bracketSeed];
        return [...rounds];
      }
    },
    [] as IRoundProps[],
  );
  // console.log({ newRounds, directKnockouts });

  // Có đội vào trực tiếp ko cần đấu
  if (directKnockouts?.length) {
    if (newRounds.length > 1) {
      newRounds[0].hasDirect = true;
      directKnockouts.forEach((knockout) => {
        const bracketSeed = knockoutToSeed(knockout);
        bracketSeed.direct = true;
        newRounds[0].seeds = [...newRounds[0].seeds, bracketSeed];
      });
    }
  }

  return newRounds;
};

export {
  convertKnockoutsToBrackets,
  KnockoutContextProvider,
  useKnockoutContext,
};
