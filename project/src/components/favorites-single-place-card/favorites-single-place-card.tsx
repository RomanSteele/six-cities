
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Property } from '../../types/property';
import AddToMyFavoritesButton from '../add-to-favorites-button/add-to-favorites-button';

type SinglePlaceCardProps = {
  property: Property;
};


function FavoritesSinglePlaceCard({ property }: SinglePlaceCardProps): JSX.Element {

  const { previewImage, title, type, price, id, rating, isPremium } = property;


  return (

    <article className="favorites__card place-card">

      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={(`${AppRoute.Property}/${id}`)}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place pic"></img>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddToMyFavoritesButton propertyId={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={(`${AppRoute.Property}/${id}`)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default FavoritesSinglePlaceCard;
