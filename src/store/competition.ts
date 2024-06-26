import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TCompetition } from "../type/competition";

export type CompetitionState = {
  competitions: TCompetition[];
  addCompetitions: (data: TCompetition[]) => void;
  addCompetition: (data: TCompetition) => void;
  updateCompetition: (data: TCompetition) => void;
  deleteCompetition: (id: string) => void;
};

export const useCompetitionStore = create<CompetitionState>()(
  immer((set) => ({
    competitions: [],
    addCompetitions: (data: TCompetition[]) =>
      set((state: CompetitionState) => {
        state.competitions = data;
      }),
    addCompetition: (data: TCompetition) =>
      set((state: CompetitionState) => {
        state.competitions.push(data);
      }),
    updateCompetition: (data: TCompetition) =>
      set((state: CompetitionState) => {
        const idx = state.competitions.findIndex(({ id: competitionId }) =>
          competitionId === data.id
        );
        if (idx > -1) {
          state.competitions[idx] = data;
        }
      }),
    deleteCompetition: (id: string) =>
      set((state: CompetitionState) => {
        const idx = state.competitions.findIndex(({ id: competitionId }) =>
          competitionId === id
        );
        if (idx > -1) {
          state.competitions.splice(idx, 1);
        }
      }),
  })),
);
