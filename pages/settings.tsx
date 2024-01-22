import ProfileLayout from '@/widgets/ProfileLayout';
import UpdateUser from '@/widgets/UpdateUserSettings';
import getServerSideProps from '@/shared/utils/getProps/getProps';

const settings = () => {
  return (
    <>
      <ProfileLayout>
        <UpdateUser />
      </ProfileLayout>
    </>
  );
};

export default settings;

export { getServerSideProps };
