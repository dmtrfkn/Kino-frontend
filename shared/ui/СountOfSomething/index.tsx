import { FC } from 'react';
import styles from './CountOfSomething.module.scss';

interface CountProps {
  count: number;
  text: string;
}

const CountOfSomething: FC<CountProps> = ({ count, text }) => {
  return (
    <div className={styles.root}>
      <span>{count}</span>
      <p>{text}</p>
    </div>
  );
};

export default CountOfSomething;
