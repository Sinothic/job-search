import { mount } from "@vue/test-utils";

import JobFilterSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue";

describe("JobFilterSidebarOrganizations", () => {
  it("renders unique list of organizations from job list", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Facebook", "Meta"]),
      },
    };
    const wrapper = mount(JobFilterSidebarOrganizations, {
      global: {
        mocks: {
          $store,
        },
        stubs: {
          "font-awesome-icon": true,
        },
      },
    });

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());
    expect(organizations).toEqual(["Facebook", "Meta"]);
  });
});
