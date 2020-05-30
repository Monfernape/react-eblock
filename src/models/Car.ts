export interface MaintenanceType {
  id: string;
  option: string;
}

export interface ILocation {
  latitude: number,
  longitude: number
}

export class Car {
  Id: string = "";
  userId: string = "userId";
  name: string = "";
  model?: string = "";
  inspection?: boolean = false;
  maintenanceType?: string = "1";
  address?: string = "";
  sideNote?: string = '';
  color?: string = "#ffffff";
  liveLocation?: ILocation[] = [];
  number?: string = "";
  problemDetail?: string = "";
  position: { lat: number, lng: number } = { lat: 0, lng: 0 }
}

