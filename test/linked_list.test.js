const { LinkedList, Node } = require("../src/Linked_List");

let ll;

global.console = {
  log: jest.fn(), // console.log are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  // error: console.error,
  // warn: console.warn,
  // info: console.info,
  // debug: console.debug,
};

describe("LinkedList", () => {
  beforeEach(() => {
    ll = new LinkedList();
  });
  test("init", () => {
    expect(ll).toBeTruthy();
  });
  describe("insertFirst", () => {
    const initDatas = ["element 1", "element 2"];
    let initLength = 0;
    beforeEach(() => {
      initLength = 0;
      for (const i in initDatas) {
        ll.insertFirst(initDatas[i]);
        initLength++;
      }
    });
    test("single", () => {
      const datas = ["element 3"];
      for (const i in datas) {
        ll.insertFirst(datas[i]);
      }
      expect(ll.size).toBe(initLength + datas.length);
      expect(ll.head).toEqual(
        new Node(datas[0], new Node(initDatas[1], new Node(initDatas[0])))
      );
    });
    test("multiple", () => {
      const datas = ["element 3", "element 4"];
      for (const i in datas) {
        ll.insertFirst(datas[i]);
      }
      expect(ll.size).toBe(initLength + datas.length);
      expect(ll.head).toEqual(
        new Node(
          datas[1],
          new Node(datas[0], new Node(initDatas[1], new Node(initDatas[0])))
        )
      );
    });
  });
  describe("insertLast", () => {
    test("single", () => {
      const datas = ["element 1"];
      for (const i in datas) {
        ll.insertLast(datas[i]);
      }
      expect(ll.size).toBe(datas.length);
      expect(ll.head).toEqual(new Node(datas[0]));
    });
    test("multiple", () => {
      const datas = ["element 1", "element 2", "element 3"];
      for (const i in datas) {
        ll.insertLast(datas[i]);
      }
      expect(ll.size).toBe(datas.length);
      expect(ll.head).toEqual(
        new Node(datas[0], new Node(datas[1], new Node(datas[2])))
      );
    });
  });
  describe("insertAt", () => {
    test("first head", () => {
      const datas = [{ data: "element 1", sort: 0 }];
      for (const i in datas) {
        const { data, sort } = datas[i];
        ll.insertAt(data, sort);
      }
      expect(ll.size).toBe(datas.length);
      expect(ll.head).toEqual(new Node(datas[0].data));
    });
    test("at middle", () => {
      // prepare
      const initDatas = ["element 1", "element 2"];
      let initLength = 0;
      initLength = 0;
      for (const i in initDatas) {
        ll.insertFirst(initDatas[i]);
        initLength++;
      }

      const datas = [{ data: "element 3", sort: 1 }];
      for (const i in datas) {
        const { data, sort } = datas[i];
        ll.insertAt(data, sort);
      }
      expect(ll.size).toBe(initLength + datas.length);
      expect(ll.head).toEqual(
        new Node(initDatas[1], new Node(datas[0].data, new Node(initDatas[0])))
      );
    });
    test("less than init size", () => {
      const datas = [{ data: "element 1", sort: -100 }];
      for (const i in datas) {
        const { data, sort } = datas[i];
        ll.insertAt(data, sort);
      }
      expect(ll.size).toBe(0);
      expect(ll.head).toEqual(null);
    });
    test("over than size", () => {
      const datas = [{ data: "element 1", sort: 100 }];
      for (const i in datas) {
        const { data, sort } = datas[i];
        ll.insertAt(data, sort);
      }
      expect(ll.size).toBe(0);
      expect(ll.head).toEqual(null);
    });
  });
  describe("getAt", () => {
    const initDatas = ["element 1", "element 2", "element 3"];
    beforeEach(() => {
      for (const i in initDatas) {
        ll.insertFirst(initDatas[i]);
      }
    });
    test("get middle", () => {
      const index = 1;
      const result = ll.getAt(index);
      expect(result).toEqual(initDatas[index]);
    });
    test("less than init size", () => {
      const index = -100;
      const result = ll.getAt(index);
      expect(result).toBeFalsy();
    });
    test("over than size", () => {
      const index = 100;
      const result = ll.getAt(index);
      expect(result).toBeFalsy();
    });
  });
  describe("removeAt", () => {
    const initDatas = ["element 1", "element 2", "element 3"];
    let initLength = 0;
    beforeEach(() => {
      initLength = 0;
      for (const i in initDatas) {
        ll.insertFirst(initDatas[i]);
        initLength++;
      }
    });
    test("remove head", () => {
      ll = new LinkedList();
      ll.insertFirst("element 1");
      const index = 0;
      ll.removeAt(index);
      expect(ll.size).toBe(0);
      expect(ll.head).toEqual(null);
    });
    test("remove middle", () => {
      const index = 1;
      ll.removeAt(index);
      expect(ll.size).toBe(initLength - 1);
      expect(ll.head).toEqual(new Node(initDatas[2], new Node(initDatas[0])));
    });
    test("less than init size", () => {
      const index = -100;
      ll.removeAt(index);
      expect(ll.size).toBe(initLength);
    });
    test("over than size", () => {
      const index = 100;
      ll.removeAt(index);
      expect(ll.size).toBe(initLength);
    });
  });
  test("clearList", () => {
    // prepare
    const initDatas = ["element 1", "element 2", "element 3"];
    for (const i in initDatas) {
      ll.insertFirst(initDatas[i]);
    }

    ll.clearList();
    expect(ll.size).toBe(0);
    expect(ll.head).toEqual(null);
  });
  test("clearList", () => {
    // prepare
    const initDatas = ["element 1", "element 2", "element 3"];
    for (const i in initDatas) {
      ll.insertFirst(initDatas[i]);
    }

    const result = ll.printListData();
    expect(result).toEqual(`element 3\nelement 2\nelement 1\n`);
  });
});
