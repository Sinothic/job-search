import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_JOB_TYPE,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
} from "@/store/constants";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => {
      uniqueOrganizations.add(job.organization);
    });
    return uniqueOrganizations;
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length == 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
  },
  [UNIQUE_JOB_TYPES](state) {
    const jobTypes = new Set();
    state.jobs.forEach((job) => jobTypes.add(job.jobType));
    return jobTypes;
  },
  [FILTERED_JOBS_BY_JOB_TYPE](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) => {
      return state.selectedJobTypes.includes(job.jobType);
    });
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  },
};

export default getters;
