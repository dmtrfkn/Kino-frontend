import { Comment } from '@/entities/Comment/types/comment';
import { Person } from '@/entities/Person/model/types/Person';

export interface UpdatePersonDto {
  comments: Comment[];
}

export interface UpdatePersonResponce {
  data: Person;
}
