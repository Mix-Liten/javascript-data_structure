class DSet {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  values() {
    return this.collection;
  }

  has(element) {
    return this.collection.includes(element);
  }

  add(element) {
    if (this.has(element)) return;
    this.collection.push(element);
    this.size++;
    return this.collection;
  }

  remove(element) {
    if (!this.has(element)) return;
    const index = this.collection.indexOf(element);
    const tmp = this.collection.slice();
    tmp.splice(index, 1);
    this.collection = tmp;
    this.size--;
  }

  // 聯集
  union(otherSet) {
    const unionSet = new DSet();
    const mainSet = this.values();
    const subSet = otherSet.values();
    mainSet.forEach((v) => unionSet.add(v));
    subSet.forEach((v) => unionSet.add(v));
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new DSet();
    const mainSet = this.values();
    for (let i = 0; i < mainSet.length; i++) {
      const element = mainSet[i];
      if (otherSet.has(element)) intersectionSet.add(element);
    }
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new DSet();
    const mainSet = this.values();
    for (let i = 0; i < mainSet.length; i++) {
      const element = mainSet[i];
      if (!otherSet.has(element)) differenceSet.add(element);
    }
    return differenceSet;
  }

  // 子集合
  contain(otherSet) {
    const mainSet = this.values();
    const subSet = otherSet.values();
    let result = true;
    if (mainSet.size < subSet.size) return false;
    for (let i = 0; i < mainSet.length; i++) {
      const element = mainSet[i];
      if (!otherSet.has(element)) {
        result = false;
        break;
      }
    }
    return result;
  }
}

// const dSet = new DSet();

module.exports = DSet;
