

import FavoritesSinglePlaceCard from '../favorites-single-place-card/favorites-single-place-card';
import { Cities } from '../../const';
import { Property } from '../../types/property';

type FavoritesListProps = {
  FavoriteProps: Property[];
};


function FavoritesList({ FavoriteProps }: FavoritesListProps) {


  const CitiesToDraw: string[] = [];

  Cities.forEach((e) => {
    if (FavoriteProps.some((element) => element.city.name === e)){
      CitiesToDraw.push(e);
    }
  });


  return (
    <ul className="favorites__list">
      { CitiesToDraw.map((city: string) => (
        <li className="favorites__locations-items" key={city.concat('ID')}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">

            {FavoriteProps.map((item) => (
              item.city.name === city ? <FavoritesSinglePlaceCard property={item} key={item.id}/> : ''
            ))}

          </div>
        </li>

      ))}

    </ul>
  );
}
export default FavoritesList;

