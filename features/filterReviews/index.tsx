import { Review } from '@/entities/Review/models/types/Review';
import { FC, useState } from 'react';
import { filter } from './api/filter';
import styles from './filterReviews.module.scss';
interface filterReviewsProps {
  cardId: string;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
}
const FilterReviews: FC<filterReviewsProps> = ({ cardId, setReviews, reviews }) => {
  const goodReviewsCount = reviews.filter((i) => i.typeOfReview === 'good').length;
  const badReviewsCound = reviews.filter((i) => i.typeOfReview === 'bad').length;
  const neitralReviewsCound = reviews.filter((i) => i.typeOfReview === 'middle').length;
  const percent = Math.floor((goodReviewsCount / reviews.length) * 100);

  const onFilterClickHandler = async (type: string) => {
    try {
      if (type !== 'all') {
        const data = await filter({ cardId, type });
        setReviews(data);
      } else {
        setReviews(reviews);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <div className={styles.filter}>
      <div onClick={() => onFilterClickHandler('all')} className={styles.filter__button}>
        <span className={styles.title}>Всего</span>
        <span className={styles.filter__button__count + ' ' + styles['bg-blue']}>
          {reviews.length}
        </span>
      </div>
      <div onClick={() => onFilterClickHandler('good')} className={styles.filter__button}>
        <span className={styles.title}>Положительных</span>
        <span className={styles.filter__button__count + ' ' + styles['bg-green']}>
          {goodReviewsCount}
        </span>
      </div>
      <div onClick={() => onFilterClickHandler('bad')} className={styles.filter__button}>
        <span className={styles.title}>Отрицательных</span>
        <span className={styles.filter__button__count + ' ' + styles['bg-red']}>
          {badReviewsCound}
        </span>
      </div>
      <div onClick={() => onFilterClickHandler('middle')} className={styles.filter__button}>
        <span className={styles.title}>Нейтральных</span>
        <span className={styles.filter__button__count + ' ' + styles.bg_yellow}>
          {neitralReviewsCound}
        </span>
      </div>
      <div className={styles.filter__button}>
        <span className={styles.title}>Процент</span>
        <span className={styles.filter__button__count + ' ' + styles['bg-green']}>{percent}%</span>
      </div>
    </div>
  );
};

export default FilterReviews;
