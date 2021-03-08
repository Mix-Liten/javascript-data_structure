const Linked_List = require("../src/Linked_List");

let ll;

describe("Linked_List", () => {
  beforeEach(() => {
    ll = new Linked_List();
  });
  test("init", () => {
    expect(ll).toBeTruthy();
  });
});
