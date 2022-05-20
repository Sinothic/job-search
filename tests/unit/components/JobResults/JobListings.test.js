import axios from "axios";
import { shallowMount, flushPromises } from "@vue/test-utils";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  it("fetches job list", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each job received", async () => {
    axios.get.mockResolvedValue({ data: Array(21).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(21);
  });
});
