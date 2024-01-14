import { Comment } from '@/entities/Comment/types/comment';
import { User } from '@/entities/User';

export type Review = {
  _id: string;
  user: User[];
  typeOfReview: 'good' | 'middle' | 'bad';
  likes: number;
  dislikes: number;
  title: string;
  date: Date;
  text: string;
  comments: Comment[];
  complaints: string[];
};
