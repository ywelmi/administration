import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TTeammember } from "../type/teammember";

export type TeammemberState = {
  teammembers: TTeammember[];
  addTeammembers: (data: TTeammember[]) => void;
  addTeammember: (data: TTeammember) => void;
  updateTeammember: (data: TTeammember) => void;
  deleteTeammember: (id: string) => void;
};

export const useTeammemberStore = create<TeammemberState>()(
  immer((set) => ({
    teammembers: [],
    addTeammembers: (data: TTeammember[]) =>
      set((state: TeammemberState) => {
        state.teammembers = data;
      }),
    addTeammember: (data: TTeammember) =>
      set((state: TeammemberState) => {
        state.teammembers.push(data);
      }),
    updateTeammember: (data: TTeammember) =>
      set((state: TeammemberState) => {
        const idx = state.teammembers.findIndex(({ id: teammemberId }) =>
          teammemberId === data.id
        );
        if (idx > -1) {
          state.teammembers[idx] = data;
        }
      }),
    deleteTeammember: (id: string) =>
      set((state: TeammemberState) => {
        const idx = state.teammembers.findIndex(({ id: teammemberId }) =>
          teammemberId === id
        );
        if (idx > -1) {
          state.teammembers.splice(idx, 1);
        }
      }),
  })),
);
