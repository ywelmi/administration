// import { ICustomRoundProps, ICustomSeedProps } from "react-brackets";

import {
  DIRECT_KNOCKOUT_GRADE,
  TTablequalifyingKnockout,
} from "../../type/tablequalifyingKnockout";
import { ICustomRoundProps, ICustomSeedProps } from "../../typing/treeRound";

const compareKnockoutPair = (
  a: TTablequalifyingKnockout,
  b: TTablequalifyingKnockout
) => {
  if (a.grade === b.grade) {
    return a.indexs - b.indexs;
  } else {
    return b.grade - a.grade;
  }
};

const knockoutToSeed = (
  knockout: TTablequalifyingKnockout
): ICustomSeedProps => {
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

export const convertKnockoutsToBrackets = (
  data: TTablequalifyingKnockout[]
): ICustomRoundProps[] => {
  const sortedData = data.sort(compareKnockoutPair);
  const newRounds = sortedData.reduce<ICustomRoundProps[]>(
    (rounds: ICustomRoundProps[], knockout: TTablequalifyingKnockout) => {
      const idx = rounds.findIndex((r) => r.title === knockout.turn_name);
      const bracketSeed: ICustomSeedProps = knockoutToSeed(knockout);
      if (
        knockout.grade === DIRECT_KNOCKOUT_GRADE &&
        knockout.team2_id == null
      ) {
        bracketSeed.direct = true;
      }
      if (idx === -1) {
        const newRound = {
          title: knockout.turn_name,
          seeds: [bracketSeed],
        } as ICustomRoundProps;
        return [...rounds, newRound];
      } else {
        rounds[idx].seeds = [...rounds[idx].seeds, bracketSeed];
        return [...rounds];
      }
    },
    [] as ICustomRoundProps[]
  );

  return newRounds;
};
