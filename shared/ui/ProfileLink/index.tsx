import Image from 'next/image';
import React, { FC } from 'react';
import styles from './ProfileLink.module.scss';
import '@/app/styles/variables.scss';

interface ProfileLinkProps {
  imageLink: string;
  alt: string;
  active: boolean;
  onClickProp: () => void;
}

const ProfileLink: FC<ProfileLinkProps> = ({ imageLink, alt, active, onClickProp }) => {
  return (
    <div className={active ? (styles.root, styles.active) : styles.root} onClick={onClickProp}>
      <Image className={styles.image} alt={alt} src={imageLink} />
    </div>
  );
};

export default ProfileLink;
