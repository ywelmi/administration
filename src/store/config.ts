import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DUnitType } from "../type/enum";
import { sportFilterByUnitType } from "./_utils";
import { SportState } from "./sport";
import { TeamState } from "./team";

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
          const { unitType } = get();

          if (unitType) {
            const filteredSports = sportFilterByUnitType(
              state.sports,
              unitType
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
