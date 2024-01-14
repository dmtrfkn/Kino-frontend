import Image from 'next/image';
import styles from './FriendCard.module.scss';
import { FC } from 'react';

interface FriendCardProps {
  img: string;
  name: string;
  wasOnline: number;
}
const FriendCard: FC<FriendCardProps> = ({ img, name, wasOnline }) => {
  const date = Number(Date.now) - Number(wasOnline);
  return (
    <div className={styles.root}>
      <Image width={215} height={215} alt="friendImage" src={img} />
      <div className={styles.name}>{name}</div>
      <div className={styles.online}>{date}</div>
    </div>
  );
};

export default FriendCard;
