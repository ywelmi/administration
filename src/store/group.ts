import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TGroup } from "../type/group";

export type GroupState = {
  groups: TGroup[];
  addGroups: (data: TGroup[]) => void;
  addGroup: (data: TGroup) => void;
  updateGroup: (data: TGroup) => void;
  deleteGroup: (id: string) => void;
};

export const useGroupStore = create<GroupState>()(
  immer((set) => ({
    groups: [],
    addGroups: (data: TGroup[]) =>
      set((state: GroupState) => {
        state.groups = data;
      }),
    addGroup: (data: TGroup) =>
      set((state: GroupState) => {
        state.groups.push(data);
      }),
    updateGroup: (data: TGroup) =>
      set((state: GroupState) => {
        const idx = state.groups.findIndex(({ id: groupId }) =>
          groupId === data.id
        );
        if (idx > -1) {
          state.groups[idx] = data;
        }
      }),
    deleteGroup: (id: string) =>
      set((state: GroupState) => {
        const idx = state.groups.findIndex(({ id: groupId }) => groupId === id);
        if (idx > -1) {
          state.groups.splice(idx, 1);
        }
      }),
  })),
);
