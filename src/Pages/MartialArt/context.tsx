import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IRoundProps } from "react-brackets";
import { useParams } from "react-router-dom";
import {
  generateMartialArtContentTree,
  getMartialArtContentTree,
} from "../../Service/martialArt";
import { TTeammember } from "../../type/teammember";
import { teammembersByContent } from "../../Service/teammember";
import { convertKnockoutsToBrackets } from "./utils";
import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";

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
  listTablequalifyingKnockout: TTablequalifyingKnockout[];
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
  listTablequalifyingKnockout: [],
  // updateMatch: () => {},
});

const KnockoutContextProvider = ({ children }: PropsWithChildren) => {
  const [sportId, setSportId] = useState("");
  const [contentId, setContentId] = useState("");

  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const { sport_id: paramSportId, content_id: paramContentId } = useParams();

  const [knockoutTeams, setKnockoutTeams] = useState<TTeammember[]>([]);
  const [listTablequalifyingKnockout, setListTablequalifyingKnockout] =
    useState<TTablequalifyingKnockout[]>([]);

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
        console.log({ fetchTablequalifyingKnockout: data, status });
        setListTablequalifyingKnockout(data);
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
            generateMartialArtContentTree(sportId, contentId)
              .then((res) => {
                const { status } = res;
                if (status === 200) {
                  console.log("Generate new ones");
                  if (refetchable) {
                    fetchTablequalifyingKnockout(
                      sportId,
                      contentId,
                      (refetchable = false)
                    );
                  }
                }
              })
              .catch((err) => console.log({ err }));
          }
        }
      });
    },
    []
  );

  const refreshMartialArtKnockout = useCallback(() => {
    // console.log({ sportId, contentId });
    if (sportId && contentId) {
      fetchTablequalifyingKnockout(sportId, contentId);
    }
  }, [sportId, contentId, fetchTablequalifyingKnockout]);

  useEffect(() => {
    refreshMartialArtKnockout();
  }, [refreshMartialArtKnockout]);

  const fetchKnockoutTeams = useCallback(
    (sportId: string, contentId: string) => {
      teammembersByContent(sportId, contentId)
        .then((res) => {
          const { data, status } = res;
          console.log({ knockoutTeams: data });
          if (status === 200) {
            setKnockoutTeams(data);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    },
    []
  );

  useEffect(() => {
    if (sportId && contentId) {
      fetchTablequalifyingKnockout(sportId, contentId);
      fetchKnockoutTeams(sportId, contentId);
    }
  }, [sportId, contentId, fetchKnockoutTeams, fetchTablequalifyingKnockout]);

  return (
    <KnockoutContext.Provider
      value={{
        listTablequalifyingKnockout,
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

export { KnockoutContextProvider, useKnockoutContext };
