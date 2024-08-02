import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DUnitType } from "../type/enum";
import { persist } from "zustand/middleware";

export type ConfigState = {
  updateUnitType: (t: DUnitType) => void;
  unitType: DUnitType | "";
};

export const useConfigStore = create<ConfigState>()(
  persist(
    immer((set) => ({
      weighs: [],
      unitType: "",
      ages: [],

      updateUnitType(t) {
        set((state: ConfigState) => {
          state.unitType = t;
        });
      },
    })),
    {
      name: "config",
    }
  )
);
