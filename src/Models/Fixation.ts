const uuid = require('react-uuid');

export interface ILocation {
    latitude: number,
    longitude: number
}

export const generateId = () => {
    return uuid();
}

export class Fix {
    id: string = generateId();
    userId: string = "userId";
    number: string = "";
    color: string = "#ffffff";
    problemDetail: string = "";
    liveLocation: ILocation[] = [];
}