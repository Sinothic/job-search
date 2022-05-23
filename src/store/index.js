import { createStore } from "vuex";

import { getJobs } from "@/api/getJobs";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVES_JOBS = "RECEIVES_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVES_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListening = await getJobs();
    context.commit(RECEIVES_JOBS, jobListening);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});
