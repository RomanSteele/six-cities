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

export type addReviewType = {
    id: number;
    comment: string;
    rating: number;
}

