import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { AppRoute } from '../../const';
import { Property } from '../../types/property';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type MapInsertProps = {
  properties: Property[];
};

function MapInsert({ properties }: MapInsertProps): JSX.Element {

  const propertiesOfCity = {
    latitude: properties[0].city.location.latitude,
    longtitude: properties[0].city.location.longitude,
    zoom: properties[0].city.location.zoom,
  };


  const positionLatitude = propertiesOfCity.latitude;
  const positionLongtitude = propertiesOfCity.longtitude;

  function FlyMapTo() {

    const map = useMap();

    useEffect(() => {
      map.flyTo([positionLatitude, positionLongtitude]);
    }, [map]);

    return null;
  }

  return (

    <MapContainer style={{ width: '100%', height: '100%' }} center={[positionLatitude, positionLongtitude]} zoom={propertiesOfCity.zoom} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((item) => (
        <Marker position={[item.location.latitude, item.location.longitude]} zoom={item.location.zoom} key={item.location.latitude * Math.random()}>
          <Popup >
            <Link to={((`${AppRoute.Property}/${item.id}`))}>
              <img className="place-card__image" src={item.previewImage} width="150" height="70" alt="Place pic" style={{ margin: 'auto' }}></img>
              {item.title}
            </Link>
          </Popup>
        </Marker>
      ))}
      <FlyMapTo />
    </MapContainer>


  );
}
export default MapInsert;
