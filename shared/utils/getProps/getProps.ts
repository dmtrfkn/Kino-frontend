import { wrapper } from '@/app/redux/store';
import { setUser } from '@/entities/User';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { data } = await axios.get(`http://localhost:4200/api/users/me`, {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies._token}`,
        },
      });

      store.dispatch(setUser(data));
    } catch (error) {}

    return {
      props: {},
    };
  },
);

export default getServerSideProps;
