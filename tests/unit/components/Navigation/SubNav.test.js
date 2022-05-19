import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav Component", () => {
  const createConfig = (routerNome) => ({
    global: {
      mocks: {
        $route: {
          name: routerNome,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when  user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      const wrapper = mount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when  user is not on job page", () => {
    it("does NOT displays job count", () => {
      const routeName = "Home";

      const wrapper = mount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
