import { useState } from 'react';

interface Content<T> {
  tab: T;
  content: string;
}

export const useTabs = <T>(initialTab: number, allTabs: Content<T>[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTab);

  return {
    currentItem: allTabs[currentIndex] as Content<T>,
    changeItem: setCurrentIndex,
  };
};
