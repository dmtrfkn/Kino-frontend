import UserLinks from '@/shared/UserLinks';
import { useState } from 'react';
import getServerSideProps from '@/shared/utils/getProps/getProps';
import UpdateUser from '@/widgets/UpdateUserSettings';
import ContainerFlex from '@/shared/ui/Container-flex';
import UserProfileHomePage from '@/widgets/UserProfile';
import ProfileLayout from '@/widgets/ProfileLayout';

const myProfile = () => {
  return (
    <>
      <ProfileLayout>
        <UserProfileHomePage />
      </ProfileLayout>
    </>
  );
};

export default myProfile;

export { getServerSideProps };
