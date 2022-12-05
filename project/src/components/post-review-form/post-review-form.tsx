import React, { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus, STARS } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { postComment } from '../../store/api-actions';
import { Review, ReviewPost } from '../../types/review';


type PostReviewFormProps = {
  reviews: Review[];
};

function PostReviewForm({ reviews }: PostReviewFormProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  const enum CommentLength {
    Min = 50,
    Max = 300,
  }

  const enum StarsStart {
    start = 0,
  }

  const params = useParams();
  const [commentData, setCommentData] = useState<string>('');
  const [ratingData, setRatingData] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const sendStatus = useAppSelector(({ ACTION }) => ACTION.isLoading);

  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const hanldeMouseClick = (id: number) => {
    setRatingData(id);
  };

  const sendOnSubmit = ({ id, comment, rating }: ReviewPost) => {
    store.dispatch(postComment({ id, comment, rating }));

  };

  const id = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( !isDisabled ) {
      sendOnSubmit(
        {
          id: id,
          rating: ratingData,
          comment: commentData,
        });
    }
  };

  useEffect (() => {
    setIsDisabled(
      ratingData === StarsStart.start ||
      commentData.length < CommentLength.Min ||
      commentData.length > CommentLength.Max,
    );
  }, [ratingData, commentData, StarsStart.start, CommentLength.Min, CommentLength.Max]);


  return (
    AuthorizationStatus.Authorized === authorizationStatus ?
      <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {STARS.map((item) => (
            <React.Fragment key={item.id}>
              <input onClick={() => {hanldeMouseClick(item.id);}} key={item.id} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
              <label htmlFor={`star-${item.id}`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}

        </div>
        <textarea onChange={handleCommentAdd} value={commentData} disabled={!sendStatus} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled || !sendStatus}>Submit</button>
        </div>
      </form>
      :
      <> </>
  );
}


export default PostReviewForm;
