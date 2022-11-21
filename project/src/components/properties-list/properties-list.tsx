import { Property } from '../../types/property';
import SinglePlaceCard from '../single-place-card/single-place-card';


type PropertiesListProps = {
  properties: Property[];
};


function PropertiesList({ properties }: PropertiesListProps) {

  const Props = properties.slice(0, 6);

  return (
    <>
      {Props.map((item) => (
        <SinglePlaceCard property={item} key={item.id}/>
      ))}
    </>
  );
}
export default PropertiesList;
