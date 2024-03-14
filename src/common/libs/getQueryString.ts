export const getQueryString = (obj: Object) => {
  return Object.entries(obj)
    .map((param) => {
      if (param[1] === '') {
        return null;
      }
      return param.join('=');
    })
    .filter((str) => str !== null)
    .join('&');
};
