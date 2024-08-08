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

const fakeData = [
  {
    "id": "52968481-c2dc-4adf-a810-02d6296ac7c9",
    "turn_id": "5eada7fb-fadc-476f-aa39-b00bee224c57",
    "team1_id": "42bf0645-32df-4e30-8fc4-a5e30c5fd995",
    "team2_id": null,
    "indexs": null,
    "result": null,
    "result_detail": null,
    "win_team_id": "42bf0645-32df-4e30-8fc4-a5e30c5fd995",
    "status": 1,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "41e0f9c7-cb86-4054-9b2f-ff8b64cf1731",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": null,
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "TCCNQP-Nguyễn Văn E",
    "member2_name": "-",
    "turn_name": "Vòng phụ",
    "grade": 99,
  },
  {
    "id": "e33e5d34-d6db-4c81-843f-422491465fcf",
    "turn_id": "5eada7fb-fadc-476f-aa39-b00bee224c57",
    "team1_id": "130851d7-2b92-47ae-972c-0f0c5b513e90",
    "team2_id": "dfcc3514-887b-466a-a7c6-2e23891c972d",
    "indexs": null,
    "result": null,
    "result_detail": null,
    "win_team_id": null,
    "status": 0,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "41e0f9c7-cb86-4054-9b2f-ff8b64cf1731",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": null,
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "BC T-TG-Nguyễn Văn H",
    "member2_name": "QÐ1-Nguyễn Văn A",
    "turn_name": "Vòng phụ",
    "grade": 3,
  },
  {
    "id": "74c2c747-debb-41a1-bd88-6b614169f6a5",
    "turn_id": "5eada7fb-fadc-476f-aa39-b00bee224c57",
    "team1_id": "a5a431c1-9f9b-4391-9e3b-6b5586c7c6e3",
    "team2_id": "a738c360-25c8-42cc-bdc4-bbb461991434",
    "indexs": null,
    "result": null,
    "result_detail": null,
    "win_team_id": null,
    "status": 0,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "9a197534-6165-488a-b726-bffb0fcdf364",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": null,
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "BTL BÐ BP-Nguyễn Văn F",
    "member2_name": "QÐ3-Nguyễn Văn G",
    "turn_name": "Vòng phụ",
    "grade": 3,
  },
  {
    "id": "a97884b6-196e-47ba-bc90-ab4736dc551e",
    "turn_id": "5eada7fb-fadc-476f-aa39-b00bee224c57",
    "team1_id": "4bc230f6-4188-4a44-8396-d97cc6903571",
    "team2_id": null,
    "indexs": null,
    "result": null,
    "result_detail": null,
    "win_team_id": "4bc230f6-4188-4a44-8396-d97cc6903571",
    "status": 1,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "9a197534-6165-488a-b726-bffb0fcdf364",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": null,
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "QÐ1-Nguyễn Văn D",
    "member2_name": "-",
    "turn_name": "Vòng phụ",
    "grade": 99,
  },
  {
    "id": "41e0f9c7-cb86-4054-9b2f-ff8b64cf1731",
    "turn_id": "01271ef1-348d-4a68-953f-41deded1e950",
    "team1_id": null,
    "team2_id": null,
    "indexs": 1,
    "result": null,
    "result_detail": null,
    "win_team_id": null,
    "status": 0,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "8447c41e-aff9-41d7-9449-c178a4082644",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": "017358a8-fe81-45f6-914b-b8507987a343",
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "-",
    "member2_name": "-",
    "turn_name": "Bán kết (Semi-finals)",
    "grade": 2,
  },
  {
    "id": "9a197534-6165-488a-b726-bffb0fcdf364",
    "turn_id": "01271ef1-348d-4a68-953f-41deded1e950",
    "team1_id": null,
    "team2_id": null,
    "indexs": 2,
    "result": null,
    "result_detail": null,
    "win_team_id": null,
    "status": 0,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": "8447c41e-aff9-41d7-9449-c178a4082644",
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": "017358a8-fe81-45f6-914b-b8507987a343",
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "-",
    "member2_name": "-",
    "turn_name": "Bán kết (Semi-finals)",
    "grade": 2,
  },
  {
    "id": "8447c41e-aff9-41d7-9449-c178a4082644",
    "turn_id": "ab5a1f78-9d67-48a3-b8e8-d5535404e599",
    "team1_id": null,
    "team2_id": null,
    "indexs": 1,
    "result": null,
    "result_detail": null,
    "win_team_id": null,
    "status": 0,
    "reason": null,
    "team1_match_id": null,
    "team2_match_id": null,
    "win_match_to_id": null,
    "win_match_to_index": null,
    "lose_match_to_id": null,
    "lose_match_to_index": null,
    "name": null,
    "created": null,
    "modified": null,
    "recorded": null,
    "team1_set_win_count": null,
    "team1_set_lose_count": null,
    "team1_point_win_count": null,
    "team1_point_lose_count": null,
    "team2_set_win_count": null,
    "team2_set_lose_count": null,
    "team2_point_win_count": null,
    "team2_point_lose_count": null,
    "sport_id": "017358a8-fe81-45f6-914b-b8507987a343",
    "match_day": null,
    "match_hour": null,
    "match_location": null,
    "match_time": null,
    "member1_name": "-",
    "member2_name": "-",
    "turn_name": "Chung kết (Final)",
    "grade": 1,
  },
];

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
        const { status } = res;

        const data = fakeData;
        console.log({ fetchTablequalifyingKnockout: data, status });
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
