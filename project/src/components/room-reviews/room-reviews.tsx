import dayjs from "dayjs";
import { AuthorizationStatus } from "../../const";
import { useAppSelector } from "../../hooks";

import { Review } from "../../types/review";
import ReviewForm from "../review-form/review-form";

type RoomReviewsProps = {
  hotelId: number
  reviews: Review[]
}

function RoomReviews ({reviews, hotelId}: RoomReviewsProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(({USER})=> USER);

  const reviewsByDate = reviews
  .slice()
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  }).slice(0,10);

  return(
    <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">


      {reviewsByDate.map((review)=>
    <li className="reviews__item" key={review.date + review.id}>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
        <span style={{ width: `${Math.round(review.rating) * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={dayjs(review.date).format('YYYY.MM.DD')}>{dayjs(review.date).format('MMMM D, YYYY')}</time>
    </div>
    </li>
      )}
    </ul>

        {authorizationStatus === AuthorizationStatus.Authorized ? <ReviewForm hotelId={hotelId}/> : ''}

  </section>
  )
}

export default RoomReviews;
