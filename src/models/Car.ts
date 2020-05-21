const uuid = require('react-uuid');

export interface MaintenanceType {
  id: string;
  option: string;
}

export interface ILocation {
  latitude: number,
  longitude: number
} 

export const generateId = () => {
  return uuid();
}

export class Car {
  Id: string = generateId();
  UserId: string = "userId";
  Name: string = "";
  Model: string = "";
  Inspection: boolean = false;
  MaintenanceType: string = "1"; 
  address: string = "";
  sideNote: string = '';
  Color: string = "#ffffff";
  liveLocation: ILocation[] = [];
}

