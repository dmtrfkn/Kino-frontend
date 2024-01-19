import { Card } from '@/entities/Card/model/types/card';
import { Review } from '@/entities/Review/models/types/Review';
import { updateCard } from './update';
import { User, setUser } from '@/entities/User';
import { updateUser } from '@/widgets/UpdateUserSettings/api/update';
import { Dispatch } from 'redux';

export const updateCardReviews = async (
  newReview: Review[],
  cardId: string,
  setCard: (updatedCard: Card) => void,
) => {
  const updatedCard = await updateCard(
    {
      dislikes: 0,
      favorites: 0,
      likes: 0,
      reviews: newReview.map((i) => i._id),
    },
    cardId,
  );
  setCard(updatedCard);
};

export const updateCardLikes = async (
  like: number,
  dislike: number,
  cardId: string,
  setCard: (updatedCard: Card) => void,
) => {
  const updatedCard = await updateCard(
    {
      dislikes: dislike,
      favorites: 0,
      likes: like,
      reviews: [],
    },
    cardId,
  );
  setCard(updatedCard);
};

export const updateCardFavorite = async (
  favorite: number,
  cardId: string,
  setCard: (updatedCard: Card) => void,
) => {
  const updatedCard = await updateCard(
    {
      dislikes: 0,
      likes: 0,
      favorites: favorite,
      reviews: [],
    },
    cardId,
  );
  setCard(updatedCard);
};

export const updateUserThere = async (
  user: User,
  card: Card,
  dispatch: Dispatch,
  like?: number,
  dislike?: number,
  fav?: boolean,
) => {
  if (user && card) {
    const updatedUser = await updateUser({
      aboutMe: user.aboutMe,
      avatarImage: user.avatarImage,
      birthday: user.birthday,
      city: user.city,
      country: user.country,
      dislikedFilm: dislike ? card._id : '',
      email: user.email,
      facebook: user.facebook,
      favoriteFilm: fav ? card._id : '',
      favoriteGenres: user.favoriteGenres,
      friends: user.friends,
      gender: user.gender,
      instagram: user.instagram,
      likedFilm: like ? card._id : '',
      name: user.name,
      person: '',
      secondName: user.secondName,
      twitter: user.twitter,
      vk: user.vk,
      youtube: user.youtube,
    });

    dispatch(setUser(updatedUser));
  }
};
