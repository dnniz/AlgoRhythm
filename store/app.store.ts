import { create } from 'zustand';
import { User } from '@/types';

interface AppState {
  checked: boolean;
  loggedIn: boolean;
  user?: User;
  colorScheme: string;
  setLoggedIn: (loggedIn: boolean) => void;
  setUser: (user: User | undefined) => void;
  reset: () => void;
  toggleColorScheme: () => void;
}

const initialState = {
  checked: false,
  loggedIn: false,
  user: undefined,
  colorScheme: 'light',
};

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  setLoggedIn: (loggedIn) => set({ checked: true, loggedIn }),
  setUser: (user) => set({ user }),
  reset: () => set(initialState),
  toggleColorScheme: () =>
    set((state) => ({
      colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
    })),
}));