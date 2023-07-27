import Container from '@/shared/ui/Container';
import Header from '@/widgets/Header';
import React, { FC, ReactNode } from 'react';
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
    </>
  );
};

export default Layout;
