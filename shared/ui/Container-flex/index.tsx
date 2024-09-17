import React, { FC, ReactNode } from 'react';
import styles from './Container-flex.module.scss';
interface ContainerProps {
  children: ReactNode;
}

const ContainerFlex: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerFlex;
