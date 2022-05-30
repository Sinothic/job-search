import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state.isLoggedIn).toBe(true);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("update organizations that the user chosen to filter by", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["ORG-1", "ORG-2"]);
      expect(state).toEqual({ selectedOrganizations: ["ORG-1", "ORG-2"] });
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("update job types that the user chosen to filter by", () => {
      const state = { selectedJobTypes: [] };
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
      expect(state).toEqual({
        selectedJobTypes: ["Full-time", "Part-time"],
      });
    });
  });

  describe("RECEIVES_JOBS", () => {
    it("receives jobs from API call", () => {
      const state = {
        jobs: [],
      };

      mutations.RECEIVES_JOBS(state, ["JOB 1", "JOB 2"]);
      expect(state.jobs).toEqual(["JOB 1", "JOB 2"]);
    });
  });
});
