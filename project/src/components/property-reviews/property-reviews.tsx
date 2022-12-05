import { Review } from '../../types/review';
import SingleReview from '../single-review/single-review';

type PropertyReviewsProps = {
  reviews: Review[];
};

function PropertyReviews({ reviews }: PropertyReviewsProps): JSX.Element {


  return (

    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <SingleReview property={item} key={item.user.id + Math.random()}/>
        ))}

      </ul>

    </section>

  );
}

export default PropertyReviews;
