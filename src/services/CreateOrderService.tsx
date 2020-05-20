import { Car } from '../models/Car';
import { Fix } from '../models/Fixation';

let activeUser = 'usman';
export const maintenanceOrder = (data: Car) => {
    let getStoredData = JSON.parse(localStorage.getItem(`order${activeUser}`) || "");
    let rowsData = getStoredData && getStoredData.length > 0 ? [...getStoredData, data] : [data];
    localStorage.setItem(`order${activeUser}`, JSON.stringify(rowsData));
}

export const fixationOrder = (data: Fix) => {
    let getStoredData = JSON.parse(localStorage.getItem(`fixationOrder${activeUser}`) || "");
    let rowsData = getStoredData && getStoredData.length > 0 ? [...getStoredData, data] : [data];
    localStorage.setItem(`order${activeUser}`, JSON.stringify(rowsData));
}