import React, { FC, useState } from 'react';
import styles from './TextArea.module.scss';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { UpdateUserDto } from '@/widgets/UpdateUserSettings/api/dto/update.dto';
import ReactMarkdown from 'react-markdown';

export interface TextAreaProps {
  value: string;
  setValue: (text: string) => void;
  setSelectedValue?: (text: string | undefined) => void;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({ setSelectedValue, value, setValue, placeholder }) => {
  const handleMouseUp = () => {
    // console.log(`Selected text: ${window.getSelection()?.toString()}`);
    setSelectedValue && setSelectedValue(window.getSelection()?.toString());
  };
  const onChangeHandler = (text: string) => {
    setValue(text);
  };
  return (
    <textarea
      name="aboutMe"
      className={styles.root}
      placeholder={placeholder ? placeholder : 'Информация о себе'}
      value={value}
      onMouseUp={handleMouseUp}
      onChange={(e) => onChangeHandler(e.target.value)}></textarea>
  );
};

export default TextArea;
