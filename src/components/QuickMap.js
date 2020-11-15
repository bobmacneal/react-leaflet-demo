import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import {
  OPEN_STREET_MAP_ATTRIBUTION,
  OPEN_STREET_MAP_URL,
} from '../constants'
import 'leaflet/dist/leaflet.css';
import React from 'react';

const QuickMap = ({location, zoom}) => {
  return (
    <MapContainer
      center={location}
      zoom={zoom}
    >
      <TileLayer
        url={OPEN_STREET_MAP_URL}
        attribution={OPEN_STREET_MAP_ATTRIBUTION}
      />
    </MapContainer>
  );
}

export default QuickMap;
