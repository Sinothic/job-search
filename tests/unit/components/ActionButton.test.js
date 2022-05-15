import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const text = "I'm so clickable";
    const type = "primary";
    const wrapper = mount(ActionButton, {
      props: {
        text,
        type,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("applies one of serveral styles to button", () => {
    const text = "I'm so clickable";
    const type = "primary";
    const wrapper = mount(ActionButton, {
      props: {
        text,
        type,
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBeTruthy();
  });
});
