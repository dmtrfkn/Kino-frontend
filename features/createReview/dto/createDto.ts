export interface CreateReviewDto {
  user: string;
  typeOfReview: string;
  likes?: number;
  dislikes?: number;
  title: string;
  date?: Date;
  text: string;
  comments?: string[];
  complaints?: string[];
}
