
import Header from '../components/header/header';
import LocationsBar from '../components/locations-bar/locations-bar';
import MapInsert from '../components/map-insert/map-insert';
import PropertiesList from '../components/properties-list/properties-list';
import { updateSortOrder } from '../store/slices/action-data/action-data';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useState } from 'react';
import { SortOptions } from '../const';


function MainScreen(): JSX.Element {

  const dispatch = useAppDispatch();

  const properties = useAppSelector(({ DATA }) => DATA.properties);
  const currentCityFilter = useAppSelector(({ ACTION }) => ACTION.city);
  const propertiesToShow = properties.filter((item)=> item.city.name === currentCityFilter);
  const currentSortOption = useAppSelector(({ ACTION }) => ACTION.sortOrder);

  const [isSortOpen, setIsSortOpen] = useState(false);


  const propertiesToRender = () => {
    if (currentSortOption === SortOptions[1]) {
      return propertiesToShow.sort((a, b)=> a.price - b.price);
    }
    if (currentSortOption === SortOptions[2]) {
      return propertiesToShow.sort((a, b)=> b.price - a.price);
    }
    if (currentSortOption === SortOptions[3]) {
      return propertiesToShow.sort((a, b)=> b.rating - a.rating);
    }
    else {
      return propertiesToShow;
    }
  };

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

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span onClick={()=> setIsSortOpen(!isSortOpen)} className="places__sorting-type" tabIndex={0}>
                  {currentSortOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
                  {SortOptions.map((item) => (
                    <li onClick={() => dispatch(updateSortOrder(item)) && setIsSortOpen(!isSortOpen)} className={`places__option ${currentSortOption === item ? 'places__option--active' : ''}`} tabIndex={0} key={item.concat('ID')}>{item}</li>
                  ))}
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">

                <PropertiesList properties={propertiesToRender()}/>

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
