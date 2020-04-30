const uuid = require('react-uuid');

export interface MaintenanceType {
  id: number;
  option: string;
}

export const generateId = () => {
  return uuid();
}

export class Car {
  
  id: string = "";
  userId: string = "Usman";
  carName: string = "";
  carModel: string = "";
  isInspection: boolean = false;
  selectedMaintenanceTypeId: string = "1"; 
  dtExpectedReturnDate = "2017-05-24";
  carColor: string = "";
}

