import React, { FC } from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessProps {
  text: string;
}

const ErrorMessage: FC<ErrorMessProps> = ({ text }) => {
  return <div className={styles.root}>{text}</div>;
};

export default ErrorMessage;
