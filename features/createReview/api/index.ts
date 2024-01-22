import { Review } from '@/entities/Review/models/types/Review';
import { CreateReviewDto } from '../dto/createDto';
import axios from '@/shared/utils/axios';
export const createReview = async (dto: CreateReviewDto) => {
  try {
    const newReview: Review = (
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/reviews/create`, dto)
    ).data;
    return newReview;
  } catch (error) {
    console.warn(error);
  }
};
