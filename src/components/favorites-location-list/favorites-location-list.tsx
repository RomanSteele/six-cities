import { Link } from 'react-router-dom';
import { Property } from '../../types/property';
import FavoritesList from '../favorites-list/favorites-list';

type FavoritesLocationListProps={
  items: string[];
  properties: Property[];
}

function FavoritesLocationList ({ items, properties }: FavoritesLocationListProps): JSX.Element {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        { items.map((item)=>
          (
            <li className="favorites__locations-items" key={item}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to=''>
                    <span>{item}</span>
                  </Link>
                </div>
              </div>

              <FavoritesList properties={properties.filter((property)=>property.city.name === item)}/>

            </li>
          ),
        ) }
      </ul>
    </section>
  );
}

export default FavoritesLocationList;
