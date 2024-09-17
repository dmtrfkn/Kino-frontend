import { createCommentDto } from '@/features/createComment/createCommets';
import axios from '@/shared/utils/axios';
import { updateCommentDto } from './dto/update-dto';
import { Comment } from '../types/comment';
export const updateComment = async (data: updateCommentDto, commentId: string) => {
  try {
    const updatedComment = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/comments/update/${commentId}`,
      data,
    );
    const updatedCommentData: Comment = updatedComment.data;
    return updatedCommentData;
  } catch (error) {
    console.warn('Ошибка при обновлении комментария', error);
  }
};
