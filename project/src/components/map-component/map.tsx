import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { CityLocation, Dimensions, PointLocation } from '../../types/map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: CityLocation;
  points: PointLocation[];
  size: Dimensions;
};

function Map({ city, points, size }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = new leaflet.Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new leaflet.Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .setIcon(defaultCustomIcon)
          .addTo(map);


        marker.on('mouseover', () => {
          marker.setIcon(currentCustomIcon);
        });

        marker.on('mouseout', () => {
          marker.setIcon(defaultCustomIcon);
        });
      });
    }
  }, [map, points, defaultCustomIcon, currentCustomIcon]);

  return <div style={size} ref={mapRef}></div>;
}

export default Map;
