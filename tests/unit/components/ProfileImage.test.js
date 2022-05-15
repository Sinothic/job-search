import { mount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage.vue";

describe("ProfileImage Component", () => {
  it("renders", () => {
    const wrapper = mount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
