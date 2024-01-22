import getServerSideProps from '@/shared/utils/getProps/getProps';
import FilmCard from '@/widgets/FilmCard';

const film = () => {
  return (
    <>
      <FilmCard />
    </>
  );
};

export default film;
export { getServerSideProps };
