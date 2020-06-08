import {MaintenanceType} from "../models/Car";

export interface ICardsData {
    description: string[];
    viewType: string;
    image?: string;
  }

export const MaintenanceTypes : MaintenanceType[] = [
    { id: "1", option: "Tuning" },
    { id: "2", option: "Inspection" },
    { id: "3", option: "Brakes Service" },
    { id: "4", option: "Parts Replacement" }
];

export const cardsData: ICardsData[] = [
    {
      description: ["Name: Mazda LaPuta", "Number: 3228 MNY", "Order Type: Maintenance"],
      viewType: "tile"
    },
    {
      description: ["NAME: Ford Pinto", "Number: 4488", "Order Type: Break Service"],
      viewType: "tile"
    },
  ];