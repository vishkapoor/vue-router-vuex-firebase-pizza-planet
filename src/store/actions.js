export default {
    addOrder: ({commit}, order) => {
        commit('ADD_ORDER', order);
    },
    setUser: ({commit}, user) => {
        commit('SET_USER', user);
    }
}