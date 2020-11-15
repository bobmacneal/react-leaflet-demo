import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import {
  OPEN_STREET_MAP_ATTRIBUTION,
  OPEN_STREET_MAP_URL,
} from '../constants'
import PropTypes from 'prop-types'
import React from 'react'

const QuickMap = ({location, zoom}) => {
  return (
    <MapContainer
      center={location}
      zoom={zoom}
    >
      <TileLayer
        attribution={OPEN_STREET_MAP_ATTRIBUTION}
        url={OPEN_STREET_MAP_URL}
      />
    </MapContainer>
  )
}

QuickMap.propTypes = {
  location:  PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number.isRequired,
}

export default QuickMap
