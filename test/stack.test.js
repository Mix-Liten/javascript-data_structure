const Stack = require("../src/Stack");

let stack;

describe("Stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });
  test("init", () => {
    expect(stack).toBeTruthy();
  });
  test("single push", () => {
    stack.push("element");
    expect(stack.size).toBe(1);
    expect(stack.data).toEqual(["element"]);
  });
  test("multiple push", () => {
    stack.push("element 1");
    stack.push("element 2");
    stack.push("element 3");
    expect(stack.size).toBe(3);
    expect(stack.data).toEqual(["element 1", "element 2", "element 3"]);
  });
  test("pop empty", () => {
    const result = stack.pop();
    expect(result).toEqual(undefined);
  });
  test("single pop", () => {
    stack.push("element");
    stack.pop();
    expect(stack.size).toBe(0);
    expect(stack.data).toEqual([]);
  });
  test("multiple pop", () => {
    stack.push("element 1");
    stack.push("element 2");
    stack.push("element 3");
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(1);
    expect(stack.data).toEqual(["element 1"]);
  });
  test("peek", () => {
    stack.push("element 1");
    const peek1 = stack.peek();
    expect(peek1).toEqual("element 1");
    stack.push("element 2");
    stack.push("element 3");
    const peek2 = stack.peek();
    expect(peek2).toEqual("element 3");
  });
  test("isEmpty", () => {
    const result1 = stack.isEmpty();
    expect(result1).toBe(true);
    stack.push("element");
    const result2 = stack.isEmpty();
    expect(result2).toBe(false);
  });
  test("print", () => {
    stack.push("1");
    stack.push("2");
    stack.push("3");
    const result = stack.print();
    expect(result).toEqual("123");
  });
  test("clear", () => {
    stack.push("element 1");
    stack.push("element 2");
    stack.push("element 3");
    stack.clear();
    expect(stack.size).toBe(0);
    expect(stack.data).toEqual([]);
  });
});
