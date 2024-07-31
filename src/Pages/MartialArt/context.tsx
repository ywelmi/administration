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
import { useParams } from "react-router-dom";
import { getMartialArtTree } from "../../Service/martialArt";
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
    (sportId: string, contentId: string) => {
      getMartialArtTree(sportId, contentId).then((res) => {
        const { data, status } = res;
        console.log({ fetchTablequalifyingKnockout: data });
        if (status === 200) {
          if (data?.length) {
            const newRounds = convertKnockoutsToBrackets(data);
            if (newRounds?.length) {
              console.log({ newRounds });
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
            name: bracket.member1_name,
            winCount: bracket.team1_point_win_count,
          },
          {
            id: bracket.team2_id,
            name: bracket.member2_name,
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

export {
  convertKnockoutsToBrackets,
  KnockoutContextProvider,
  useKnockoutContext,
};
