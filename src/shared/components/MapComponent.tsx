import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { UserMap } from '../../models/Map'

export const MapComponent: React.FC<UserMap> = ({ position, zoom }) => {
  console.log("Position", position)
  return (
      <Map center={[position.lat, position.lng]} zoom={zoom} style={{width: '100%',height: '100vh'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[position.lat, position.lng]}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
  )
}
