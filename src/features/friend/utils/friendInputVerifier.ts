import { containsWhiteSpace } from '@libs/checkValue';

export const friendInputVerifier = (value: string) => {
  return value.length < 12 && value.length > 0 && !containsWhiteSpace(value);
};
