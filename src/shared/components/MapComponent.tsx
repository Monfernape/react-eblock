import React from 'react'
import { Map, Marker, Popup } from 'react-leaflet'
import { UserMap } from '../../models/Map'

export const MapComponent: React.FC<UserMap> = ({position, zoom}) => (
    <Map center={position} zoom={zoom}>
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
    )
