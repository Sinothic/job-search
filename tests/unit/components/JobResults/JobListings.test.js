import axios from "axios";
import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";
const createRoute = (queryParams = {}) => ({
  query: {
    page: 5,
    ...queryParams,
  },
});

const createConfig = ($route) => ({
  global: {
    mocks: {
      $route,
    },
    stubs: {
      "router-link": RouterLinkStub,
    },
  },
});

describe("JobListings", () => {
  it("fetches job list", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();
    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(21).fill({}) });
    const $route = createRoute({ page: 1 });
    const wrapper = shallowMount(JobListings, createConfig($route));
    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
