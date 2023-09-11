import { Property } from "../../types/property";
import SinglePropertyCard from "../single-property-card/single-property-card";

type CardsListProps={
  properties: Property[];
}

function CardsList ({properties}: CardsListProps): JSX.Element{

  return(
    <div className="cities__places-list places__list tabs__content">
      {properties.map((property) =>
        <SinglePropertyCard property={property} key = {property.title}/>
      )}
    </div>
  )

}

export default CardsList;
