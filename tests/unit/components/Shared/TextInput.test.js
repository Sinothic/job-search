import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("comunicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "1234564",
      },
    });

    const input = wrapper.find("input");

    input.setValue("S");
    input.setValue("SP");
    const messages = wrapper.emitted()["update:modelValue"];

    expect(messages).toEqual([["S"], ["SP"]]);
  });
});
