import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

const createRoute = (queryParams = {}) => ({
  query: {
    page: 5,
    ...queryParams,
  },
});
const createStore = (config = {}) => ({
  state: {
    jobs: Array(15).fill({}),
  },
  dispatch: jest.fn(),
  ...config,
});

const createConfig = ($route, $store) => ({
  global: {
    mocks: {
      $route,
      $store,
    },
    stubs: {
      "router-link": RouterLinkStub,
    },
  },
});

describe("JobListings", () => {
  describe("when component mounts", () => {
    it("makes call to fetch from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    const $store = createStore({
      state: {
        jobs: Array(15).fill({}),
      },
    });
    const $route = createRoute({ page: 1 });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();

    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
    expect($store.dispatch).toHaveBeenCalledWith("FETCH_JOBS");
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays given page number ", () => {
      const $route = createRoute({ page: "5" });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 5");
    });
  });

  describe("when user is on first page of job listings", () => {
    it("does not show link to previous page", () => {
      const $route = createRoute({ page: 1 });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPageLink = wrapper.find("[data-test='previous-page-link']");
      expect(previousPageLink.exists()).toBe(false);
    });

    it("shows link to the next page", async () => {
      const $route = createRoute({ page: 1 });
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPageLink = wrapper.find("[data-test='next-page-link']");
      expect(nextPageLink.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job listings", () => {
    it("does not show link to next page", async () => {
      const $route = createRoute({ page: 2 });
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPageLink = wrapper.find("[data-test='next-page-link']");
      expect(nextPageLink.exists()).toBe(false);
    });

    it("shows link to previous page", async () => {
      const $route = createRoute({ page: 2 });
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPageLink = wrapper.find("[data-test='previous-page-link']");
      expect(previousPageLink.exists()).toBe(true);
    });
  });
});
