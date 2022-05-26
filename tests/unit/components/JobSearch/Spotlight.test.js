import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

describe("Spotligth", () => {
  const mockSpotlightResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...data,
        },
      ],
    });
  };

  it("provide img attribute to parent component", async () => {
    const data = { img: "Some image" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h2> {{slotProps.img}} </h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some image");
  });

  it("provide title attribute to parent component", async () => {
    const data = { title: "Some title" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h2> {{slotProps.title}} </h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some title");
  });

  it("provide description attribute to parent component", async () => {
    const data = { description: "Some description" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h2> {{slotProps.description}} </h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some description");
  });
});
