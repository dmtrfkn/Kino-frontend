import { updateUser } from '@/widgets/UpdateUserSettings/api/update';
import { Review } from '../models/types/Review';
import { updateReview } from './update';
import { User, setUser } from '@/entities/User';
import { Dispatch } from 'redux';

export const onUpdateReview = async (
  dislike: number,
  like: number,
  review: Review,
  setReview: (review: Review) => void,
) => {
  const newReview = await updateReview(
    { comments: [], dislikes: dislike, likes: like },
    review._id,
  );
  newReview && setReview(newReview);
};

export const onUpdateUser = async (
  user: User,
  review: Review,
  dispatch: Dispatch,
  like?: number,
  dislike?: number,
) => {
  const updatedUser = await updateUser({
    aboutMe: user.aboutMe,
    avatarImage: user.avatarImage,
    birthday: user.birthday,
    city: user.city,
    country: user.country,
    dislikedFilm: '',
    email: user.email,
    facebook: user.facebook,
    favoriteFilm: '',
    favoriteGenres: user.favoriteGenres,
    friends: user.friends,
    gender: user.gender,
    instagram: user.instagram,
    likedFilm: '',
    name: user.name,
    person: '',
    secondName: user.secondName,
    twitter: user.twitter,
    vk: user.vk,
    youtube: user.youtube,
    dislikedComment: '',
    dislikedReview: dislike ? review._id : '',
    likedComment: '',
    likedReview: like ? review._id : '',
  });
  dispatch(setUser(updatedUser));
};
