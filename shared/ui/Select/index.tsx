import React, { FC } from 'react';
import styles from './Select.module.scss';
import Input from '../Input';
import { UseFormRegisterReturn } from 'react-hook-form';
import { User } from '@/entities/User';

interface SelectProps {
  register?: UseFormRegisterReturn;
  user?: User;
}

const Select: FC<SelectProps> = ({ register, user }) => {
  return (
    <select defaultValue={user?.gender} className={styles.root} {...register} name="gender">
      <option disabled>Пол</option>
      <option>Мужской</option>
      <option>Женский</option>
    </select>
  );
};

export default Select;
