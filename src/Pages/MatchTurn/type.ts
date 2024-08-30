import {
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnUpdate,
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TMatchTurnResult } from "../../type/matchTurn";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";

export interface IMatchTurnQuery {
  matchTurnCreate:
    | typeof qualifyingMatchTurnCreate
    | typeof knockoutMatchTurnCreate;
  matchTurnsGet: () => ReturnType<typeof qualifyingMatchTurnsGet>;
  matchTurnUpdate:
    | typeof qualifyingMatchTurnUpdate
    | typeof knockoutMatchTurnUpdate;
  matchTurnDel:
    | typeof qualifyingMatchTurnDelete
    | typeof knockoutMatchTurnDelete;
}
export interface IMatchTurnContext extends IMatchTurnQuery {
  matchId: string;
  setMatchId: (id: string) => void;
  match: TTablequalifyingMatch;
  matchTurns: TMatchTurnResult[];
  tableType: ETable;

  fetchMatchTurns: () => Promise<TMatchTurnResult[]>;
  updateMatchTurn: (m: TMatchTurnResult) => void;
  createMatchTurn: (m: TMatchTurnResult) => void;
  delMatchTurn: (id: string) => void;
}
