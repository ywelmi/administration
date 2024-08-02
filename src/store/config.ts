import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DUnitType } from "../type/enum";
import { createJSONStorage, persist } from "zustand/middleware";

export type ConfigState = {
  updateUnitType: (t: DUnitType) => void;
  uniteType: DUnitType | "";
};

export const useConfigStore = create<ConfigState>()(
  persist(
    immer((set) => ({
      weighs: [],
      uniteType: "",
      ages: [],

      updateUnitType(t) {
        set((state: ConfigState) => {
          state.uniteType = t;
        });
      },
    })),
    {
      name: "config",
    },
  ),
);
