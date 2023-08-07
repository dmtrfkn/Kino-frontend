import { User } from '@/entities/User';

export interface UpdateUserDto {
  email: string;
  name: string;
  secondName: string;
  vk: string;
  instagram: string;
  youtube: string;
  twitter: string;
  facebook: string;
  aboutMe: string;
  avatarImage: string;
  gender: string;
  birthday: string;
  country: string;
  city: string;
  favoriteGenres: string[];
}

export interface ResponseUserDto {
  data: User;
}