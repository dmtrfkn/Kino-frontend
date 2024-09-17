import { Card } from '@/entities/Card/model/types/card';
import axios from '@/shared/utils/axios';

export const cardSearch = async (query: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/cards/search?query=${query}`);
    const request: Card[] = response.data;
    return request;
  } catch (error) {
    console.error(error);
  }
};
