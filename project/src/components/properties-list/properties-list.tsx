
import { useEffect, useState } from 'react';
import { Property } from '../../types/property';
import SinglePlaceCard from '../single-place-card/single-place-card';


type PropertiesListProps = {
  properties: Property[];
};


function PropertiesList({ properties }: PropertiesListProps) {

  const [page, setPage] = useState(1);

  const Props = properties.slice(0, (10 * page));
  const PropsMaxLength = properties.length;
  const PropertyWindowPiece = document.getElementById('element-to-scroll');

  useEffect(() =>{

    if (PropertyWindowPiece !== null && Props.length < PropsMaxLength){
      const scrollHandler = () => {
        if ((PropertyWindowPiece.scrollHeight - PropertyWindowPiece.scrollTop <= PropertyWindowPiece.clientHeight + 50)){
          setPage(page + 1);
        }
      };
      PropertyWindowPiece.addEventListener('scroll', scrollHandler);
      return function (){
        PropertyWindowPiece.removeEventListener('scroll', scrollHandler);
      };
    }}, [PropertyWindowPiece, Props.length, PropsMaxLength, page]
  );

  return (
    <>
      {Props.map((item) => (
        <SinglePlaceCard property={item} key={item.id}/>
      ))}
    </>
  );
}
export default PropertiesList;
