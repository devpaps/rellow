import Vuex from 'vuex'

// actions updates the state
// getters access  our state
// mutations Commit + track state state changes
// actions calls mutations that update state

const createStore = () => {
  return new Vuex.Store({
    state: {
      meddelande: '',
      email: '',
      namn: '',
      formValid: false
    },
    mutations: {
      update_meddelande(state, payload) {
        state.meddelande = payload;
      },
      update_email(state, payload) {
        state.email = payload;
      },
      update_namn(state, payload) {
        state.namn = payload;
      } 
    }
  })
}

export default createStore

/* export const state = () => ({
  meddelande: '',
  email: '',
  namn: '',
  formValid: false
})

export const mutations = {
  update_meddelande(state, payload) {
    state.meddelande = payload;
  },
  update_email(state, payload) {
    state.email = payload;
  },
  update_namn(state, payload) {
    state.namn = payload;
  }
}

export const actions = {
  updateMeddelande({commit},context, text) {
    context.commit("update_meddelande", text);
  },
  updateEmail(context, mail) {
    context.commit("update_email", mail);
  },
  updateNamn(context, namn) {
    context.commit("update_namn", namn);
  }
};

export const getters = {
  meddelande: (state) => {
    return state.meddelande;
  },
  email: (state) => {
    return state.email;
  },
  namn: (state) => {
    return state.namn;
  }
}
 */



