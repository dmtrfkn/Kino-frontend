import styles from './Rate.module.scss';
import { FC } from 'react';

interface RateProps {
  rate: string;
}

const Rate: FC<RateProps> = ({ rate }) => {
  return (
    <div>
      <span className={styles.rate + ' ' + styles[`p-${Math.floor(Number(rate))}`]}>{rate}</span>
    </div>
  );
};

export default Rate;
