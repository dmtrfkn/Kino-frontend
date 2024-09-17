import styles from './Socials.module.scss';
import vk_profile from '@/assets/vk_profile.svg';
import youtube_profile from '@/assets/youtube_profile.svg';
import instagram_profile from '@/assets/instagram_profile.svg';
import facebook_profile from '@/assets/facebook_profile.svg';
import twitter_profile from '@/assets/twitter_profile.svg';
import Input from '../../../../shared/ui/Input';
import { UpdateUserDto } from '@/widgets/UpdateUserSettings/api/dto/update.dto';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { FC } from 'react';
import { User } from '@/entities/User';

interface SocialProps {
  register: UseFormRegister<UpdateUserDto>;
  errors: FieldErrors<UpdateUserDto>;
  user?: User;
}

const Socials: FC<SocialProps> = ({ register, errors, user }) => {
  // const {
  //   handleSubmit,
  //   register,
  //   setError,
  //   formState: { errors, isSubmitting },
  // } = useForm<UpdateUserDto>();
  return (
    <div className={styles.root}>
      <Input
        image={vk_profile}
        alt="vk"
        onChange={() => console.log()}
        placeholder="Ссылка на соц. сеть"
        defaultValue={user?.vk ? user.vk : ''}
        errorMessage={errors.vk?.message}
        register={{
          ...register('vk', {
            required: 'Укажите ссылку',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Укажие корректную ссылку',
            },
          }),
        }}
      />
      <Input
        image={youtube_profile}
        alt="youtube"
        placeholder="Ссылка на соц. сеть"
        onChange={() => console.log()}
        defaultValue={user ? user.youtube : ''}
        errorMessage={errors.youtube?.message}
        register={{
          ...register('youtube', {
            required: 'Укажите ссылку',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Укажие корректную ссылку',
            },
          }),
        }}
      />
      <Input
        onChange={() => console.log()}
        image={instagram_profile}
        alt="instagram"
        placeholder="Ссылка на соц. сеть"
        defaultValue={user ? user.instagram : ''}
        errorMessage={errors.instagram?.message}
        register={{
          ...register('instagram', {
            required: 'Укажите ссылку',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Укажие корректную ссылку',
            },
          }),
        }}
      />
      <Input
        onChange={() => console.log()}
        image={twitter_profile}
        alt="twitter"
        placeholder="Ссылка на соц. сеть"
        defaultValue={user ? user.twitter : ''}
        errorMessage={errors.vk?.message}
        register={{
          ...register('twitter', {
            required: 'Укажите ссылку',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Укажие корректную ссылку',
            },
          }),
        }}
      />
      <Input
        onChange={() => console.log()}
        image={facebook_profile}
        alt="facebook"
        placeholder="Ссылка на соц. сеть"
        defaultValue={user ? user.facebook : ''}
        errorMessage={errors.vk?.message}
        register={{
          ...register('facebook', {
            required: 'Укажите ссылку',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Укажие корректную ссылку',
            },
          }),
        }}
      />
    </div>
  );
};

export default Socials;
