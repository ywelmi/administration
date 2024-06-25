import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TUser } from "../type/user";

export type UserState = {
  users: TUser[];
  addUsers: (data: TUser[]) => void;
  addUser: (data: TUser) => void;
  updateUser: (data: TUser) => void;
  deleteUser: (id: string) => void;
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
        const idx = state.users.findIndex(({ id: userId }) =>
          userId === data.id
        );
        if (idx > -1) {
          state.users[idx] = data;
        }
      }),
    deleteUser: (id: string) =>
      set((state: UserState) => {
        const idx = state.users.findIndex(({ id: userId }) => userId === id);
        if (idx > -1) {
          state.users.splice(idx, 1);
        }
      }),
  })),
);
