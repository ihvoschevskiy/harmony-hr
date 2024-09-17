import { User } from "@shared/types/user";
import { create } from "zustand";

export type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (payload: User | null) => set({ user: payload }),
}));
