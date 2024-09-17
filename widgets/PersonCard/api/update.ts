import axios from '@/shared/utils/axios';
import { UpdatePersonDto, UpdatePersonResponce } from './dto/update';
import { Comment } from '@/entities/Comment/types/comment';
import { Person } from '@/entities/Person/model/types/Person';

export const updatePersonHandler = async (id: string, data: UpdatePersonDto) => {
  try {
    const updatedPerson = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/persons/update/${id}`,
      data,
    );
    const updatedPersonData: Person = updatedPerson.data;
    return updatedPersonData;
  } catch (error) {
    console.warn('Ошибочка при обновлении персоны на фронте', error);
  }
};
