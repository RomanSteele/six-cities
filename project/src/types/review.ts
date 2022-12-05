export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type ReviewPost = {
  id: number;
  comment: string;
  rating: number;
  };

export type UserCommentData = {
    review: string;
    rating: number;
    token: string;
  }

