import { Card } from '@/entities/Card/model/types/card';
import styles from './Poster.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PosterOfFilmProps {
  poster: Card;
  width: number;
  height: number;
}

const PosterOfFilm: FC<PosterOfFilmProps> = ({ width, height, poster }) => {
  const img = `${process.env.NEXT_PUBLIC_IMAGE_URL}${poster.posterImage}`;
  return (
    <Link href="/3" className={styles.link}>
      <div className={styles.root}>
        <div className={styles.root__absolute}>
          <Image
            src={img}
            alt="poster"
            width={width}
            height={height}
            className={styles.root__absolute__image}
          />
          <p className={styles.root__absolute__rate}>{poster.ratings[0].rate}</p>
        </div>
        <h1 className={styles.root__name}>{poster.name}</h1>
        <h2 className={styles.root__genres}>{poster.genres.map((i) => i + ', ')}</h2>
      </div>
    </Link>
  );
};

export default PosterOfFilm;
