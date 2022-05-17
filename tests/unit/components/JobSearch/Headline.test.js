import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline.vue";

describe("Headline Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introducy action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consitent interval", () => {
    jest.spyOn(global, "setInterval");

    mount(Headline);

    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when components disappears", () => {
    jest.spyOn(global, "clearInterval");

    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
