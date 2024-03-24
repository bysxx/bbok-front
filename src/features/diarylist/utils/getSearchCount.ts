export const getSearchCount = (length: number, search: string): string => {
  if (search.length > 0) {
    return `‘${search}’ 검색결과 ${length}`;
  }
  return `총 일화 수 ${length}`;
};
