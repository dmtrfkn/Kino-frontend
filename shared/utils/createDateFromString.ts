import { chooseMouth } from './chooseMount';

export const createDateFromString = (date: Date) => {
  return `${
    date.toString()[8] !== '0' ? date.toString()[8] + date.toString()[9] : date.toString()[9]
  }${' '}
                  ${chooseMouth(date.toString()[5] + date.toString()[6])}${' '}
                  ${
                    date.toString()[0] +
                    date.toString()[1] +
                    date.toString()[2] +
                    date.toString()[3]
                  }${' '}
                  |${' '}
                  ${
                    date.toString()[11] +
                    date.toString()[12] +
                    date.toString()[13] +
                    date.toString()[14] +
                    date.toString()[15]
                  }${' '}`;
};
