const actions = {
    setUser: ({commit}, user) => {
        commit('SET_USER', user);
    }
}

const  mutations = {
    'SET_USER': (state, user) => {
        state.user = user ? user.email : null;
    },
}

const state = {
     user: null,
}

const getters = {
    getUser: (state) => {
        return state.user;
    },
}

export default {
    actions,
    mutations,
    state,
    getters
}
