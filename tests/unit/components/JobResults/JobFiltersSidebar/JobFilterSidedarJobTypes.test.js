import { mount } from "@vue/test-utils";

import JobFilterSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";

describe("JobFilterSidebarJobTypes", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "font-awesome-icon": true,
      },
    },
  });
  it("renders unique list of job types from job list", async () => {
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
      },
    };
    const wrapper = mount(JobFilterSidebarJobTypes, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());
    expect(jobTypes).toEqual(["Full-time", "Part-time"]);
  });

  it("comunicates that user has selected a checkbox for job type", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
      },
      commit,
    };

    const wrapper = mount(JobFilterSidebarJobTypes, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const fullTimeInput = wrapper.find("[data-test='Full-time']");
    await fullTimeInput.setChecked();
    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
      "Full-time",
    ]);
  });
});
