import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Button from '@/shared/ui/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Button color="yellow" text="Войти" />
    </>
  );
}
