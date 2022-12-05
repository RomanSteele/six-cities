import FavoritesList from '../components/favorites-list/favorites-list';
import Header from '../components/header/header';
import { useAppSelector } from '../hooks';

function FavoritesScreen(): JSX.Element {

  const FavoriteProperties = useAppSelector(({ ACTION }) => ACTION.favorites);

  return (
    <div className={`page ${FavoriteProperties.length > 0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {FavoriteProperties.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList FavoriteProps={FavoriteProperties}/>
            </section>
          </div>
        </main>
        :
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
