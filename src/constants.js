export const AppRoutes = {
  ROOT: '/',
  GEO: '/geo',
  MAPS: '/maps',
}

export const OPEN_STREET_MAP_ATTRIBUTION
  = "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"

export const OPEN_STREET_MAP_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export const Locations = {
  BERLIN: {
    gps: { lat: 52.52437, lng: 13.41053 },
    label: 'Berlin',
    zoom: 13,
  },
  COPENHAGEN:
    {
      gps: { lat: 55.676098, lng: 12.568337 },
      label: 'Copenhagen',
      zoom: 12,
    },
  EDINBURGH:
    {
      gps: { lat: 55.953251, lng: -3.188267 },
      label: 'Edinburgh',
      zoom: 13,
    },
  MINNEAPOLIS:
    {
      gps: { lat: 44.977753, lng: -93.2650108 },
      label: 'Minneapolis',
      zoom: 14,
    },
  PARIS:
    {
      gps: { lat: 48.858093, lng: 2.294694  },
      label: 'Paris',
      zoom: 13,
    },
  PIPELINE:
    {
      gps: { lat: 21.664019, lng: -158.053852  },
      label: 'Banzai Pipeline',
      zoom: 13,
    },
}


