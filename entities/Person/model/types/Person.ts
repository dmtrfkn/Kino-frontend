import { Award } from '@/entities/Award/model/types/Award';
import { Card } from '@/entities/Card/model/types/card';
import { Comment } from '@/entities/Comment/types/comment';

export type Person = {
  _id: string;
  name: string;
  englishName: string;
  avatarImage: string;
  linkToBiography: string;
  career: string[];
  height: string;
  birthday: string[];
  bornPlace: string;
  genres: string[];
  totalCountOfFilmsAndYears: string[];
  favorites: number;
  awards: Award[];
  bestFilms: Card[];
  lastNews: string[];
  photos: string[];
  films: Card[];
  comments: Comment[];
};
