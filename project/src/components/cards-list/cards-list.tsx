import { useEffect, useRef } from "react";
import { CardsListType } from "../../const";
import { Property } from "../../types/property";
import SinglePropertyCard from "../single-property-card/single-property-card";

type CardsListProps={
  properties: Property[] | [],
  listType: string,
}

function CardsList ({properties, listType}: CardsListProps): JSX.Element{

  const scrollableElementRef = useRef(null);

  return(
    <div ref={scrollableElementRef} className={`${listType === CardsListType[0].title ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {properties.map((property) =>
        <SinglePropertyCard property={property} listType={listType} key = {property.title.concat(property.id.toString())}/>
      )}
    </div>
  )

}

export default CardsList;
