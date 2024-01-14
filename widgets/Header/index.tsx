import Navbar from './ui/Navbar';
import styles from './Header.module.scss';
import SearchButton from '@/features/searchButton/ui';
import Logo from '@/shared/ui/Logo';
import { useState } from 'react';
import AuthCard from '../AuthCard/ui/AuthCard';
import { useAppDispatch, useAppSelector } from '@/shared/api/redux';
import Link from 'next/link';
import { removeUser } from '@/entities/User';
import { useGetWindowSize } from '@/shared/hooks/useGetWindowSize';
import LoginButton from './ui/loginButton';
import Search from '@/features/searchButton';

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
  const { width } = useGetWindowSize();
  return width && width > 1440 ? (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__navbar}>
        <Navbar />
      </div>
      <div className={styles.header__flex}>
        <Search />
        <div className={styles.position}>
          <LoginButton
            activeArrow={activeArrow}
            onClickHandler={onClickHandler}
            onCloseModalHandler={onCloseModalHandler}
            user={user}
          />
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
  ) : (
    <div className={styles.header}>
      <div className={styles.header__modal}>
        <SearchButton />
        <div className={styles.header__links}>
          <Logo />
          <div className={styles.header__navbar}>
            <Navbar />
          </div>
        </div>
        <LoginButton
          activeArrow={activeArrow}
          onClickHandler={onClickHandler}
          onCloseModalHandler={onCloseModalHandler}
          user={user}
        />
      </div>
    </div>
  );
};

export default Header;
