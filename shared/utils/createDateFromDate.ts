import { chooseMouth } from './chooseMount';

export const createDateFromDate = (date: Date) => {
  const day = String(date.getDay());
  const year = String(date.getFullYear());
  const month = date.getMonth();
  const trueMonth = chooseMouth(month < 10 ? '0' + String(month) : String(month));
  const hourAndMinutes = String(date)[17] + String(date)[18] + String(date)[19] + String(date)[20];
  const dateOfPublication = day + ' ' + trueMonth + ' ' + year + ' ' + '|' + ' ' + hourAndMinutes;

  return dateOfPublication;
};
