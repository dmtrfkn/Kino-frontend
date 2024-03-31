import getServerSideProps from '@/shared/utils/getProps/getProps';
import { useEffect } from 'react';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // useEffect(() => {
  //   const outOfTheModal = window.document.querySelector('.root');
  //   outOfTheModal?.addEventListener('keypress', (e: Event) => {
  //     if (e) console.log(123);
  //   });
  // }, []);
  return <div className="root">фыва</div>;
}

export { getServerSideProps };
