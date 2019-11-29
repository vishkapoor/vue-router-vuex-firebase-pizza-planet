import Firebase from  'firebase';
const actions = {
    logIn:  ({commit}, data) => {
        return new Promise((resolve, reject) => {
            Firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => resolve())
            .catch(e => reject(e));
        });
    },
    logOut: ({commit}) => {
        Firebase.auth().signOut()
        .then(() => {
            commit('LOGOUT');
        })
    }
}

const  mutations = {
    'LOGOUT': (state) => {
        state.user = null;
        localStorage.removeItem('user');
    }
}


const state = {
    status: '',
}

const getters = {
    isLoggedIn() {
        return localStorage.getItem('user') ? true : false;
    },
    getUser: (state) => {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}
