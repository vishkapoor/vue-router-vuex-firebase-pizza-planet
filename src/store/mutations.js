export default {
    'ADD_ORDER': (state, order) => {
        state.orders.push(order);
    },
    'SET_USER': (state, user) => {
        state.user = user ? user.email : null;
    },
}