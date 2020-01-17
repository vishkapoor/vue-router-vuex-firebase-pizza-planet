import { firebaseAction } from 'vuexfire';

const actions = {
    setMenuRef: firebaseAction(( { bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('items', ref);
    }),
}

const  mutations = {

}

const state = {
    items: [],
}

const getters = {
    getItems: (state) => {
        return state.items;
    },
}

export default {
    actions,
    mutations,
    state,
    getters
}
