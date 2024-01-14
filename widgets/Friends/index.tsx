import { useAppSelector } from '@/shared/api/redux';
import styles from './Friends.module.scss';
import { selectUser } from '@/entities/User';
import FriendCard from '@/widgets/Friends/ui/FriendCard';

const Friends = () => {
  const user = useAppSelector((state) => selectUser(state));
  return (
    <div className={styles.root}>
      <div className={styles.flex}>
        <h1>Ваши Друзья</h1>
        <ul className={styles.flex}>
          <li className={styles.li}>Всего</li>
          <li className={styles.li}>Входящие</li>
          <li className={styles.li}>Исходящие</li>
        </ul>
      </div>
      <div className={styles.main}>
        {user?.friends.map((i, index) => (
          <FriendCard
            img={i?.avatarImage ? i.avatarImage : ''}
            name={i.name}
            wasOnline={i?.wasOnline ? Number(i.wasOnline) : Date.now()}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Friends;
