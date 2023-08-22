import { FC } from 'react';
import arrow from '@/assets/rightArrow.svg';
import Image from 'next/image';
import styles from './Trailer.module.scss';
interface TrailerProps {
  videoLink: string;
  videoName: string;
}

const Trailer: FC<TrailerProps> = ({ videoLink, videoName }) => {
  const url = 'NEXT_PUBLIC_IMAGE_URL';
  return (
    <div className={styles.trailer}>
      <div className={styles.trailer__flex}>
        <h1 className={styles.title}>Трейлеры фильма</h1>
        <div className={styles.trailer__flex}>
          <span className={styles.header}>Все трейлеры</span>
          <Image alt="arrow" src={arrow} />
        </div>
      </div>
      <video
        controls
        preload={`${url}$/uploads/15993660542832137299392574692263611.png`}
        className={styles.trailer__video}>
        <source src={videoLink} />
        Sorry, your browser doesn`t support embedded videos, but don`t worry, you can
        <a href="videofile.ogg">download it</a>
        and watch it with your favorite video player!
      </video>
      <h2 className={styles.name}>{videoName}</h2>
    </div>
  );
};

export default Trailer;
