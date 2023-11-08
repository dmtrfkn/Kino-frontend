import Image from 'next/image';
import styles from './Awards.module.scss';
import arrow from '@/assets/rightArrow.svg';
import { Award } from '@/entities/Award/model/types/Award';
import { FC } from 'react';
import FlexTitle from '../FlexTitle';

interface AwardsProps {
  awards?: Award[];
}

const Awards: FC<AwardsProps> = ({ awards }) => {
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className={styles.awards}>
      <FlexTitle header="Все награды" link="/awards" title="Награды" />

      <div className={styles.awards__block}>
        {awards &&
          awards.map((i) => (
            <div key={i._id} className={styles.awards__block__item}>
              <Image width={45} height={115} alt="awardPoster" src={`${url}${i.picture}`} />
              <div className={styles.awards__block__item__flex}>
                <div className={styles.awards__block__item__flex__mini}>
                  <span className={styles.awards__block__item__name}>{i.name}</span>
                  <span className={styles.awards__block__item__description}>{i.description}</span>
                </div>
                <span className={styles.awards__block__item__year}>{i.year}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Awards;
