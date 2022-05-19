import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directsuser to job results page with user's search parameters", async () => {
      const push = jest.fn();
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router: { push },
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const inputRole = wrapper.find("[data-test='input-role']");
      await inputRole.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='input-location']");
      await locationInput.setValue("Dallas");

      const submitButton = wrapper.find("[data-test='button-submit']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalled();
      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Dallas",
        },
      });
    });
  });
});
