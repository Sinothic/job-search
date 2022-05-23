import { actions, mutations, state } from "@/store";
import { getJobs } from "@/api/getJobs";
import axios from "axios";
jest.mock("@/api/getJobs");

describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const initialState = state();
    expect(initialState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const initialState = state();
    expect(initialState.jobs).toStrictEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state.isLoggedIn).toBe(true);
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

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    it("make request to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save jobs in store", async () => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          title: "Vue Developer",
        },
      ]);
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVES_JOBS", [
        {
          id: 1,
          title: "Vue Developer",
        },
      ]);
    });
  });
});
