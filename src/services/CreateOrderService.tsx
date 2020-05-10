import {Car} from '../Models/Car';

    export const setOrder = (data: Car) => {
        let activeUser = 'usman';
        let getStoredData = localStorage.getItem("orderusman");
        let rowsData = getStoredData && getStoredData.length > 0 ? [...JSON.parse(getStoredData), data]: [data];
        localStorage.setItem(`order${activeUser}`, JSON.stringify(rowsData));
    }