import { Person } from '@/entities/Person/model/types/Person';
import axios from '@/shared/utils/axios';

export const personSearch = async (query: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/persons/search?query=${query}`,
    );
    const request: Person[] = response.data;
    return request;
  } catch (error) {
    console.error(error);
  }
};
