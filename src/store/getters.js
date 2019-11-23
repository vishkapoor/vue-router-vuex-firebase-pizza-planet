export default {
    getItems: (state) => {
        return state.items;
    },
    numberOfOrders: (state) => {
        return state.orders.length;
    },
    getOrders: (state) => {
        return state.orders;
    },
    getUser: (state) => {
        return state.user;
    },
}