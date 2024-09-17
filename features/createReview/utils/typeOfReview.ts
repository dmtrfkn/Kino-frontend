export const typeOfReview = (type: string) => {
  switch (type) {
    case 'good':
      return 'Положительная рецензия';
    case 'middle':
      return 'Нейтральная рецензия';

    case 'bad':
      return 'Отрицательная рецензия';
    default:
      return '';
  }
};
