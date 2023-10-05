import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CardsListType } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { changeFavoriteStatus } from '../../store/api-actions';
import { Property } from '../../types/property';
import PremiumBadge from '../premium-badge/premium-badge';

type SinglePropertyCardProps = {
  property: Property,
  listType: string,
}

function SinglePropertyCard ({ property, listType }: SinglePropertyCardProps): JSX.Element {

  const navigate = useNavigate();

  const { authorizationStatus }= useAppSelector(({ USER })=>USER);

  const { id, title, price, previewImage, isPremium, type, rating, isFavorite } = property;

  const redirectAddress = (AppRoute.Room.replace(':id', id.toString()));
  const width = `${Math.round(rating) * 20}%`;
  const status = isFavorite ? 0 : 1;

  const favoritesButtonClickHandle =() =>{
    if (authorizationStatus === AuthorizationStatus.Authorized){
      store.dispatch(changeFavoriteStatus({ id, status }));
    }
    else {
      navigate(AppRoute.Login);
    }
  };

  return (

    <article className={`${listType === CardsListType[0].title ? 'near-places__card' : 'cities__place-card'} place-card`}>

      { isPremium ? <PremiumBadge/> : ''}

      <div className={`${listType === CardsListType[0].title ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={redirectAddress}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place img" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={favoritesButtonClickHandle} className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={redirectAddress}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default SinglePropertyCard;
