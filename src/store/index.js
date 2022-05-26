import { createStore } from "vuex";

import { getJobs } from "@/api/getJobs";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVES_JOBS = "RECEIVES_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

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

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => {
      uniqueOrganizations.add(job.organization);
    });
    return uniqueOrganizations;
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
});
