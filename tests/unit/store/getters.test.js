import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("find unique organizations from job list", () => {
      const state = {
        jobs: [
          { organization: "FACEBOOK" },
          { organization: "GOOGLE" },
          { organization: "AMAZON" },
          { organization: "FACEBOOK" },
          { organization: "GOOGLE" },
          { organization: "AMAZON" },
        ],
      };

      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["GOOGLE", "FACEBOOK", "AMAZON"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    describe("when any organization is selected", () => {
      it("returns all jobs without any filter", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Yahoo" },
            { organization: "Amazon" },
            { organization: "Facebook" },
          ],
          selectedOrganizations: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);

        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Yahoo" },
          { organization: "Amazon" },
          { organization: "Facebook" },
        ]);
      });
    });

    it("identifies jobs that are  associated with the give organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Yahoo" },
          { organization: "Amazon" },
          { organization: "Facebook" },
        ],
        selectedOrganizations: ["Google", "Yahoo"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);

      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Yahoo" },
      ]);
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("find unique job types from job list", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Full-time" },
        ],
      };

      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Part-time"]));
    });
  });

  describe("FILTERED_JOBS_BY_TYPE", () => {
    describe("when any job type is selected", () => {
      it("returns all jobs without any filter", () => {
        const state = {
          jobs: [
            { jobType: "Part-time" },
            { jobType: "Full-time" },
            { jobType: "Part-time" },
          ],
          selectedJobTypes: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPE(state);

        expect(filteredJobs).toEqual([
          { jobType: "Part-time" },
          { jobType: "Full-time" },
          { jobType: "Part-time" },
        ]);
      });
    });

    it("identifies jobs that are  associated with the give job type", () => {
      const state = {
        jobs: [
          { jobType: "Part-time" },
          { jobType: "Temporary" },
          { jobType: "Full-time" },
        ],
        selectedJobTypes: ["Full-time", "Part-time"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPE(state);

      expect(filteredJobs).toEqual([
        { jobType: "Part-time" },
        { jobType: "Full-time" },
      ]);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when any job type is selected", () => {
      it("includes job", () => {
        const state = {
          selectedJobTypes: [],
        };
        const job = {
          jobType: "Full-time",
        };

        const isIncludedJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(isIncludedJob).toBe(true);
      });
    });

    it("identifies if the job is associated with given job type", () => {
      const state = {
        selectedJobTypes: ["Full-time", "Part-time"],
      };
      const job = {
        jobType: "Full-time",
      };

      const isIncludedJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(isIncludedJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when any organization is selected", () => {
      it("includes job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = {
          organization: "Google",
        };

        const isIncludedJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(isIncludedJob).toBe(true);
      });
    });

    it("identifies if the job is associated with given organization", () => {
      const state = {
        selectedOrganizations: ["Google", "Meta"],
      };
      const job = {
        organization: "Meta",
      };

      const isIncludedJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(isIncludedJob).toBe(true);
    });
  });
});
