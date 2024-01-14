import Image from 'next/image';
import styles from './ShortFilmCardWithRate.module.scss';
import { Card } from '@/entities/Card/model/types/card';
import { FC } from 'react';
import Button from '../Button';
import { Person } from '@/entities/Person/model/types/Person';
import Rate from '../Rate';

interface ShortCardProps {
  film: Card;
}

const ShortFilmCardWithRate: FC<ShortCardProps> = ({ film }) => {
  return (
    <>
      <div className={styles.films__block__flex} key={film._id}>
        <div className={styles.films__block__flex__first}>
          <Image
            className={styles.films__block__flex__first__image}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${film.posterImage}`}
            width={200}
            height={275}
            alt="Poster"
          />
          <div className={styles.films__block__flex__first__description}>
            <h2 className={styles.films__block__flex__first__description__header}>{film.name}</h2>
            <h2 className={styles.films__block__flex__first__description__header_english}>
              {film.secondName}
            </h2>
            <div className={styles.films__block__flex__first__description__genres}>
              {film.genres &&
                film.genres.map((i) => (i !== film.genres[film.genres.length - 1] ? i + ', ' : i))}
            </div>
            <p className={styles.films__block__flex__first__description__author}>
              {film.producers &&
                film.producers.map((i) =>
                  i !== film.producers[film.producers.length - 1] ? i + ', ' : i,
                )}
            </p>
          </div>
        </div>
        {/* <div className={styles.films__block__flex__second}> */}
        <div className={styles.films__block__flex__second__rate}>
          {film.ratings &&
            film.ratings.map(
              (rate, index) =>
                index < 2 && (
                  <div key={index} className={styles.films__block__flex__second__rate__flex}>
                    <span>
                      <Rate rate={rate.rate} />
                    </span>
                    <p className={styles.whoose}>{rate.whoose}</p>
                  </div>
                ),
            )}
        </div>
        <div className={styles.button}>
          <Button color="blue__and__light__middle" text="Карточка фильма" type="button" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ShortFilmCardWithRate;
