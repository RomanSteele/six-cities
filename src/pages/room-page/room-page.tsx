import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import MapComponent from '../../components/map-component/map-component';
import RoomReviews from '../../components/room-reviews/room-reviews';
import Spinner from '../../components/spinner/spinner';
import { AppRoute, AuthorizationStatus, CardsListType, RoomMapSize } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { changeFavoriteStatus, fetchCurrentHotelAction, fetchNearbyHotelsAction, fetchReviewsAction } from '../../store/api-actions';


function RoomPage (): JSX.Element {

  const params = useParams();
  const hotelId = Number(params.id);
  const navigate = useNavigate();

  const { currentHotel, reviews, favoriteHotels, nearbyHotels } = useAppSelector(({ DATA })=>DATA);
  const { authorizationStatus } = useAppSelector(({ USER })=>USER);
  const { isLoading } = useAppSelector(({ ACTION })=>ACTION);
  const { id, title, images, isPremium, rating, goods, maxAdults, price, type, bedrooms, host, description, isFavorite } = currentHotel;

  const imagesToRender = images.slice(0, 6);
  const width = `${Math.round(rating) * 20}%`;

  const status = isFavorite ? 0 : 1;

  const mapType = 'property';

  const nearbyHotelsPlusCurrent = [...nearbyHotels, currentHotel];

  const capitalLetterType = type.charAt(0).toUpperCase() + type.slice(1);


  const favoritesButtonClickHandle = () =>{
    if (authorizationStatus === AuthorizationStatus.Authorized){
      store.dispatch(changeFavoriteStatus({ id, status }));
    }
    else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(()=> {
    store.dispatch(fetchCurrentHotelAction(hotelId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteHotels]);


  useEffect (() => {
    store.dispatch(fetchCurrentHotelAction(hotelId));
    store.dispatch(fetchReviewsAction(hotelId));
    store.dispatch(fetchNearbyHotelsAction(hotelId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);


  if (isLoading && currentHotel.id !== hotelId) {
    return (
      <Spinner loading={isLoading} />
    );
  }

  return (

    <div className="page">

      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {imagesToRender.map((image)=>
                (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Img studio"/>
                  </div>
                ),
              )}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              { isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button onClick={favoritesButtonClickHandle} className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalLetterType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((item)=>
                    (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ),
                  ) }

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <RoomReviews reviews={reviews} hotelId={hotelId}/>
            </div>
          </div>

          <MapComponent properties={nearbyHotelsPlusCurrent} size={RoomMapSize} type={mapType}/>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardsList properties={nearbyHotels} listType={CardsListType[0].title}/>

          </section>
        </div>
      </main>

    </div>
  );
}

export default RoomPage;
