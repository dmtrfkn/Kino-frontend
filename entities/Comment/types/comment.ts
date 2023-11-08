import { User } from '@/entities/User';

export type Comment = {
  _id: string;
  user: User[];
  dislikes: number;
  likes: number;
  title: string;
  date: Date;
  text: string;
  comments: Comment[];
  complaints: string[];
};
