import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { store } from "../../store";
import { changeFavoriteStatus } from "../../store/api-actions";
import { Property } from "../../types/property";

type FavoritesPropertyCardProps = {
  property: Property;
}

function FavoritesPropertyCard ({property}: FavoritesPropertyCardProps): JSX.Element {


  const {id, title, price, previewImage, rating, isFavorite, type} = property;

  const width = `${Math.round(rating) * 20}%`;

  const redirectRoute = AppRoute.Room.replace(':id', id.toString())


  const favoritesButtonClickHandle =() =>{
    const status = isFavorite ? 0 : 1
    store.dispatch(changeFavoriteStatus({id, status}))
  }


  return(

    <article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={redirectRoute}>
        <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button onClick={favoritesButtonClickHandle} className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={redirectRoute}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
  )
}

export default FavoritesPropertyCard;
