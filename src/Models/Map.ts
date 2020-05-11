import { LatLng } from 'react-leaflet'
import { ReactNode } from 'react'


export interface IMap {
    zoom: number,
    position: LatLng
    children?: ReactNode
}

export class UserMap implements IMap {
    zoom = 13
    position = {lat: 0, lng: 0}
    children: undefined
}