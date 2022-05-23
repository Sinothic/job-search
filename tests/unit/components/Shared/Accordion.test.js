import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        "font-awesome-icon": true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      default: "<h2>My Child Component</h2>",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<h2>My Child Component</h2>",
    };
    const config = { slots };
    const wrapper = mount(Accordion, createConfig(config));

    expect(wrapper.text()).not.toMatch("My Child Component");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My Child Component");
  });

  describe("when we do not provide custom child contatent", () => {
    it("renders default content", async () => {
      const slots = {};
      const config = { slots };
      const wrapper = mount(Accordion, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("Whoops, somebody forgot to populate me!");
    });
  });
});
