
import { useEffect, useState } from 'react';
import { Dimensions } from '../../types/map';
import { Property } from '../../types/property';
import Map from './map';

type MapComponentProps ={
  properties: Property[] | [],
  size: Dimensions,
}


function MapComponent({ properties, size }:MapComponentProps): JSX.Element {
  const [isCityLocation, setCityLocation] = useState(properties[0].city.location);
  const [ispointsLocation, setpointsLocation] = useState(properties.map((hotel)=> hotel.location));


useEffect(()=>{
  setCityLocation(properties[0].city.location)
  setpointsLocation(properties.map((hotel)=> hotel.location))
},[properties])

  return(
    <section className="cities__map map">

        <Map
          city={isCityLocation}
          points={ispointsLocation}
          size={size}
        />
    </section>
  )
}

export default MapComponent;
