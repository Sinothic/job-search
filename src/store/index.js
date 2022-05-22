import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
};

export default createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});
