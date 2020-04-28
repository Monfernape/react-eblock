export interface MaintenanceType {
  id: number;
  option: string;
}

export class CreateOrderModel {
  
  id: string = "";
  userName: string = "";
  carName: string = "";
  carModel: string = "";
  isInspection: boolean = false;
  selectedMaintenanceTypeId: string = "1"; 
  dtExpectedReturnDate = "";
  carColor: string = "";
}

export default CreateOrderModel;