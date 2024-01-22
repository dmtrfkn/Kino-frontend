import { Review } from '@/entities/Review/models/types/Review';
import { FC } from 'react';
import styles from './ReviewsBlock.module.scss';
import ReviewCard from '@/entities/Review';

interface ReviewsBlockProps {
  reviews: Review[];
}
const ReviewsBlock: FC<ReviewsBlockProps> = ({ reviews }) => {
  return (
    <div className={styles.root}>
      {reviews && reviews.map((review) => <ReviewCard currentReview={review} key={review._id} />)}
    </div>
  );
};

export default ReviewsBlock;
