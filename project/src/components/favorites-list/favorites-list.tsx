import { Property } from "../../types/property";
import FavoritesPropertyCard from "../favorites-property-card.tsx/favorites-property-card";

type FavoritesListProps={
  properties: Property[];
}

function FavoritesList ({properties}: FavoritesListProps): JSX.Element{

  return(
    <div className="favorites__places">
      {properties.map((property) =>
        <FavoritesPropertyCard property={property} key = {property.title}/>
      )}
    </div>
  )

}

export default FavoritesList;
