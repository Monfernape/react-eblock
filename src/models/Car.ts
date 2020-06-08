import { User, IUser } from './User';

export interface MaintenanceType {
  id: string;
  option: string;
}

export interface ILocation {
  latitude: number,
  longitude: number
}

export class Car {
  _id: string = "";
  userId: IUser = new User();
  name: string = "";
  model: string = "";
  inspection: boolean = false;
  maintenanceType: string = "1";
  address: string = "";
  sideNote: string = '';
  color: string = "#ffffff";
  enableLocation: boolean = false;
  liveLocation: ILocation[] = [];
}

