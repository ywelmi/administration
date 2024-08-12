import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { tablequalifyingKnockoutsGet } from "../../Service/tablequalifyingKnockout";
import { teamsBySportGet } from "../../Service/team";
import { useConfigStore } from "../../store/config";
import { useSportStore } from "../../store/sport";
import { TSport } from "../../type/sport";
import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";
import { TTeam } from "../../type/team";
import { ICustomRoundProps } from "../../typing/treeRound";
import { convertKnockoutsToBrackets } from "./utils";

interface IKnockoutContext {
  sportId: string;
  setSportId: (s: string) => void;
  rounds: ICustomRoundProps[];
  setRounds: (rounds: ICustomRoundProps[]) => void;
  fetchTablequalifyingKnockout: (s: string) => void;
  listTablequalifyingKnockout: TTablequalifyingKnockout[];
  knockoutSports: TSport[];
  refreshKnockout: () => void;
  knockoutTeams: TTeam[]; // which can be selected to create a new pair
  // updateMatch: (m: Partial<TTablequalifyingKnockout>) => void;
}

const KnockoutContext = createContext<IKnockoutContext>({
  sportId: "",
  setSportId: () => {},
  rounds: [],
  setRounds: () => {},
  fetchTablequalifyingKnockout: () => {},
  listTablequalifyingKnockout: [],
  refreshKnockout: () => {},
  knockoutSports: [],
  knockoutTeams: [],
  // updateMatch: () => {},
});

const KnockoutContextProvider = ({ children }: PropsWithChildren) => {
  const [sportId, setSportId] = useState("");

  const [rounds, setRounds] = useState<ICustomRoundProps[]>([]);
  const { sport_id: paramSportId } = useParams();
  const { sportSelector } = useConfigStore();
  const { sports: storeSports } = useSportStore(sportSelector());

  const [knockoutTeams, setKnockoutTeams] = useState<TTeam[]>([]);
  const [listTablequalifyingKnockout, setListTablequalifyingKnockout] =
    useState<TTablequalifyingKnockout[]>([]);

  const knockoutSports = storeSports.filter((s) => s.point_unit !== 1);
  // console.log({ knockoutSports });

  useEffect(() => {
    if (paramSportId) {
      setSportId(paramSportId);
    }
  }, [paramSportId]);

  const fetchTablequalifyingKnockout = useCallback((sportId: string) => {
    tablequalifyingKnockoutsGet(sportId)
      .then((res) => {
        const { data, status } = res;
        console.log({ fetchTablequalifyingKnockout: data });
        setListTablequalifyingKnockout(data);

        if (status === 200) {
          if (data?.length) {
            const newRounds = convertKnockoutsToBrackets(data);
            console.log({ newRounds });
            if (newRounds?.length) {
              setRounds(newRounds);
            }
          } else {
            console.log("update empty rounds");
            setRounds([]);
          }
        }
      })
      .catch((err) => console.log({ err }));
  }, []);

  const refreshKnockout = useCallback(() => {
    // console.log({ sportId, contentId });
    if (sportId) {
      fetchTablequalifyingKnockout(sportId);
    }
  }, [fetchTablequalifyingKnockout, sportId]);

  const fetchKnockoutTeams = useCallback((sportId: string) => {
    teamsBySportGet(sportId)
      .then((res) => {
        const {
          data: { data },
          status,
        } = res;
        if (status === 200) {
          setKnockoutTeams(data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  useEffect(() => {
    if (sportId) {
      fetchTablequalifyingKnockout(sportId);
      fetchKnockoutTeams(sportId);
    }
  }, [fetchKnockoutTeams, fetchTablequalifyingKnockout, sportId]);

  // const updateMatch = () => {};

  return (
    <KnockoutContext.Provider
      value={{
        refreshKnockout,
        // updateMatch,
        listTablequalifyingKnockout,
        knockoutTeams,
        knockoutSports,
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

export { KnockoutContextProvider, useKnockoutContext };
