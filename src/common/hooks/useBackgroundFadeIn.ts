import { useEffect, useRef } from 'react';

export const useBackgroundFadeIn = (duration: number = 2, opacity = '0.1') => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out`;
      current.style.opacity = opacity;
      setTimeout(() => {
        current.style.opacity = '1';
      }, duration);
    }
  }, [duration]);

  return { ref: element };
};
