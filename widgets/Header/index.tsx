import Button from '@/shared/ui/Button';
import Navbar from '../Navbar';
import styles from './Header.module.scss';
import SearchButton from '@/features/searchButton/ui';
import Logo from '@/shared/ui/Logo';
import Modal from '@/shared/ui/Modal';
import LoginForm from '../AuthCard/ui/LoginForm';
import RegistrationForm from '../AuthCard/ui/RegistrationForm';
import { useState } from 'react';
import AuthCard from '../AuthCard/ui/AuthCard';
import { useAppDispatch, useAppSelector } from '@/shared/api/redux';
import Link from 'next/link';
import arrow from '@/assets/arrow.svg';
import userProfile from '@/assets/user.png';
import Image from 'next/image';
import { removeUser, setUser } from '@/entities/User';
const Header = () => {
  const [state, setState] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [activeArrow, setActiveArrow] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    setState((prev) => !prev);
  };

  const onClickHandler = () => {
    setActive((prev) => !prev);
    setActiveArrow((prev) => !prev);
  };

  const onLogoutHandler = () => {
    dispatch(removeUser());
    onClickHandler();
  };

  const user = useAppSelector((state) => state.user.data);

  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
      <div className={styles.header__flex}>
        <SearchButton />
        <div className={styles.position}>
          {user ? (
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
          )}
          <div className={active ? styles.active : styles.popup}>
            <Link onClick={onClickHandler} className={styles.link} href={'myProfile'}>
              Профиль
            </Link>
            <Link href={'/'} onClick={onLogoutHandler} className={styles.link}>
              Выйти
            </Link>
          </div>
        </div>
      </div>
      <AuthCard onCloseModalHandler={onCloseModalHandler} state={state} />
    </div>
  );
};

export default Header;
