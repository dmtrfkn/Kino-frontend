import { User, setUser } from '@/entities/User';
import { createComment } from './create';
import { updateComment } from './update';
import { Comment } from '../types/comment';
import { Dispatch } from 'redux';
import { updateUser } from '@/widgets/UpdateUserSettings/api/update';

export const onClickUpdateCommentHandler = async (
  user: User,
  like: number,
  dislike: number,
  text: string,
  setComment: (comment: Comment) => void,
  setAddCommToComm: (prev: boolean) => void,
  commentId: string,
  flag?: boolean,
) => {
  const createdComment = flag && (await createComment(user?._id ? user._id : '', text));
  const updatedComment = await updateComment(
    {
      comments: createdComment ? [createdComment._id] : [],
      dislikes: dislike,
      likes: like,
      text: text,
    },
    commentId,
  );
  updatedComment && setComment(updatedComment);
  flag && setAddCommToComm(false);
};

export const onClickUpdateUser = async (
  user: User,
  comment: Comment,
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
    dislikedComment: dislike ? comment._id : '',
    dislikedReview: '',
    likedComment: like ? comment._id : '',
    likedReview: '',
  });
  dispatch(setUser(updatedUser));
};
