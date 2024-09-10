import { PropsWithChildren } from "react";
import {
  martialArtTurnWithSetGet,
  martialArtTurnWithSetUpdate,
} from "../../Service/martialArt";
import {
  knockoutMatchTurnSetGet,
  knockoutMatchTurnSetUpdate,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TurnSetProvider } from "./turnSetContext";
import { ITurnSetProvider } from "./type";

const MatchTurnSetWrapper = (
  props: Pick<ITurnSetProvider, "tableType" | "matchTurn" | "match"> &
    PropsWithChildren
) => {
  const { tableType, children } = props;
  const matchTurnSetsUpdate =
    tableType === ETable.MARTIALART
      ? martialArtTurnWithSetUpdate
      : tableType === ETable.KNOCKOUT
      ? knockoutMatchTurnSetUpdate
      : qualifyingMatchTurnSetUpdate;
  const matchTurnSetsGet =
    tableType === ETable.MARTIALART
      ? martialArtTurnWithSetGet
      : tableType === ETable.KNOCKOUT
      ? knockoutMatchTurnSetGet
      : qualifyingMatchTurnSetGet;

  // console.log({ MatchTurnSetWrapperTableType: tableType, matchTurnSetsUpdate });
  return (
    <TurnSetProvider
      {...props}
      matchTurnSetsUpdate={matchTurnSetsUpdate}
      matchTurnSetsGet={matchTurnSetsGet}
    >
      {/* <MatchTurnSetsForm /> */}
      {children}
    </TurnSetProvider>
  );
};

export { MatchTurnSetWrapper };
