
import { useEffect } from 'react';
import FavoritesEmptyList from '../../components/favorites-list-empty/favorites-list-empty';
import FavoritesLocationList from '../../components/favorites-location-list/favorites-location-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteHotelsAction } from '../../store/api-actions';


function FavoritesPage (): JSX.Element {

  const { favoriteHotels } = useAppSelector(({ DATA })=> DATA);
  const { isLoading } = useAppSelector(({ ACTION })=>ACTION);

  useEffect(()=>{store.dispatch(fetchFavoriteHotelsAction());}, []);

  const cityItems = [...new Set(favoriteHotels.map((item)=>item.city.name))];

  if (isLoading ) {
    return (
      <Spinner loading={isLoading} />
    );
  }

  return (
    <div className="page">

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          {favoriteHotels.length < 1 ? <FavoritesEmptyList/>
            :
            <FavoritesLocationList items={cityItems} properties={favoriteHotels}/>}

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
