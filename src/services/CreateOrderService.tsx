import {Car} from '../models/Car';

    export const setOrder = (data: Car[]) => {
        let getStoredOrders = {};
        let activeUser = 'usman';
        console.log("data: ", data);
        getStoredOrders = (localStorage.getItem(`order${activeUser}`) || {});
        let addedNewData = getStoredOrders ? {...getStoredOrders}: [data];
        localStorage.setItem('activeUser', JSON.stringify(addedNewData));
    }