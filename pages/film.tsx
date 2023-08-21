import { setCard } from '@/entities/Card/model/store/slice';
import { useAppDispatch } from '@/shared/api/redux';
import axios from '@/shared/utils/axios';
import FilmCard from '@/widgets/FilmCard';
import { useEffect } from 'react';

const film = () => {
  return (
    <>
      <FilmCard />
    </>
  );
};

export default film;
