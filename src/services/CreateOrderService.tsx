import CreateOrderService from '../Models/CreateOrderModel';

    export const setOrder = (data: CreateOrderService[]) => {
        let getStoredOrders = {};
        let activeUser = 'usman';
        console.log("data: ", data);
        getStoredOrders = (localStorage.getItem(`order${activeUser}`) || {});
        let addedNewData = getStoredOrders ? {...getStoredOrders}: [data];
        localStorage.setItem('activeUser', JSON.stringify(addedNewData));
    }