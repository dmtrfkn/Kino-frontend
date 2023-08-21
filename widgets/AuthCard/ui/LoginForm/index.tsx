import Input from '@/shared/ui/Input';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginRequestDto } from '../../api/dto/auth.dto';
import Button from '@/shared/ui/Button';
import styles from './LoginForm.module.scss';
import PasswordInput from '@/shared/ui/PasswordInput';
import * as Api from '@/widgets/AuthCard/api/auth';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Vk from '@/assets/0.svg';
import Facebook from '@/assets/1.svg';
import Google from '@/assets/2.svg';
import Twitter from '@/assets/3.svg';

interface LoginFormProps {
  onClickHandler: () => void;
  onChangeForm: () => void;
}
const LoginForm: FC<LoginFormProps> = ({ onClickHandler, onChangeForm }) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequestDto>();

  const loginHandler = async (data: LoginRequestDto) => {
    try {
      const { token } = await Api.login(data);
      setCookie(null, '_token', token, { path: '/' });
      toast.success('Вы успешно вошли в аккаунт!');
      router.push('/');
      onClickHandler();
    } catch (error) {
      // setError('email', { message: error.response?.data.message }, { shouldFocus: true });
      setError(
        'email',
        { message: 'Ошибка при авторизации, проверьте данные и попробуйте ещё раз' },
        {
          shouldFocus: true,
        },
      );
      // }
    }
  };

  return (
    <div className={styles.main}>
      <h1>Войти</h1>
      <form className={styles.root} onSubmit={handleSubmit(loginHandler)}>
        <div className={styles.flex}>
          <Input
            placeholder="Ваша почта"
            errorMessage={errors.email?.message}
            register={{
              ...register('email', {
                required: 'Укажите email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Укажие корректный email',
                },
              }),
            }}
          />
          <PasswordInput
            placeholder="Ваш Пароль"
            errorMessage={errors.password?.message}
            register={{
              ...register('password', {
                required: 'Укажите пароль',
                maxLength: { value: 24, message: 'Пароль должен быть не более 24 симболов' },
                minLength: { value: 6, message: 'Пароль должен быть более 6 симболов' },
                validate: (password: string) => {
                  if (!password.trim()) {
                    return 'Укажите корректный пароль';
                  }
                },
              }),
            }}
          />
        </div>
        <Button text="Войти" height="" width="" color="yellow" />
        <Button
          text="Зарегистрироваться"
          height=""
          width=""
          fontSize="big"
          color="default"
          onClick={onChangeForm}
        />
        <Link className={styles.root__link} href="#!">
          Восстановить пароль
        </Link>
        <div className={styles.root__links}>
          <Link href="#!">
            <Image className={styles.root__image} alt="Vk" src={Vk} />
          </Link>
          <Link href="#!">
            <Image className={styles.root__image} alt="Facebook" src={Facebook} />
          </Link>
          <Link href="#!">
            <Image className={styles.root__image} alt="Google" src={Google} />
          </Link>
          <Link href="#!">
            <Image className={styles.root__image} alt="Twitter" src={Twitter} />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
