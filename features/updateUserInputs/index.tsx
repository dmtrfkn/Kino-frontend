import { User } from '@/entities/User';
import Input from '@/shared/ui/Input';
import Select from '@/shared/ui/Select';
import SelectCountry from '@/widgets/UserProfile/ui/SelectCountry';
import { UpdateUserDto } from '@/widgets/UpdateUserSettings/api/dto/update.dto';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './updateUserInputs.module.scss';

interface UpdateUserInputsProps {
  register: UseFormRegister<UpdateUserDto>;
  errors: FieldErrors<UpdateUserDto>;
  userData?: User;
}

const UpdateUserInputs: FC<UpdateUserInputsProps> = ({ register, errors, userData }) => {
  return (
    <>
      <div className={styles.group}>
        <div className={styles.input}>
          <Input
            placeholder="Ваше имя"
            onChange={(e) => console.log()}
            defaultValue={userData?.name ? userData.name : ''}
            errorMessage={errors.name?.message}
            register={{
              ...register('name', {
                required: 'Укажите Имя',
              }),
            }}
          />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="Ваша Фамилия"
            onChange={(e) => console.log()}
            defaultValue={userData?.secondName ? userData.secondName : ''}
            errorMessage={errors.secondName?.message}
            register={{
              ...register('secondName', {
                required: 'Укажите Фамилию',
              }),
            }}
          />
        </div>
        <Select user={userData} register={register('gender')} />
        <Input
          onChange={(e) => console.log()}
          defaultValue={userData?.birthday ? userData.birthday : ''}
          placeholder="Дата рождения"
          errorMessage={errors.birthday?.message}
          register={{
            ...register('birthday', {
              required: 'Укажите Дату Рождения',
              pattern: {
                value: /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])/,
                message: 'Укажие корректную Дату Рождения',
              },
            }),
          }}
        />
        <SelectCountry register={register('country')} />
        <div className={styles.input}>
          <Input
            onChange={(e) => console.log()}
            defaultValue={userData?.city ? userData.city : ''}
            placeholder="Ваш Город"
            errorMessage={errors.city?.message}
            register={{
              ...register('city', {
                required: 'Укажите Ваш Город',
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateUserInputs;
