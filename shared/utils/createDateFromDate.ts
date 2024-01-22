import { chooseMouth } from './chooseMount';

export const createDateFromDate = (date: Date) => {
  const day = date.getDay ? String(date.getDay()) : '';
  const year = date.getFullYear ? String(date.getFullYear()) : '';
  const month = date.getMonth ? date.getMonth() : 0;
  const trueMonth = chooseMouth(month < 10 ? '0' + String(month) : String(month));
  const hourAndMinutes = String(date)[17] + String(date)[18] + String(date)[19] + String(date)[20];
  const dateOfPublication = day + ' ' + trueMonth + ' ' + year + ' ' + '|' + ' ' + hourAndMinutes;

  return dateOfPublication;
};
