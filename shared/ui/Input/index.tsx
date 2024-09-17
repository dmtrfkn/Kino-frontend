import { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';
import ErrorMessage from '../ErrorMessage';
import Image from 'next/image';

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
  register?: UseFormRegisterReturn;
  defaultValue?: string;
  image?: string;
  alt?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  errorMessage,
  register,
  defaultValue,
  image,
  alt,
  type,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');

  const changeHandler = (text: string) => {
    setValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <div className={styles.root}>
      {errorMessage && <ErrorMessage text={errorMessage} />}
      {!onChange ? (
        image ? (
          <div className={styles.flex}>
            <Image className={styles.image} alt={alt ? alt : ''} src={image} />
            <input
              className={styles.imageInput}
              type={type ? type : 'text'}
              placeholder={placeholder}
              {...register}
            />
          </div>
        ) : (
          <input className={styles.input} type="text" placeholder={placeholder} {...register} />
        )
      ) : image ? (
        <div className={styles.flex}>
          <Image className={styles.image} alt={alt ? alt : ''} src={image} />
          <input
            className={styles.imageInput}
            type={type ? type : 'text'}
            placeholder={placeholder}
            value={value}
            {...register}
            onChange={(e) => changeHandler(e.target.value)}
          />
        </div>
      ) : (
        <input
          className={styles.input}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          {...register}
          onChange={(e) => changeHandler(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
