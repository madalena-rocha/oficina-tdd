const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("Deve criar uma fila", () => {
    //const queue = new Queue();

    expect(queue).toEqual({ elements: [] });
  });

  it("Deve ser capaz de calcular o tamanho da fila", () => {
    expect(queue.size()).toEqual(0);
  });

  it("Deve ser capaz de adicionar um item na fila", () => {
    queue.add("item1");

    expect(queue.elements).toEqual(["item1"]);
  });

  it("Deve escolher o primeiro item da fila", () => {
    queue.add("primeiroItem");
    queue.add("segundoItem");

    expect(queue.peek()).toBe("primeiroItem");
  });

  it("Deve remover o primeiro item da fila", () => {
    queue.add("primeiroItem");
    queue.add("segundoItem");

    queue.dequeue();
    expect(queue.elements).toEqual(["segundoItem"]);
  });

  it("peek deve retornar null se a fila estiver vazia", () => {
    expect(queue.peek()).toBeNull();
  });

  it("dequeue deve retornar null se a fila estiver vazia", () => {
    expect(queue.dequeue()).toBeNull();
  });
});
