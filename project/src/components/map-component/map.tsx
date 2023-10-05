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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultCustomIcon = new leaflet.Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const centerMapStyle: React.CSSProperties = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: size.height,
    width: size.width,
  };

  return <div style={{ ...size, ...centerMapStyle }} ref={mapRef} data-testid={'leaflet-map'}></div>;
}

export default Map;
