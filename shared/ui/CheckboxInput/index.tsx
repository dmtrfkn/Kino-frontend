import React, { FC, useState } from 'react';
import styles from './CheckboxInput.module.scss';
import Image from 'next/image';
import fill_checkbox from '@/assets/fill_checkbox.svg';
import out_checkbox from '@/assets/outlined_checkbox.svg';

interface CheckboxProps {
  text: string;
  linkText?: string;
  activeState: boolean;
  setActiveState: (state: boolean) => void;
}

const CheckboxInput: FC<CheckboxProps> = ({ text, linkText, activeState, setActiveState }) => {
  const onClickHandler = () => {
    setActiveState(!activeState);
  };
  return (
    <div className={styles.root}>
      {activeState ? (
        <Image onClick={onClickHandler} alt="checkbox" src={fill_checkbox} />
      ) : (
        <Image onClick={onClickHandler} alt="checkbox" src={out_checkbox} />
      )}
      {/* <input
        type="checkbox"
        className={active ? styles.checkbox : styles.checkbox}
        id="happy"
        name="happy"
        value="yes"
      /> */}
      <label className={styles.root__label} id="happy">
        {text}{' '}
        {linkText ? (
          <a className={styles.linkText} href="#!">
            {linkText}
          </a>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};

export default CheckboxInput;
