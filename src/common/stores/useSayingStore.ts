import type { IPostDiaryResponse } from '@interfaces/diary';
import { LocalStorageKey } from '@libs/local-storage/localStorageKey';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ISayingStoreState {
  saying: IPostDiaryResponse;
  setSaying: (state: IPostDiaryResponse) => void;
  isOver: 'before' | 'ing' | 'after';
  setIsOver: (state: 'before' | 'ing' | 'after') => void;
}

export const useSayingStore = create(
  persist<ISayingStoreState>(
    (set) => ({
      saying: {
        friendPercentage: 0,
        saying: {
          contents: '',
          id: 0,
          isMarked: false,
          reference: '',
        },
      },

      setSaying: (state: IPostDiaryResponse) => set({ saying: state }),

      isOver: 'before',
      setIsOver: (state: 'before' | 'ing' | 'after') => set({ isOver: state }),
    }),
    {
      name: LocalStorageKey.saying,
    },
  ),
);
