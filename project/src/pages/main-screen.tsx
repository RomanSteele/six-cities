
import Header from '../components/header/header';
import LocationsBar from '../components/locations-bar/locations-bar';
import PropertiesList from '../components/properties-list/properties-list';
import SortMenu from '../components/sort-menu/sort-menu';
import { useAppSelector } from '../hooks';


function MainScreen(): JSX.Element {

  const properties = useAppSelector(({ DATA }) => DATA.properties);

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsBar/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortMenu/>
              <div className="cities__places-list places__list tabs__content">
                <PropertiesList properties={properties}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
