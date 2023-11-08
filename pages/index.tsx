import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Button from '@/shared/ui/Button';
import getServerSideProps from '@/shared/utils/getProps/getProps';
import { useAppSelector } from '@/shared/api/redux';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <div>фыва</div>;
}

export { getServerSideProps };
