import { mount } from "@vue/test-utils";
import SubNav from "@/components/SubNav.vue";

describe("SubNav Component", () => {
  describe("when  user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: true,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when  user is not on job page", () => {
    it("does NOT displays job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: false,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
