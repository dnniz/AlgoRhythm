import { create } from 'zustand';

export interface AppStore {
  colorScheme: string;
  toggleColorScheme: () => void;
}

const initialState = {
  colorScheme: 'light',
};

export const useAppStore = create<AppStore>(set => ({
  ...initialState,
  toggleColorScheme: () =>
    set(state => ({
      colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
    })),
}));
