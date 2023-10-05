import React from 'react';
import { FormEvent, useEffect, useState } from 'react';
import { STARS } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { postReview } from '../../store/api-actions';
import { addReviewType } from '../../types/review';


const enum CommentLength {
  Min = 5,
  Max = 400,
}

const enum StarsStart {
  start = 0,
}

type ReviewFormProps={
  hotelId: number;
}

function ReviewForm ({ hotelId }: ReviewFormProps): JSX.Element {

  const { isLoading } = useAppSelector(({ ACTION })=>ACTION);

  const [commentData, setCommentData] = useState<string>('');
  const [ratingData, setRatingData] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);


  const hanldeMouseClick = (id: number) => {
    setRatingData(id);
  };

  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const sendOnSubmit = ({ id, comment, rating }: addReviewType) => {
    store.dispatch(postReview({ id, comment, rating }));

  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if ( !isDisabled ) {
      sendOnSubmit(
        {
          id: hotelId,
          rating: ratingData,
          comment: commentData,
        });
      setRatingData(0);
      setCommentData('');
    }
  };

  useEffect (() => {
    setIsDisabled(
      ratingData === StarsStart.start ||
      commentData.length < CommentLength.Min ||
      commentData.length > CommentLength.Max ||
      isLoading,
    );
  }, [ ratingData, commentData, isLoading ]);


  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {STARS.map((star)=>

          (
            <React.Fragment key={star.id}>
              <input className="form__rating-input visually-hidden" name="rating" value={star.id} id={`${star.id}-stars`} type="radio" />
              <label htmlFor={`${star.id}-stars`} onClick={() => { hanldeMouseClick(star.id); } } className="reviews__rating-label form__rating-label" title={star.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ),

        )}

      </div>

      <textarea className="reviews__textarea form__textarea" onChange={handleCommentAdd} value={commentData}  id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" data-testid={'review-text'}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">5 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
