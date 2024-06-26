import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TTeam } from "../type/team";

export type TeamState = {
  teams: TTeam[];
  addTeams: (data: TTeam[]) => void;
  addTeam: (data: TTeam) => void;
  updateTeam: (data: TTeam) => void;
  deleteTeam: (id: string) => void;
};

export const useTeamStore = create<TeamState>()(
  immer((set) => ({
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
        const idx = state.teams.findIndex(({ id: teamId }) =>
          teamId === data.id
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
  })),
);
