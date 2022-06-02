import { useRoute } from "vue-router";
jest.mock("vue-router");

import useConfirmRoute from "@/composables/useConfirmeRoute";

describe("useConfirmeRoute", () => {
  it("determines if page route matches specified route", () => {
    useRoute.mockReturnValue({
      name: "Home",
    });
    const result = useConfirmRoute("Home");
    expect(result.value).toBe(true);
  });
});
