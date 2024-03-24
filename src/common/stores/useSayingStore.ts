import type { IPostDiaryResponse } from '@interfaces/diary';
import { create } from 'zustand';

interface ISayingStoreState {
  saying: IPostDiaryResponse;
  setSaying: (state: IPostDiaryResponse) => void;
}

export const useSayingStore = create<ISayingStoreState>((set) => ({
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
}));
