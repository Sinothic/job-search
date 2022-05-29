import { mount } from "@vue/test-utils";

import JobFilterSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue";

describe("JobFilterSidebarOrganizations", () => {
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
  it("renders unique list of organizations from job list", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Facebook", "Meta"]),
      },
    };
    const wrapper = mount(JobFilterSidebarOrganizations, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());
    expect(organizations).toEqual(["Facebook", "Meta"]);
  });

  it("comunicates that user has selected a checkbox for organization", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Facebook", "Meta"]),
      },
      commit,
    };

    const wrapper = mount(JobFilterSidebarOrganizations, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const metaInput = wrapper.find("[data-test='Meta']");
    await metaInput.setChecked();
    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", ["Meta"]);
  });
});
