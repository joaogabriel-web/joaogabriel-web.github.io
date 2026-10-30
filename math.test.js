const { add, subtract, multiply, divide } = require('./math');

describe('Operações matemáticas', () => {
  test('deve somar dois números', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('deve subtrair dois números', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('deve multiplicar dois números', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('deve dividir dois números', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisão por zero não é permitida');
  });
});
