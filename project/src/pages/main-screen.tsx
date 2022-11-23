
import Header from '../components/header/header';
import LocationsBar from '../components/locations-bar/locations-bar';
import MapInsert from '../components/map-insert/map-insert';
import PropertiesList from '../components/properties-list/properties-list';
import SortMenu from '../components/sort-menu/sort-menu';
import { useAppSelector } from '../hooks';


function MainScreen(): JSX.Element {

  const properties = useAppSelector(({ DATA }) => DATA.properties);
  const currentCityFilter = useAppSelector(({ ACTION }) => ACTION.city);
  const propertiesToShow = properties.filter((item)=> item.city.name === currentCityFilter);

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
            <section className="cities__places places" id="element-to-scroll">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{propertiesToShow.length} places to stay in {currentCityFilter}</b>
              <SortMenu/>
              <div className="cities__places-list places__list tabs__content">
                <PropertiesList properties={propertiesToShow}/>
              </div>
            </section>
            <div className="cities__right-section">
              <MapInsert properties={propertiesToShow}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
