'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

/**
 *  @description IntersectionObserver Target 이벤트를 실행하는 함수
 *  @param {RefObject} target - IntersectionObserver Target을 전달하는 RefObject
 *  @param {() => void} onIntersect - Target이 ViewPort에 보일 경우 실행 할 함수
 *  @param {number} threshold - IntersectionObserver 인식 시점을 전달하는 값
 *  @param {boolean} enabled - IntersectionObserver 사용 여부
 *  @returns None
 *  @example useIntersectionObserver({ target: myRef, onIntersect: () => { alert('Intersect'); }, enabled: isLoading? false : true });
 */

interface UseIntersectionObserverProps {
  root?: null | unknown;
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  threshold?: number;
  enabled?: boolean;
}

export const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 1.0,
  enabled = true,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        threshold,
      },
    );
    const element = target && target.current;
    if (!element) {
      return;
    }
    observer.observe(element);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(element);
    };
  }, [enabled, threshold, target, onIntersect]);
};
