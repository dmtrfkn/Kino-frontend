import Input from '@/shared/ui/Input';
import React, { FC } from 'react';
import styles from './RegistrationForm.module.scss';
import { useForm } from 'react-hook-form';
import { RegistrRequestDto } from '../../api/dto/auth.dto';
import axios from '@/shared/utils/axios';
import PasswordInput from '@/shared/ui/PasswordInput';
import Button from '@/shared/ui/Button';
import CheckboxInput from '@/shared/ui/CheckboxInput';
import * as Api from '../../api/auth';
import { setCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

interface RegistrationFormProps {
  onClickHandler: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onClickHandler }) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegistrRequestDto>();

  const router = useRouter();

  const registrationHandler = async (data: RegistrRequestDto) => {
    try {
      const { token } = await Api.registration(data);
      console.log(token);
      setCookie(null, '_token', token, { path: '/' });
      toast.success('Вы успешно зарегистрировались!');
      router.push('/');
      onClickHandler();
    } catch (error) {
      setError(
        'email',
        { message: 'Ошибка при регистрации, такой email уже существует' },
        {
          shouldFocus: true,
        },
      );
      // }
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Зарегистрироваться</h1>
      <form className={styles.root} onSubmit={handleSubmit(registrationHandler)}>
        <div className={styles.flex}>
          <Input
            placeholder="Имя"
            errorMessage={errors.name?.message}
            register={{
              ...register('name', {
                required: 'Укажите Имя',
                minLength: { value: 2, message: 'Имя должно быть более 2 символов' },
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: 'Укажие корректное имя',
                // },
              }),
            }}
          />
          <Input
            placeholder="Фамилия"
            errorMessage={errors.secondName?.message}
            register={{
              ...register('secondName', {
                minLength: { value: 2, message: 'Фамилия должна быть более 2 символов' },
                required: 'Укажите Фамилию',
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: 'Укажие корректную фамилию',
                // },
              }),
            }}
          />
          <PasswordInput
            placeholder="Ваш Пароль"
            errorMessage={errors.password?.message}
            register={{
              ...register('password', {
                required: 'Укажите Пароль',
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
          <PasswordInput
            placeholder="Повторите ваш пароль"
            errorMessage={errors.password?.message}
            register={{
              ...register('password', {
                required: 'Укажите Пароль',
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
          <Input
            placeholder="Email"
            errorMessage={errors.email?.message}
            register={{
              ...register('email', {
                required: 'Укажите Email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Укажие корректный email',
                },
              }),
            }}
          />
        </div>
        <CheckboxInput text="Соглашаюсь на условия " linkText="политики конфиденциальности" />
        <CheckboxInput text="Соглашаюсь на обработку персональных данных" />
        <Button text="Зарегистрироваться" color="yellow" />
      </form>
    </div>
  );
};

export default RegistrationForm;
