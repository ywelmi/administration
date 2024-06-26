import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TSport } from "../type/sport";

export type SportState = {
  sports: TSport[];
  addSports: (data: TSport[]) => void;
  addSport: (data: TSport) => void;
  updateSport: (data: TSport) => void;
  deleteSport: (id: string) => void;
};

export const useSportStore = create<SportState>()(
  immer((set) => ({
    sports: [],
    addSports: (data: TSport[]) =>
      set((state: SportState) => {
        state.sports = data;
      }),
    addSport: (data: TSport) =>
      set((state: SportState) => {
        state.sports.push(data);
      }),
    updateSport: (data: TSport) =>
      set((state: SportState) => {
        const idx = state.sports.findIndex(({ id: sportId }) =>
          sportId === data.id
        );
        if (idx > -1) {
          state.sports[idx] = data;
        }
      }),
    deleteSport: (id: string) =>
      set((state: SportState) => {
        const idx = state.sports.findIndex(({ id: sportId }) => sportId === id);
        if (idx > -1) {
          state.sports.splice(idx, 1);
        }
      }),
  })),
);
