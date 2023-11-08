import axios from '@/shared/utils/axios';
import { UpdatePersonDto, UpdatePersonResponce } from './dto/update';
import { Comment } from '@/entities/Comment/types/comment';
import { Person } from '@/entities/Person/model/types/Person';

export const updatePersonHandler = async (data: Comment[]) => {
  try {
  } catch (error) {
    console.warn('Ошибочка при обновлении персоны на фронте', error);
  }
};
