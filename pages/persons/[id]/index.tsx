import FilmCard from '@/widgets/FilmCard';
import PersonCard from '@/widgets/PersonCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FilmItem = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  useEffect(() => {
    setId([router.query.id].join(''));
  }, [router]);
  return (
    <>
      <PersonCard />
    </>
  );
};

export default FilmItem;
