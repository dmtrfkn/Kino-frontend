export interface CreateReviewDto {
  user: string;
  typeOfReview: string;
  likes?: number;
  dislikes?: number;
  title: string;
  date?: number;
  text: string;
  comments?: string[];
  complaints?: string[];
}
