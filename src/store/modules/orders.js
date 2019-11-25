const actions = {
    addOrder: ({commit}, order) => {
        commit('ADD_ORDER', order);
    },
}

const  mutations = {
    'ADD_ORDER': (state, order) => {
        state.orders.push(order);
    },
}

const state = {
    orders: [],
}

const getters = {
    numberOfOrders: (state) => {
        return state.orders.length;
    },
    getOrders: (state) => {
        return state.orders;
    },
}

export default {
    actions,
    mutations,
    state,
    getters
}
