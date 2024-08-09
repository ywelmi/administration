import { TTablequalifyingKnockout } from "../../type/tablequalifyingKnockout";
import { ISeedProps } from "react-brackets";
import { ICustomRoundProps } from "../../typing/treeRound";

export const convertKnockoutsToBrackets = (
  data: TTablequalifyingKnockout[]
) => {
  const newRounds = data.reduce<ICustomRoundProps[]>(
    (rounds: ICustomRoundProps[], bracket: TTablequalifyingKnockout) => {
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
          grade: bracket.grade,
          title: bracket.turn_name,
          seeds: [bracketSeed],
        } as ICustomRoundProps;
        return [...rounds, newRound];
      } else {
        rounds[idx].seeds.push(bracketSeed);
        return rounds;
      }
    },
    [] as ICustomRoundProps[]
  );
  return newRounds;
};
