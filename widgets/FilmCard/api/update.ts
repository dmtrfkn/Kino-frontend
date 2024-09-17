import { Card } from '@/entities/Card/model/types/card';
import axios from '@/shared/utils/axios';

export const updateCard = async (dto: updateCardDto, cardId: string) => {
  try {
    const udpatedCard: Card = (
      await axios.put(`${process.env.NEXT_PUBLIC_URL}/cards/update/${cardId}`, dto)
    ).data;
    return udpatedCard;
  } catch (error) {
    throw alert(error);
  }
};
