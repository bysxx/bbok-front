import type { IPostDiaryResponse } from '@interfaces/diary';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const StorageKey = 'saying';

interface ISayingStoreState {
  saying: IPostDiaryResponse;
  setSaying: (state: IPostDiaryResponse) => void;
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
    }),
    {
      name: StorageKey,
    },
  ),
);
