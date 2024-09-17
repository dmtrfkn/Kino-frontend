import Image from 'next/image';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import twitter from '@/assets/twitter.svg';
import vk from '@/assets/vk.svg';
import Link from 'next/link';
import styles from './LogoLinks.module.scss';

const LogoLinks = () => {
  return (
    <div>
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

export default LogoLinks;
