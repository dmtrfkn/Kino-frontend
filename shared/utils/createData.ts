import { chooseMouth } from './chooseMount';

export const createData = (stroke: string) => {
  const day = stroke ? stroke[0] + stroke[1] : '';
  const mounth = stroke ? stroke[3] + stroke[4] : '';

  const calcYear = (year: string) => {
    const numberYear = Number(year);
    return 2023 - numberYear;
  };
  const year = stroke ? stroke[6] + stroke[7] + stroke[8] + stroke[9] : '';
  const date = `${day} ${chooseMouth(mounth)} ${year} г. (${calcYear(year)} лет)`;
  return date;
};
