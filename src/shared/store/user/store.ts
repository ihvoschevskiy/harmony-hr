import { User } from "@shared/types/user";
import SessionService from "@shared/utils/session";
import { create } from "zustand";

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  fetchUser: (fn: (path: string) => void) => Promise<void>;
};

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (payload: User) => set({ user: payload }),
  fetchUser: async (navigate) => {
    const token = SessionService.accessToken;

    if (!token) {
      navigate("/login");
      return;
    }

    // navigate("/");
  },
}));
