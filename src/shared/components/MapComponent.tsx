import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { UserMap } from '../../models/Map'

export const MapComponent: React.FC<UserMap> = ({ position, zoom }) => {
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}
