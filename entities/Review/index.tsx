import { Review } from '@/entities/Review/models/types/Review';
import { FC, useEffect, useState } from 'react';
import styles from './Review.module.scss';
import Image from 'next/image';
import Likes from '../../shared/ui/Likes';
import Link from 'next/link';
import comment from '@/assets/miniComment.svg';
import shared from '@/assets/share.svg';
import complain from '@/assets/complainLogo.svg';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { createDateFromString } from '@/shared/utils/createDateFromString';
import CreateComment from '@/features/createComment';
import { useAppSelector } from '@/shared/api/redux';
import { selectUser } from '../User';
import Comment from '../Comment';
import { onUpdateReview, updateUserThere } from './api/funcs';
import { useDispatch } from 'react-redux';

interface ReviewProps {
  currentReview: Review;
}

const ReviewCard: FC<ReviewProps> = ({ currentReview }) => {
  const user = useAppSelector((state) => selectUser(state));
  const [review, setReview] = useState<Review>(currentReview);
  const [activeCreatePanel, setActiveCreatePanel] = useState(false);
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes);
  const [openComments, setOpenComments] = useState(false);
  const [preActiveLike, setPreActiveLike] = useState(
    user && user.likedReviews.includes(review._id),
  );
  const [preActiveDislike, setPreActiveDislike] = useState(
    user && user.dislikedReviews.includes(review._id),
  );
  const dispatch = useDispatch();
  const onClickActive = () => {
    setActiveCreatePanel((prev) => !prev);
  };

  const onClickHandler = (like: number, dislike: number) => {
    onUpdateReview(dislike, like, review, setReview);
    if (user && review) updateUserThere(user, review, dispatch, like, dislike);
  };

  // const onClickLike = (likes: number) => {
  //   setAddLikes(likes);
  //   onUpdateReview(dislikes, likes, review, setReview);
  //   if (user?.dislikedReviews.includes(review._id)) {
  //     user && onUpdateUser(user, review, dispatch, true, true);
  //   } else {
  //     user && onUpdateUser(user, review, dispatch, true, false);
  //   }
  // };

  // const onClickDisike = (dislikes: number) => {
  //   setAddDislikes(dislikes);
  //   onUpdateReview(dislikes, likes, review, setReview);
  //   if (user?.likedReviews.includes(review._id)) {
  //     user && onUpdateUser(user, review, dispatch, true, true);
  //   } else {
  //     user && onUpdateUser(user, review, dispatch, true, false);
  //   }
  // };
  const onChangeReviewHandler = (review: Review) => {
    setReview(review);
  };

  const reviewType =
    review.typeOfReview === 'good'
      ? 'Положительная'
      : review.typeOfReview === 'middle'
      ? 'Нейтральная'
      : 'Отрицательная';

  return (
    <div>
      <div className={styles.review + ' ' + styles[`border-${review.typeOfReview}`]}>
        <div className={styles.review__header}>
          <div className={styles.review__header__user__block}>
            <Image
              className={styles.image}
              width={115}
              height={115}
              alt="UserAvatar"
              src={review.user[0].avatarImage ? review.user[0].avatarImage : ''}
            />
            <div className={styles.review__header__user__block__flex}>
              <div className={styles.review__header__user__block__flex__name}>
                <span className={styles.name}>
                  {review.user[0].name} {review.user[0].secondName}
                </span>
                <div
                  className={
                    styles.typeOfReview + ' ' + styles[`typeOfReview-${review.typeOfReview}`]
                  }>
                  {reviewType} рецензия
                </div>
              </div>
              <div className={styles.review__header__user__block__flex__information}>
                <Link className={styles.information} href={`/${review.user}/reviews`}>
                  <span className={styles.information}>Рецензии</span>(
                  {review.user[0].reviews.length})
                </Link>
                <Link className={styles.information} href={`/${review.user}/friends`}>
                  <span className={styles.information}>Друзья</span>
                </Link>
                <Link className={styles.information} href={`/${review.user}/films`}>
                  <span className={styles.information}>Фильмы</span>
                </Link>
                <Link className={styles.information} href={`/${review.user}/persons`}>
                  <span className={styles.information}>Актёры</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.likes}>
            <Likes
              onClick={onClickHandler}
              preDislikes={preActiveDislike}
              preLikes={preActiveLike}
              addDisLike={setDislikes}
              addLike={setLikes}
              countDislike={dislikes}
              countLike={likes}
            />
          </div>
        </div>
        <div className={styles.review__main}>
          <div className={styles.review__main__flex}>
            <span className={styles.title}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{review.title}</ReactMarkdown>
            </span>
            <span className={styles.date}>{createDateFromString(review.date)}</span>
          </div>
          <div className={styles.text}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{review.text}</ReactMarkdown>
          </div>
        </div>
        <div className={styles.review__links}>
          <div className={styles.review__links}>
            <div className={styles.link__flex} onClick={onClickActive}>
              <Image alt="comment" src={comment} />
              <span className={styles.link}>Комментировать</span>
            </div>
            <div onClick={() => setOpenComments((prev) => !prev)} className={styles.link__flex}>
              <Image alt="comment" src={shared} />
              <span className={styles.link}>Комменты</span>
            </div>
          </div>
          <div className={styles.link__flex}>
            <Image alt="complain" src={complain} />
            <span className={styles.complain}>Пожаловаться на спойлер</span>
          </div>
        </div>
      </div>
      {activeCreatePanel && (
        <div className={styles.create__comment}>
          <CreateComment
            type="reviews"
            user={user}
            entityId={review._id}
            setEntity={onChangeReviewHandler}
            key={123123}
          />
        </div>
      )}
      {openComments &&
        review.comments &&
        review.comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <Comment currentComment={comment} />
          </div>
        ))}
    </div>
  );
};

export default ReviewCard;
