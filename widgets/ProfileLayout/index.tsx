import UserLinks from '@/widgets/ProfileLayout/ui/UserLinks';
import ContainerFlex from '@/shared/ui/Container-flex';
import { FC, ReactNode } from 'react';
import styles from './ProfileLayout.module.scss';
interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <ContainerFlex>
      <UserLinks />
      <div className={styles.root}>{children}</div>
    </ContainerFlex>
  );
};

export default ProfileLayout;
