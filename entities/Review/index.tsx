import { Review } from '@/entities/Review/models/types/Review';
import { FC } from 'react';
import styles from './Review.module.scss';
import Image from 'next/image';
import Likes from '../../shared/ui/Likes';
import Link from 'next/link';
import comment from '@/assets/miniComment.svg';
import shared from '@/assets/share.svg';
import complain from '@/assets/complainLogo.svg';
import { createDateFromDate } from '@/shared/utils/createDateFromDate';

interface ReviewProps {
  review: Review;
}

const ReviewCard: FC<ReviewProps> = ({ review }) => {
  // const review = reviews[0];
  const date = new Date(review.date);
  const trueDate = createDateFromDate(date);

  const reviewType =
    review.typeOfReview === 'good'
      ? 'Положительная'
      : review.typeOfReview === 'middle'
      ? 'Нейтральная'
      : 'Отрицательная';

  return (
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
                <span className={styles.information}>Рецензии</span>({review.user[0].reviews.length}
                )
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
        <Likes countDislike={0} countLike={0} />
      </div>
      <div className={styles.review__main}>
        <div className={styles.review__main__flex}>
          <span className={styles.title}>{review.title}</span>
          <span className={styles.date}>{trueDate}</span>
        </div>
        <div className={styles.text}>{review.text}</div>
      </div>
      <div className={styles.review__links}>
        <div className={styles.review__links}>
          <div className={styles.link__flex}>
            <Image alt="comment" src={comment} />
            <span className={styles.link}>Комментировать</span>
          </div>
          <div className={styles.link__flex}>
            <Image alt="comment" src={shared} />
            <span className={styles.link}>Прямая ссылка</span>
          </div>
        </div>
        <div className={styles.link__flex}>
          <Image alt="complain" src={complain} />
          <span className={styles.complain}>Пожаловаться на спойлер</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
