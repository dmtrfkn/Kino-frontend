import Image from 'next/image';
import styles from './Logo.module.scss';
import logo from '@/assets/Логотип.svg';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import twitter from '@/assets/twitter.svg';
import vk from '@/assets/vk.svg';
import Link from 'next/link';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image width={129} height={31} alt="Logo" src={logo} priority />
      <div className={styles.logo__flex}>
        <Link href={'/'}>
          <Image width={18} height={18} alt="Vk" src={vk} priority />
        </Link>
        <Link href={'/'}>
          <Image width={18} height={18} alt="Instagram" src={instagram} priority />
        </Link>
        <Link href={'/'}>
          <Image width={18} height={18} alt="Facebook" src={facebook} priority />
        </Link>
        <Link href={'/'}>
          <Image width={18} height={18} alt="Twitter" src={twitter} priority />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
