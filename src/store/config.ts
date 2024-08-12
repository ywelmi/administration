import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DUnit, DUnitType } from "../type/enum";
import { persist } from "zustand/middleware";
import { TeamState } from "./team";
import { SportState } from "./sport";

export type ConfigState = {
  updateUnitType: (t: DUnitType) => void;
  unitType: DUnitType | "";
  sportSelector: () => (s: SportState) => SportState;
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
      sportSelector:
        () =>
        (state: SportState): SportState => {
          // const { unitType } = useConfigStore.getState();
          const { unitType } = get();

          if (unitType) {
            const filteredSports = state.sports.filter(
              (s) => s.for_type === DUnit[unitType]
            );
            if (filteredSports) {
              return {
                ...state,
                sports: filteredSports,
                sportsAll: state.sports,
              };
            }
          }
          return { ...state, sportsAll: state.sports };
        },
    })),
    {
      name: "config",
    }
  )
);
