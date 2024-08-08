import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TTeam } from "../type/team";
import { baseGetParams, IGetFilters } from "../Service/_getParams";
import _ from "lodash";
import { useConfigStore } from "./config";

export type TeamState = {
  filters?: Partial<IGetFilters>;
  teams: TTeam[];
  total?: number;
  loading?: boolean;
  addTeams: (data: TTeam[]) => void;
  addTeam: (data: TTeam) => void;
  updateTeam: (data: TTeam) => void;
  deleteTeam: (id: string) => void;
  updateGetFilter: (filter: Partial<IGetFilters>) => void;
  updateTotal: (total: number) => void;
  updateLoading: (v: boolean) => void;
};

const selector = (state: TeamState): TeamState => {
  const { unitType } = useConfigStore.getState();

  switch (unitType) {
    case "DQTV":
      return { ...state, teams: state.teams.filter((t) => t.has_militia) };
    case "LLTT":
      return { ...state, teams: state.teams.filter((t) => t.has_army) };

    default:
      return state;
  }
};

const _useTeamStore = create<TeamState>()(
  immer((set) => ({
    filters: baseGetParams,
    teams: [],
    addTeams: (data: TTeam[]) =>
      set((state: TeamState) => {
        state.teams = data;
      }),
    addTeam: (data: TTeam) =>
      set((state: TeamState) => {
        state.teams.push(data);
      }),
    updateTeam: (data: TTeam) =>
      set((state: TeamState) => {
        const idx = state.teams.findIndex(
          ({ id: teamId }) => teamId === data.id,
        );
        if (idx > -1) {
          state.teams[idx] = data;
        }
      }),
    deleteTeam: (id: string) =>
      set((state: TeamState) => {
        const idx = state.teams.findIndex(({ id: teamId }) => teamId === id);
        if (idx > -1) {
          state.teams.splice(idx, 1);
        }
      }),
    updateGetFilter: (filter: Partial<IGetFilters>) => {
      set((state: TeamState) => {
        const newFilter = { ...state.filters, ...filter };
        if (_.isEqual(state.filters, newFilter)) return;
        state.filters = newFilter;
      });
    },
    updateTotal: (total: number) => {
      set((state: TeamState) => {
        state.total = total;
      });
    },

    updateLoading(v: boolean) {
      set((state: TeamState) => {
        state.loading = v;
      });
    },
  })),
);

export const useTeamStore = () => _useTeamStore(selector);
