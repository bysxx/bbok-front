import type { ReactNode } from 'react';

interface BottomSheetProps {
  children: ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-0 flex h-40 w-full animate-[bottom-sheet-up_200ms_ease-in-out] flex-col bg-white pb-[34px] pl-9 pr-3 pt-5 shadow-modal sm:w-[28rem]">
        {children}
      </div>
    </div>
  );
};
export default BottomSheet;
