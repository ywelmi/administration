import { ColumnDef } from "@tanstack/react-table";
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
import { TMartialArtSet, TMartialArtTurnWithSet } from "../../type/martialArt";
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
  sets: TMartialArtSet[];
  setSets: (sets: TMartialArtSet[]) => void;
  matchTurn: TMartialArtTurnWithSet;
  // setMatchTurn: (s: TMartialArtTurnWithSet) => void;
  match?: TTablequalifyingMatch;
  insertNewSet: () => void;
  cols: ColumnDef<TMartialArtSet>[];
  isEditing: boolean;
  finishEdit: () => void;
  startEdit: () => void;
  removeSet: (idx: number) => void;
  updateSet: (idx: number, set: TMartialArtSet) => void;
  tableType?: ETable;
}

export interface ITurnSetProvider extends ITurnSetQuery, PropsWithChildren {
  tableType: ETable;
  matchTurn: TMartialArtTurnWithSet;
  match: TTablequalifyingMatch;
}
