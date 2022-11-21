import { Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateCity } from '../../store/slices/action-data/action-data';


function LocationsBar(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(({ ACTION }) => ACTION.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((item) => (
          <li className="locations__item" onClick={() => dispatch(updateCity(item))} key={item.concat('ID')} >
            <a className={`locations__item-link tabs__item ${currentCity === item ? 'tabs__item--active' : ''}`} href="/#">
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>


  );
}

export default LocationsBar;
