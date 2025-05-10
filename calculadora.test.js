const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it("Deverá retornar a soma de dois números", () => {
    //const calculadora = new Calculadora();

    expect(calculadora.soma(2, 5)).toBe(7);
  });

  it("Deverá retornar a subtração de dois números", () => {
    expect(calculadora.subtracao(2, 1)).toBe(1);
  });

  it("Deverá retornar a multiplicação entre dois números", () => {
    expect(calculadora.multiplicacao(2, 3)).toBe(6);
  });

  it("Deverá retornar a divisao entre dois números", () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });
});
