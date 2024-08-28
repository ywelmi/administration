import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TMatchTurn } from "../type/matchTurn";

export type MatchTurnState = {
  matchTurns: TMatchTurn[];
  addMatchTurns: (data: TMatchTurn[]) => void;
  addMatchTurn: (data: TMatchTurn) => void;
  updateMatchTurn: (data: TMatchTurn) => void;
  deleteMatchTurn: (id: string) => void;

  counter: number;
  increaseCounter: () => void;
};

export const useMatchTurnStore = create<MatchTurnState>()(
  immer((set) => ({
    counter: 0,
    matchTurns: [],
    addMatchTurns: (data: TMatchTurn[]) =>
      set((state: MatchTurnState) => {
        state.matchTurns = data;
      }),
    addMatchTurn: (data: TMatchTurn) =>
      set((state: MatchTurnState) => {
        state.matchTurns.push(data);
      }),
    updateMatchTurn: (data: TMatchTurn) =>
      set((state: MatchTurnState) => {
        const idx = state.matchTurns.findIndex(
          ({ id: matchTurnId }) => matchTurnId === data.id
        );
        if (idx > -1) {
          state.matchTurns[idx] = data;
        }
      }),
    deleteMatchTurn: (id: string) =>
      set((state: MatchTurnState) => {
        const idx = state.matchTurns.findIndex(
          ({ id: matchTurnId }) => matchTurnId === id
        );
        if (idx > -1) {
          state.matchTurns.splice(idx, 1);
        }
      }),
    increaseCounter: () =>
      set((state: MatchTurnState) => {
        state.counter++;
      }),
  }))
);
