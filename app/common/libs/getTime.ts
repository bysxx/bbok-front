export const getTime = (time: string) => {
  const date = new Date(time);
  const year = date.getFullYear().toString().slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}.${month}.${day}`;
};
