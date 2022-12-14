import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header/header';
import MapInsert from '../components/map-insert/map-insert';
import PropertyScreenImages from '../components/property-screen-images/property-screen-images';
import PropertyScreenInsideList from '../components/property-screen-inside-list/property-screen-inside-list';
import { AppRoute } from '../const';
import { useAppSelector } from '../hooks';
import PropertyReviews from '../components/property-reviews/property-reviews';
import { store } from '../store';
import { fetchChosenPropertyAction, fetchChosenPropertyReviewsAction, fetchNearbyList } from '../store/api-actions';
import PostReviewForm from '../components/post-review-form/post-review-form';
import SinglePlaceCard from '../components/single-place-card/single-place-card';


function PropertyScreen(): JSX.Element {

  const params = useParams();

  const navigate = useNavigate();

  const propertyId = Number(params.id);

  const currentPropertyNearby = useAppSelector(({ ACTION }) => ACTION.nearby);
  const chosenProperty = useAppSelector(({ DATA }) => DATA.chosenProperty);
  const chosenPropertyReviews = useAppSelector(({ DATA }) => DATA.chosenPropertyReviews);

  useEffect(() => {
    if (!propertyId) {
      navigate(AppRoute.Main);
      return;
    }
    console.log('did');
    store.dispatch(fetchChosenPropertyAction(propertyId));
    store.dispatch(fetchChosenPropertyReviewsAction(propertyId));
    store.dispatch(fetchNearbyList(propertyId));
  }, [navigate, propertyId]);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <PropertyScreenImages pictures={chosenProperty.images}/>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {chosenProperty.isPremium ?
                <div className="property__mark">
                  <span >Premium</span>
                </div> : ''}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {chosenProperty.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${chosenProperty.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{chosenProperty.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {chosenProperty.type.charAt(0).toUpperCase().concat(chosenProperty.type.slice(1))}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {chosenProperty.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {chosenProperty.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{chosenProperty.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <PropertyScreenInsideList goods={chosenProperty.goods}/>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={chosenProperty.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {chosenProperty.host.name}
                  </span>
                  {chosenProperty.host.isPro ?
                    <span className="property__user-status">
                  Pro
                    </span>
                    :
                    ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {chosenProperty.description}
                  </p>
                </div>
              </div>
              <PropertyReviews reviews={chosenPropertyReviews}/>
              <PostReviewForm propertyId={propertyId}/>
            </div>
          </div>

          <section className="property__map map">
            <MapInsert properties={[chosenProperty, ...currentPropertyNearby]}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {currentPropertyNearby.map((item) => (
                <SinglePlaceCard property={item} key={item.id}/>
              ))}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
