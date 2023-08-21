import React, { useRef, useState } from 'react';
import styles from './UploadImage.module.scss';
import Button from '@/shared/ui/Button';
import * as Api from './api/upload';
import { setUrl } from '@/entities/File';
import { useAppDispatch } from '@/shared/api/redux';
const UploadImage = () => {
  const [state, setState] = useState<string>();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const onHangdleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      const file = event.target.files?.item(0);
      if (file) {
        formData.append('file', file);
      }

      const data = await Api.upload({ formData });
      dispatch(setUrl(data));
      const str = event.target.value.slice(12);
      setState(str);
    } catch (error) {
      console.warn(error);
      alert('Ошибка При выгрузке файла');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.flex}>
        <div className={styles.photo__title}>
          Фото профиля: <span className={styles.span}>{state}</span>
        </div>
        <Button
          type="button"
          onClick={() => (inputFileRef.current ? inputFileRef.current.click() : '')}
          color="blue-middle"
          text="Загрузить"
        />
      </div>
      <input
        type="file"
        ref={inputFileRef}
        hidden={true}
        onChange={(e) => onHangdleChangeFile(e)}
      />
    </div>
  );
};

export default UploadImage;
