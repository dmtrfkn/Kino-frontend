import axios from '@/shared/utils/axios';
import { Review } from '@/entities/Review/models/types/Review';
import { type } from 'os';

export const filter = async (dto: { cardId: string; type: string }): Promise<Review[]> => {
  try {
    return (await axios.get(`/cards/${dto.cardId}/reviews?type=${dto.type}`)).data;
  } catch (error) {
    throw console.warn('Ошибка при фильтровке рецензий');
  }
};
