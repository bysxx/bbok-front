import { useEffect } from 'react';

export const useBeforeLeave = (onBefore: () => void) => {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { clientY } = e;
      if (clientY <= 0) {
        onBefore();
      }
    };

    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [onBefore]);
};
