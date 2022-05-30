import state from "@/store/state";

describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const initialState = state();
    expect(initialState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const initialState = state();
    expect(initialState.jobs).toStrictEqual([]);
  });

  it("store organizations that the user wants filter by", () => {
    const initialState = state();
    expect(initialState.selectedOrganizations).toEqual([]);
  });
});
