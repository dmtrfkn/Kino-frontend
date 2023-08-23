import UserLinks from '@/shared/ui/UserLinks';
import ContainerFlex from '@/shared/ui/Container-flex';
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
