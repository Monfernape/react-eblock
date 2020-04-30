const uuid = require('react-uuid');

export interface MaintenanceType {
  id: string;
  option: string;
}

export const generateId = () => {
  return uuid();
}

export class Car {
  Id: string = "";
  UserId: string = "Usman";
  Name: string = "";
  Model: string = "";
  Inspection: boolean = false;
  MaintenanceType: string = "1"; 
  ExpectedReturnDate = "2017-05-24";
  Color: string = "#ffffff";
}

