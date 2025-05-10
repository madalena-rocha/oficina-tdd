class Queue {
  elements;

  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    this.elements.push(item);
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }

    return this.elements[0];
  }

  dequeue() {
    if (this.size() === 0) {
      return null;
    }

    return this.elements.shift();
  }
}

module.exports = Queue;
