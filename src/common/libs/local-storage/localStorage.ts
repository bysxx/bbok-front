import { LocalStorageKey } from './localStorageKey';

/**
 * 계정 탈퇴했을 때, 로컬 스토리지 값 삭제
 */
export const clearLocalStorage = () => {
  localStorage.removeItem(LocalStorageKey.activeFriend);
  localStorage.removeItem(LocalStorageKey.checkVisited);
  localStorage.removeItem(LocalStorageKey.saying);
};

/**
 * 친구 관계 정리할 때, 로컬 스토리지 값 삭제
 */
export const clearDeleteFriend = () => {
  localStorage.removeItem(LocalStorageKey.saying);
  localStorage.removeItem(LocalStorageKey.activeFriend);
};
