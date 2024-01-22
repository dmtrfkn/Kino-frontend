import React, { FC, useState } from 'react';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import Modal from '@/shared/ui/Modal';
import Button from '@/shared/ui/Button';
import styles from './AuthCard.module.scss';

interface AuthCardProps {
  state: boolean;
  onCloseModalHandler: () => void;
}

const AuthCard: FC<AuthCardProps> = ({ state, onCloseModalHandler }) => {
  const [value, setValue] = useState<boolean>(true);

  const onClickHandler = () => {
    setValue((prev) => !prev);
  };

  const updateOnCloseModal = () => {
    onCloseModalHandler();
    setValue(true);
  };

  return (
    <div className={styles.root}>
      <Modal isOpen={state} setOpen={updateOnCloseModal}>
        {value ? (
          <LoginForm onChangeForm={onClickHandler} onClickHandler={onCloseModalHandler} />
        ) : (
          <RegistrationForm onClickHandler={onCloseModalHandler} />
        )}
      </Modal>
    </div>
  );
};

export default AuthCard;
