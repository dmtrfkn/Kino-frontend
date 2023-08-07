import React, { FC } from 'react';
import styles from './SelectCountry.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';
import { User } from '@/entities/User';
interface SelectCountryProps {
  register?: UseFormRegisterReturn;
  user?: User;
}

const SelectCountry: FC<SelectCountryProps> = ({ register, user }) => {
  return (
    <div className={styles.flex}>
      <select
        defaultValue={user?.country ? user.country : 'Выберите Страну'}
        className={styles.root}
        {...register}
        id="country"
        name="country">
        <option disabled>Выберите Страну</option>
        <option value="Россия">Россия</option>
        <option value="Украина">Украина</option>
        <option value="Таджикистан">Таджикистан</option>
        <option value="Казахстан">Казахстан</option>
      </select>
      <svg
        className={styles.svg}
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          id="Polygon 6"
          d="M5.31706 5.84212C4.91865 6.40671 4.08135 6.40671 3.68294 5.84212L0.849359 1.82656C0.381916 1.16413 0.855667 0.25 1.66642 0.25L7.33358 0.249999C8.14433 0.249999 8.61808 1.16413 8.15064 1.82656L5.31706 5.84212Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SelectCountry;