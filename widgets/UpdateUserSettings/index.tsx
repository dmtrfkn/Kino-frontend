import React, { FC, useState } from 'react';
import styles from './UpdateUser.module.scss';
import { useForm } from 'react-hook-form';
import { UpdateUserDto } from './api/dto/update.dto';
import Button from '@/shared/ui/Button';
import checkMark from '@/assets/checkMark.svg';
import UploadImage from '@/features/uploadImage';
import { useAppDispatch, useAppSelector } from '@/shared/api/redux';
import { selectFile } from '@/entities/File';

import Socials from '@/widgets/UpdateUserSettings/ui/Socials';
import TextArea from '@/shared/ui/TextArea';
import Image from 'next/image';
import ChooseGenges from '@/shared/ui/ChooseGenges';
import * as Api from './api/update';
import { setUser } from '@/entities/User';
import UpdateUserInputs from '@/features/updateUserInputs';

const UpdateUser: FC = () => {
  const userData = useAppSelector((state) => state.user.data);
  const [choosedGenres, setChoosedGenres] = useState<string[]>(
    userData?.favoriteGenres ? userData.favoriteGenres : [],
  );
  const [textareaValue, setTextareaValue] = useState<string>(
    userData?.aboutMe ? userData.aboutMe : '',
  );
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => selectFile(state));

  const currentImage = `${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.url}`;
  const totallyImage = data ? currentImage : userData?.avatarImage ? userData?.avatarImage : '';

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserDto>();

  const updateHandler = async (data: UpdateUserDto) => {
    try {
      const updatedUser = await Api.updateUser({
        ...data,
        avatarImage: totallyImage,
        aboutMe: textareaValue,
        favoriteGenres: choosedGenres,
        email: userData ? userData.email : '',
        person: '',
      });
      dispatch(setUser(updatedUser));
      console.log(updatedUser);
    } catch (error) {
      alert('Не удалось обновить юзера');
    }
  };
  return (
    <form className={styles.form} id="form" onSubmit={handleSubmit(updateHandler)}>
      <div className={styles.root}>
        <div className={styles.flex}>
          <h1>Настройки профиля</h1>
          <div className={styles.button}>
            <Button form="form" image={checkMark} color="default-small" text="Сохранить" />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.uploadImage}>
            <Image
              className={styles.image}
              alt="UserImage"
              width={478}
              height={478}
              src={totallyImage}
            />
            <UploadImage />
          </div>
          <div className={styles.inputs}>
            <UpdateUserInputs register={register} errors={errors} userData={userData} />
            <div className={styles.genges}>
              <ChooseGenges arrayOfChoosenGenres={choosedGenres} setGenres={setChoosedGenres} />
            </div>
            <TextArea
              setSelectedValue={() => console.log()}
              setValue={setTextareaValue}
              value={textareaValue}
            />
          </div>
        </div>
        <div className={styles.links}>
          <Socials user={userData} register={register} errors={errors} />
        </div>
      </div>
    </form>
  );
};

export default UpdateUser;
