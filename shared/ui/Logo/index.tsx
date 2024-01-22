import Image from 'next/image';
import styles from './Logo.module.scss';
import logo from '@/assets/Логотип.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image width={129} height={31} alt="Logo" src={logo} priority />
    </div>
  );
};

export default Logo;
