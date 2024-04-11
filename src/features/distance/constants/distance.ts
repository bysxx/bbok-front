export type TDistancePercent = 'One' | 'Two' | 'Three' | 'Four';

export const DISTANCE_GAGE: Record<TDistancePercent, string> = {
  One: 'illustration/distance-50less.svg',
  Two: 'illustration/distance-50over.svg',
  Three: 'illustration/distance-80over.svg',
  Four: 'illustration/distance-90over.svg',
} as const;
export type TDistanceImg = (typeof DISTANCE_GAGE)[keyof typeof DISTANCE_GAGE];
