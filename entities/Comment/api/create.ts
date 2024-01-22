import axios from '@/shared/utils/axios';
import { Comment } from '../types/comment';

export const createComment = async (userId: string, text: string) => {
  const createdComment = await axios.post(`${process.env.NEXT_PUBLIC_URL}/comments/create`, {
    user: userId,
    likes: 0,
    dislikes: 0,
    text: text,
    date: Date.now(),
    comments: [],
    complains: [],
  });
  const createdCommentData: Comment = createdComment.data;
  return createdCommentData;
};
