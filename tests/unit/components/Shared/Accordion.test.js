import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  it("renders child", async () => {
    const wrapper = mount(Accordion, {
      slots: {
        default: "<h2>My Child Component</h2>",
      },
    });

    expect(wrapper.text()).not.toMatch("My Child Component");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My Child Component");
  });
});
