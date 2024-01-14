import { User } from '@/entities/User';
import styles from './loginButton.module.scss';
import { FC } from 'react';
import arrow from '@/assets/arrow.svg';
import userProfile from '@/assets/user.png';
import Image from 'next/image';
import Button from '@/shared/ui/Button';

interface loginButtonProps {
  user?: User;
  activeArrow: boolean;
  onClickHandler: () => void;
  onCloseModalHandler: () => void;
}

const LoginButton: FC<loginButtonProps> = ({
  user,
  activeArrow,
  onClickHandler,
  onCloseModalHandler,
}) => {
  return user ? (
    <div className={styles.profile__button} onClick={onClickHandler}>
      <div className={styles.flex}>
        <Image
          className={activeArrow ? styles.active__arrow : styles.arrow}
          alt="arrow"
          src={arrow}
        />
        {user.name}
      </div>
      <Image
        className={styles.image}
        alt="arrow"
        src={user?.avatarImage ? user.avatarImage : userProfile}
        width={52}
        height={52}
      />
    </div>
  ) : (
    <Button onClick={onCloseModalHandler} color="blue__and__light" text="Войти" />
  );
};

export default LoginButton;
