import type { ILoginToken } from '@interfaces/auth';
import { create } from 'zustand';

interface State {
  userData: ILoginToken | null;
  isLogin: () => boolean;
  setUserData: (userData: ILoginToken) => void;
}

export const useUserStore = create<State>((set, get) => ({
  userData: null,
  isLogin: () => get().userData !== null,
  setUserData: (userData: ILoginToken) => {
    set((_) => ({
      userData,
    }));
  },
}));
