import { Rating } from '@/entities/Rating/model/types/rating';
import styles from './RatingComponent.module.scss';
import { FC } from 'react';

interface RatingProps {
  rate: Rating;
}

const RatingCurcle: FC<RatingProps> = ({ rate }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>
        <div className={styles[`p-${Math.floor(Number(rate.rate))}`] + ' ' + styles.circle__item}>
          <div
            className={
              styles[`pp-${Math.floor(Number(rate.rate))}`] + ' ' + styles.circle__item_inner
            }>
            {rate.rate}
          </div>
        </div>
      </div>
      <span className={styles.whoose}>{rate.whoose}</span>
    </div>
  );
};

export default RatingCurcle;
