'use strict'

const { minimo,
   mayor, 
   total,
   totalBis, 
   promedio, 
   promedioBis, 
   crearListaEnlazada, 
   Matriz,    
  Torre, 

  } = require('../index');

describe('Funciones de arrays', () => {
  const arr = [10, 5, 20, 8];

  test('minimo devuelve el número más bajo', () => {
    expect(minimo(arr)).toBe(5);
  });

  test('mayor devuelve el número más alto', () => {
    expect(mayor(arr)).toBe(20);
  });

  test('total usa reduce para sumar', () => {
    expect(total(arr)).toBe(43);
  });

  test('totalBis usa bucle para sumar', () => {
    expect(totalBis(arr)).toBe(43);
  });

  test('promedio usa reduce', () => {
    expect(promedio(arr)).toBe(43 / 4);
  });

  test('promedioBis usa bucle', () => {
    expect(promedioBis(arr)).toBe(43 / 4);
  });

  test('funciones manejan arrays con un solo elemento', () => {
    expect(minimo([7])).toBe(7);
    expect(mayor([7])).toBe(7);
    expect(total([7])).toBe(7);
    expect(totalBis([7])).toBe(7);
    expect(promedio([7])).toBe(7);
    expect(promedioBis([7])).toBe(7);
  });

  test('funciones manejan arrays con valores negativos', () => {
    const arrNeg = [-10, -20, -5];
    expect(minimo(arrNeg)).toBe(-20);
    expect(mayor(arrNeg)).toBe(-5);
    expect(total(arrNeg)).toBe(-35);
    expect(totalBis(arrNeg)).toBe(-35);
    expect(promedio(arrNeg)).toBeCloseTo(-11.666, 2);
    expect(promedioBis(arrNeg)).toBeCloseTo(-11.666, 2);
  });
});

describe('Lista Enlazada Simple', () => {
  let lista;

  beforeEach(() => {
    lista = crearListaEnlazada();
  });

  test('push y print funcionan', () => {
    lista.push(1);
    lista.push(2);
    lista.push(3);
    expect(lista.len).toBe(3);
  });

  test('insertFirst agrega al principio', () => {
    lista.push(10);
    lista.insertFirst(5);
    expect(lista.point.data).toBe(5);
  });

  test('insert agrega en posición específica', () => {
    lista.push(1);
    lista.push(3);
    lista.insert(2, 1);
    expect(lista.point.next.data).toBe(2);
  });

  test('deleteFirst elimina el primer nodo', () => {
    lista.push(100);
    lista.push(200);
    lista.deleteFirst();
    expect(lista.point.data).toBe(200);
  });

  test('deleteLast elimina el último nodo', () => {
    lista.push(1);
    lista.push(2);
    lista.deleteLast();
    expect(lista.point.next).toBe(null);
  });

  test('find devuelve nodo existente', () => {
    lista.push(99);
    lista.push(42);
    const encontrado = lista.find(42);
    expect(encontrado.data).toBe(42);
  });

  test('find devuelve undefined si no existe', () => {
    lista.push(99);
    expect(lista.find(123)).toBeUndefined();
  });
});

describe('Clase Matriz', () => {
  let matA, matB;

  beforeEach(() => {
    matA = new Matriz(2, 2);
    matB = new Matriz(2, 2);

    matA.data = [
      [1, 2],
      [3, 4]
    ];
    matB.data = [
      [5, 6],
      [7, 8]
    ];
  });

  test('buscar devuelve coordenadas correctas', () => {
    expect(matA.buscar(3)).toEqual([1, 0]);
    expect(matA.buscar(9)).toBeUndefined();
  });

  test('sumar suma correctamente dos matrices', () => {
    const resultado = matA.sumar(matB);
    expect(resultado.data).toEqual([
      [6, 8],
      [10, 12]
    ]);
  });

  test('restar resta correctamente dos matrices', () => {
    const resultado = matB.restar(matA);
    expect(resultado.data).toEqual([
      [4, 4],
      [4, 4]
    ]);
  });

  test('multiplicar realiza producto matricial correctamente', () => {
    const resultado = matA.multiplicar(matB);
    expect(resultado.data).toEqual([
      [19, 22],
      [43, 50]
    ]);
  });

  test('sumar lanza error con dimensiones incompatibles', () => {
    const matC = new Matriz(3, 2);
    expect(() => matA.sumar(matC)).toThrow('Las matrices deben tener las mismas dimensiones para sumar.');
  });

  test('multiplicar lanza error con dimensiones incompatibles', () => {
    const matC = new Matriz(3, 2);
    expect(() => matA.multiplicar(matC)).toThrow('Las dimensiones no son compatibles para multiplicación.');
  });
});


describe('Torre de Hanoi', () => {
  test('resuelve correctamente para 3 discos', () => {
    const torre = new Torre();
    torre.init(3);
    torre.solve();

    expect(torre.getTorre1().length).toBe(0);
    expect(torre.getTorre2().length).toBe(0);

    const t3 = torre.getTorre3();
    expect(t3.length).toBe(3);

    expect(t3).toEqual([3, 2, 1]);
  });
});






  

