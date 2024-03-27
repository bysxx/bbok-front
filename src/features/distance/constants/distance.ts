import type { TDistancePercent } from '@interfaces/enums';
import { DistancePercent } from '@interfaces/enums';

export const DISTANCE_GAGE: Record<TDistancePercent, string> = {
  [DistancePercent.One]: 'illustration/distance-50less.svg',
  [DistancePercent.Two]: 'illustration/distance-50over.svg',
  [DistancePercent.Three]: 'illustration/distance-80over.svg',
  [DistancePercent.Four]: 'illustration/distance-90over.svg',
};
export type TDistanceImg = (typeof DISTANCE_GAGE)[keyof typeof DISTANCE_GAGE];
