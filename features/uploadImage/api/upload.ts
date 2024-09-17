import axios from '../../../shared/utils/axios';

export const upload = async ({ formData }: any) => {
  try {
    return (await axios.post('/files/upload', formData)).data;
  } catch (error) {
    throw console.warn('Ошибка при Загрузке файла');
  }
};
