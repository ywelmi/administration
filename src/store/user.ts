import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TUser } from "../type/user";

export type UserState = {
  users: TUser[];
  addUsers: (data: TUser[]) => void;
  addUser: (data: TUser) => void;
  updateUser: (data: TUser) => void;
  deleteUser: (data: TUser) => void;
};

export const useUserStore = create<UserState>()(
  immer((set) => ({
    users: [],
    addUsers: (data: TUser[]) =>
      set((state: UserState) => {
        state.users = data;
      }),
    addUser: (data: TUser) =>
      set((state: UserState) => {
        state.users.push(data);
      }),
    updateUser: (data: TUser) =>
      set((state: UserState) => {
        const idx = state.users.findIndex(({ username }) =>
          username === data.username
        );
        if (idx > -1) {
          state.users[idx] = data;
        }
      }),
    deleteUser: (data: TUser) =>
      set((state: UserState) => {
        const idx = state.users.findIndex(({ username }) =>
          username === data.username
        );
        if (idx > -1) {
          state.users.splice(idx, 1);
        }
      }),
  })),
);
