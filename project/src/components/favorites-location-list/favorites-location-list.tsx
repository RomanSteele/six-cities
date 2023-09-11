import { Property } from "../../types/property";
import FavoritesList from "../favorites-list/favorites-list";

type FavoritesLocationListProps={
  items:string[],
  properties: Property[],
}

function FavoritesLocationList ({items, properties}:FavoritesLocationListProps): JSX.Element {

  return(
    <ul className="favorites__list">
{ items.map((item)=>
    <li className="favorites__locations-items" key={item}>
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </div>

  <FavoritesList properties={properties}/>

  </li>
)
}
  </ul>
  )
}

export default FavoritesLocationList;
