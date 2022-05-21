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
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset();
  });

  it("fetches job list", () => {
    const $route = createRoute();
    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(21).fill({}) });
    const $route = createRoute({ page: 1 });
    const wrapper = shallowMount(JobListings, createConfig($route));
    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined });
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays given page number ", () => {
      const $route = createRoute({ page: "5" });
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 5");
    });
  });

  describe("when user is on first page of job listings", () => {
    it("does not show link to previous page", () => {
      const $route = createRoute({ page: 1 });
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPageLink = wrapper.find("[data-test='previous-page-link']");
      expect(previousPageLink.exists()).toBe(false);
    });

    it("shows link to the next page", async () => {
      const $route = createRoute({ page: 1 });
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPageLink = wrapper.find("[data-test='next-page-link']");
      expect(nextPageLink.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job listings", () => {
    it("does not show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 2 });
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPageLink = wrapper.find("[data-test='next-page-link']");
      expect(nextPageLink.exists()).toBe(false);
    });

    it("shows link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 2 });
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPageLink = wrapper.find("[data-test='previous-page-link']");
      expect(previousPageLink.exists()).toBe(true);
    });
  });
});
