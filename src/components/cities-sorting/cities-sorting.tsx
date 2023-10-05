
import { Link } from 'react-router-dom';
import { Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateCurrentSortCity } from '../../store/slices/action-data/action-data';

function CitiesSorting (): JSX.Element {


  const dispatch = useAppDispatch();
  const { isCurrentSortCity } = useAppSelector(({ ACTION })=>ACTION);

  const handleCityClick = (city: string) => () => {
    dispatch(updateCurrentSortCity(city));
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {Cities.map((city)=>
              (
                <li className="locations__item" onClick={handleCityClick(city)} key={city}>
                  <Link className={`${city === isCurrentSortCity ? 'tabs__item--active ' : ''}locations__item-link tabs__item`} to="#">
                    <span>{city}</span>
                  </Link>
                </li>
              ),
            )}

          </ul>
        </section>
      </div>
    </>
  );

}

export default CitiesSorting;
