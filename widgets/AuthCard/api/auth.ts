import axios from '../../../shared/utils/axios';

import {
  LoginRequestDto,
  LoginResponseDto,
  RegistrRequestDto,
  RegistrResponseDto,
} from './dto/auth.dto';

export const login = async (dto: LoginRequestDto): Promise<LoginResponseDto> => {
  try {
    return (await axios.post('/auth/login', dto)).data;
  } catch (error) {
    throw console.warn('Ошибка при авторизации');
  }
};

export const registration = async (dto: RegistrRequestDto): Promise<RegistrResponseDto> => {
  try {
    return (await axios.post('/auth/registration', dto)).data;
  } catch (error) {
    throw console.warn('Ошибка при регистрации');
  }
};
