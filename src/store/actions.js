import { FETCH_JOBS, RECEIVES_JOBS } from "@/store/constants";

import { getJobs } from "@/api/getJobs";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListening = await getJobs();
    context.commit(RECEIVES_JOBS, jobListening);
  },
};

export default actions;
