import { FC } from 'react';
import FlexTitle from '../FlexTitle';
import styles from './Shots.module.scss';
import Image from 'next/image';

interface ShotsProps {
  paragraph: string;
  links: string[];
}

const Shots: FC<ShotsProps> = ({ links, paragraph }) => {
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <>
      <FlexTitle paragraph={paragraph} header="Все кадры" link="/shots" title="Кадры из фильма" />
      <div className={styles.shots__block}>
        {links.map((link, index) =>
          (index < 6 && index === 0) || index === 5 ? (
            <Image
              width={702}
              height={463}
              key={link}
              alt="Shot"
              src={`${url}${link}`}
              className={styles[`shots__block__item-${index + 1}`]}
            />
          ) : (
            <Image
              width={340}
              height={463}
              key={link}
              alt="Shot"
              src={`${url}${link}`}
              className={styles[`shots__block__item-${index + 1}`]}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Shots;
