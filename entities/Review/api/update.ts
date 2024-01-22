import { Review } from '../models/types/Review';
import { updateReviewDto } from './dto/update-dto';
import axios from '@/shared/utils/axios';
export const updateReview = async (dto: updateReviewDto, reviewId: string) => {
  try {
    const updatedReview: Review = (
      await axios.put(`${process.env.NEXT_PUBLIC_URL}/reviews/update/${reviewId}`, dto)
    ).data;
    return updatedReview;
  } catch (error) {
    alert('Ошибка при обновлении рецензии');
    console.warn(error);
  }
};
