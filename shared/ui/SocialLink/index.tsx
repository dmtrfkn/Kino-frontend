import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './SocialLink.module.scss';

interface SocialLinkProps {
  image: string;
  link: string;
  alt: string;
}

const SocialLink: FC<SocialLinkProps> = ({ image, link, alt }) => {
  return (
    <div className={styles.root}>
      <Link href={link}>
        <Image alt={alt} width={14} height={14} src={image} />
      </Link>
    </div>
  );
};

export default SocialLink;
