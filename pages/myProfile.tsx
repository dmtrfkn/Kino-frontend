import getServerSideProps from '@/shared/utils/getProps/getProps';
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
