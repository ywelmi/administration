import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICustomRoundProps } from "../../typing/treeRound";
import { tablequalifyingKnockoutsGet } from "../../Service/tablequalifyingKnockout";
import { useParams } from "react-router-dom";
import { TSport } from "../../type/sport";
import { useSportStore } from "../../store/sport";
import { TTeam } from "../../type/team";
import { teamsBySportGet } from "../../Service/team";
import { convertKnockoutsToBrackets } from "./utils";
import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";

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
  const { sports: storeSports } = useSportStore();

  const [knockoutSports, setKnockoutSports] = useState<TSport[]>([]);
  const [knockoutTeams, setKnockoutTeams] = useState<TTeam[]>([]);
  const [listTablequalifyingKnockout, setListTablequalifyingKnockout] =
    useState<TTablequalifyingKnockout[]>([]);

  useEffect(() => {
    setKnockoutSports(storeSports.filter((s) => s.point_unit !== 1));
  }, [storeSports]);

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
  }, [sportId, fetchTablequalifyingKnockout]);
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
  }, [sportId, fetchTablequalifyingKnockout, fetchKnockoutTeams]);

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
