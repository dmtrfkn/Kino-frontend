import Image from 'next/image';
import React, { FC, useState } from 'react';
import styles from './ProfileLink.module.scss';
import '@/app/styles/variables.scss';
import Link from 'next/link';

interface ProfileLinkProps {
  imageLink: string;
  alt: string;
  numb: string;
  setActive: (data: string) => void;
  active: string;
  link: string;
}

const ProfileLink: FC<ProfileLinkProps> = ({ imageLink, setActive, numb, active, alt, link }) => {
  return (
    <Link href={link}>
      <div
        className={active === numb ? (styles.root, styles.active) : styles.root}
        onClick={() => setActive(numb)}>
        <Image className={styles.image} alt={alt} src={imageLink} />
      </div>
    </Link>
  );
};

export default ProfileLink;
