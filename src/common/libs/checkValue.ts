/**
 * 공백이 있는 지 체크하는 함수
 */
export const containsWhiteSpace = (str: string) => {
  const pattern = /\s/;
  const matches = str.match(pattern);
  if (matches && matches.length > 0) {
    return true;
  }
  return false;
};
