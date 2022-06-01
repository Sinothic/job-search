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

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization and job type", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const job = { id: 1, jobType: "Full-time", organization: "Google" };
      const state = {
        jobs: [job],
      };
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
      };

      const filteredJob = getters.FILTERED_JOBS(state, mockGetters);
      expect(filteredJob).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
    });
  });
});
