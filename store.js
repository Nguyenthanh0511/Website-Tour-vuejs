// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
  },
});