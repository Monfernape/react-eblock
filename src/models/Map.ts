export interface IMap {
    zoom: number
    position: {lat: number, lng: number}
}

export class UserMap implements IMap {
    zoom = 13
    position = {lat: 0, lng: 0}
}