import { FC } from 'react';
import FlexTitle from '../FlexTitle';
import styles from './Shots.module.scss';
import Image from 'next/image';

interface ShotsProps {
  paragraph: string;
  links: string[] | undefined;
  title?: string;
  header?: string;
  person?: boolean;
}

const Shots: FC<ShotsProps> = ({ links, paragraph, header, title, person }) => {
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <>
      <FlexTitle
        paragraph={paragraph}
        header={header ? header : 'Все кадры'}
        link="/shots"
        title={title ? title : 'Кадры из фильма'}
      />
      <div className={person ? styles.person__shots : styles.shots__block}>
        {person
          ? links &&
            links.map((link, index) =>
              (index < 6 && index === 0) || index === 4 ? (
                <Image
                  width={702}
                  height={463}
                  key={link}
                  alt="Shot"
                  src={`${url}${link}`}
                  className={styles[`person__shots__item-${index + 1}`]}
                />
              ) : (
                <Image
                  width={340}
                  height={463}
                  key={link}
                  alt="Shot"
                  src={`${url}${link}`}
                  className={styles[`person__shots__item-${index + 1}`]}
                />
              ),
            )
          : links &&
            links.map((link, index) =>
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
