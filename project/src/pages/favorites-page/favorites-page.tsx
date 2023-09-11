
import FavoritesLocationList from "../../components/favorites-location-list/favorites-location-list";
import Header from "../../components/header/header";

function FavoritesPage (): JSX.Element {

  return(
    <div className="page">

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              <FavoritesLocationList items={[]} properties={[]}/>

            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  )
}

export default FavoritesPage;
