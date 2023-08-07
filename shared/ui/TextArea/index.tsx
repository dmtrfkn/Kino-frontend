import React, { FC, useState } from 'react';
import styles from './TextArea.module.scss';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { UpdateUserDto } from '@/widgets/UpdateUserSettings/api/dto/update.dto';

export interface TextAreaProps {
  value: string;
  setValue: (text: string) => void;
}

const TextArea: FC<TextAreaProps> = ({ value, setValue }) => {
  const onChangeHandler = (text: string) => {
    setValue(text);
  };
  return (
    <textarea
      name="aboutMe"
      className={styles.root}
      placeholder="Информация о себе"
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

export default TextArea;
