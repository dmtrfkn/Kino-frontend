import Container from '@/shared/ui/Container';
import Header from '@/widgets/Header';
import React, { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
// import styles from '@/app/styles/variables.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={true}
        theme={'dark'}
      /> */}
    </>
  );
};

export default Layout;
