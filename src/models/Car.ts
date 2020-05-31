export interface MaintenanceType {
  id: string;
  option: string;
}

export interface ILocation {
  latitude: number,
  longitude: number
}

export class Car {
  id: string = "";
  userId: string = "userId";
  name: string = "";
  model: string = "";
  inspection: boolean = false;
  maintenanceType: string = "1"; 
  address: string = "";
  sideNote: string = '';
  color: string = "#ffffff";
  liveLocation: ILocation[] = [];
}

