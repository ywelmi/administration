import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TAge, TWeigh } from "../type/martialArt";

export type CategoryState = {
  weighs: TWeigh[];
  ages: TAge[];
  addWeighs: (v: TAge[]) => void;
  addAges: (v: TAge[]) => void;
};

export const useCategoryStore = create<CategoryState>()(
  immer((set) => ({
    weighs: [],
    ages: [],

    addWeighs: (data: TWeigh[]) =>
      set((state: CategoryState) => {
        state.weighs = data;
      }),
    addAges: (data: TAge[]) =>
      set((state: CategoryState) => {
        state.ages = data;
      }),
  })),
);
