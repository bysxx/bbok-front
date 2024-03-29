import { LocalStorageKey } from '@libs/local-storage/localStorageKey';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICheckVisitedStoreState {
  isCheckFriend: boolean;
  isCheckDiary: boolean;
  setIsCheckFriend: (state: boolean) => void;
  setIsCheckDiary: (state: boolean) => void;
  checkVisited: boolean;
  setCheckVisited: (state: boolean) => void;
}

export const useCheckVisitedStore = create(
  persist<ICheckVisitedStoreState>(
    (set) => ({
      isCheckFriend: false,
      isCheckDiary: true,
      checkVisited: false,
      setIsCheckFriend: (state: boolean) => {
        set({ isCheckFriend: state });
      },
      setIsCheckDiary: (state: boolean) => {
        set({ isCheckDiary: state });
      },
      setCheckVisited: (state: boolean) => {
        set({ checkVisited: state });
      },
    }),
    {
      name: LocalStorageKey.checkVisited,
    },
  ),
);
