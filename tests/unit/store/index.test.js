import { state, mutations } from "@/store";

describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const initialState = state();
    expect(initialState.isLoggedIn).toBe(false);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state.isLoggedIn).toBe(true);
    });
  });
});
