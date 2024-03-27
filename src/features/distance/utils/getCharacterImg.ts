import type { TDistanceImg } from '../constants';
import { DISTANCE_GAGE } from '../constants';

/**
 * 거리 값에 대응되는 캐릭터 이미지 src 를 반환하는 함수
 */
export const getCharacterImg = (distance: number): TDistanceImg => {
  if (distance < 50) {
    return DISTANCE_GAGE.One;
  }
  if (distance >= 50 && distance < 80) {
    return DISTANCE_GAGE.Two;
  }
  if (distance >= 80 && distance <= 90) {
    return DISTANCE_GAGE.Three;
  }

  return DISTANCE_GAGE.Four;
};
