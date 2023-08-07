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
import { useAppSelector } from '@/shared/api/redux';
import Link from 'next/link';

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  const onCloseModalHandler = () => {
    setState((prev) => !prev);
  };

  const user = useAppSelector((state) => state.user.data);

  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
      <div className={styles.header__flex}>
        <SearchButton />
        {user ? (
          <Link href={'myProfile'}>
            <Button color="blue" text={user.name} />
          </Link>
        ) : (
          <Button onClick={onCloseModalHandler} color="blue" text="Войти" />
        )}
      </div>
      <AuthCard onCloseModalHandler={onCloseModalHandler} state={state} />
    </div>
  );
};

export default Header;
