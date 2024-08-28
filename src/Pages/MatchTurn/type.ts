import { ColumnDef } from "@tanstack/react-table";
import { PropsWithChildren } from "react";
import {
  martialArtTurnWithSetGet,
  martialArtTurnWithSetUpdate,
} from "../../Service/martialArt";
import {
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnSetGet,
  knockoutMatchTurnSetUpdate,
  knockoutMatchTurnUpdate,
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TMatchTurnResult, TMatchTurnWithSet } from "../../type/matchTurn";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";

export interface ITurnSetQuery {
  matchTurnSetsUpdate:
    | typeof knockoutMatchTurnSetUpdate
    | typeof qualifyingMatchTurnSetUpdate
    | typeof martialArtTurnWithSetUpdate;
  matchTurnSetsGet:
    | typeof knockoutMatchTurnSetGet
    | typeof qualifyingMatchTurnSetGet
    | typeof martialArtTurnWithSetGet;
}

export interface ITurnSetContext extends ITurnSetQuery {
  matchTurnWithSets: TMatchTurnWithSet[];
  insertRowSet: (rid: string) => void;
  cols: ColumnDef<TMatchTurnWithSet>[];
}

export interface ITurnSetProvider extends ITurnSetQuery, PropsWithChildren {
  tableType: ETable;
  matchTurns: TMatchTurnResult[];
}

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

  fetchMatchTurns: () => Promise<TMatchTurnResult[]>;
  updateMatchTurn: (m: TMatchTurnResult) => void;
  createMatchTurn: (m: TMatchTurnResult) => void;
  delMatchTurn: (id: string) => void;
}
