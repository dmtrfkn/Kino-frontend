import ProfileLayout from '@/widgets/ProfileLayout';
import getServerSideProps from '@/shared/utils/getProps/getProps';
import UserProfileHomePage from '@/widgets/UserProfile';

const profile = () => {
  return (
    <>
      <ProfileLayout>
        <UserProfileHomePage />
      </ProfileLayout>
    </>
  );
};

export default profile;

export { getServerSideProps };
