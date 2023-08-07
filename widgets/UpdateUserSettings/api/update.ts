import axios from '@/shared/utils/axios';
import { UpdateUserDto } from './dto/update.dto';
export const update = async (dto: UpdateUserDto) => {
  try {
    return (await axios.put('/users/update', dto)).data;
  } catch (error) {
    throw console.warn('Ошибка при обновлении пользователя');
  }
};
