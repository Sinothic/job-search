import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
jest.mock("vuex");
jest.mock("vue-router");

describe("SubNav Component", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when  user is on job page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({
        name: "JobResults",
      });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const wrapper = mount(SubNav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT displays job count", () => {
      useRoute.mockReturnValue({
        name: "Home",
      });
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [],
        },
      });

      const wrapper = mount(SubNav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
