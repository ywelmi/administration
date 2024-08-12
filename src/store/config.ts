import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DUnitType } from "../type/enum";
import { persist } from "zustand/middleware";
import { TeamState } from "./team";

export type ConfigState = {
  updateUnitType: (t: DUnitType) => void;
  unitType: DUnitType | "";
  teamSelector: () => (s: TeamState) => TeamState;
};

export const useConfigStore = create<ConfigState>()(
  persist(
    immer((set, get) => ({
      weighs: [],
      unitType: "",
      ages: [],

      updateUnitType(t) {
        set((state: ConfigState) => {
          state.unitType = t;
        });
      },
      teamSelector:
        () =>
        (state: TeamState): TeamState => {
          // const { unitType } = useConfigStore.getState();
          const { unitType } = get();

          switch (unitType) {
            case "DQTV":
              return {
                ...state,
                teams: state.teams.filter((t) => t.has_militia),
              };
            case "LLTT":
              return { ...state, teams: state.teams.filter((t) => t.has_army) };

            default:
              return state;
          }
        },
    })),
    {
      name: "config",
    }
  )
);
