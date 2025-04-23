import { create } from 'zustand';
import { User } from '@/types';

export interface UserState {
  checked: boolean;
  loggedIn: boolean;
  user?: User;
  setLoggedIn: (loggedIn: boolean) => void;
  setUser: (user: User | undefined) => void;
  reset: () => void;
}

const initialUserState = {
  checked: false,
  loggedIn: false,
  user: undefined,
};

export const useUserStore = create<UserState>((set) => ({
  ...initialUserState,
  setLoggedIn: (loggedIn) => set({ checked: true, loggedIn }),
  setUser: (user) => set({ user }),
  reset: () => set(initialUserState),
}));