export interface createCommentDto {
  user: string;
  likes: number;
  dislikes: number;
  text: string;
  date: number;
  comments: string[];
  complaints: string[];
}
