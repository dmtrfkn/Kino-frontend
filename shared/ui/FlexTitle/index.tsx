import { FC } from 'react';
import styles from './FlexTitle.module.scss';
import Image from 'next/image';
import arrow from '@/assets/rightArrow.svg';
import Link from 'next/link';

interface FlexTitleProps {
  title: string;
  header?: string;
  link?: string;
  paragraph?: string;
}

const FlexTitle: FC<FlexTitleProps> = ({ title, header, link, paragraph }) => {
  return (
    <>
      <div className={styles.flex}>
        <h1 className={styles.title}>{title}</h1>
        {link && (
          <Link className={styles.link} href={link}>
            <div className={styles.flex}>
              <h3 className={styles.header}>{header}</h3>
              <Image alt="arrow" src={arrow} />
            </div>
          </Link>
        )}
      </div>
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
    </>
  );
};

export default FlexTitle;
