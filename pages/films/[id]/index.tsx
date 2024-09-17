import FilmCard from '@/widgets/FilmCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getServerSideProps from '@/shared/utils/getProps/getProps';

const FilmItem = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  useEffect(() => {
    setId([router.query.id].join(''));
  }, [router]);
  return <>{id && <FilmCard filmId={id} />}</>;
};

export default FilmItem;
export { getServerSideProps };
