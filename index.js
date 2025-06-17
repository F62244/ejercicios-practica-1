'use strict'
//Trabajo practico integrador prodevs Academy


//Implementá una función llamada minimo que reciba un array de números
//  y devuelva el valor numérico más bajo del array. No podés usar funciones 
// como Math.min ni métodos como sort. Usá un bucle para comparar los elementos.


function minimo(arr) {
  let minimoNumero = arr[0];
    for(let i = 1; i < arr.length; i++){
       if (arr[i] < minimoNumero){
        minimoNumero = arr[i];
       }
    }
    return minimoNumero;
}

//Creá una función llamada mayor que tome un array 
// de números y retorne el número más grande dentro del mismo. 
// No podés usar Math.max. Deberás recorrer el array manualmente y comparar los valores.

function mayor(arr) {
    let maximoNumero = arr[0];
    for(let i = 1; i < arr.length; i++){
       if (arr[i] > maximoNumero){
        maximoNumero = arr[i]
       }
    }
    return maximoNumero;
}

//Definí una función llamada total que sume todos los valores de un array numérico usando el método .reduce. Retorná la suma total

function total(arr) {
     let suma = arr.reduce(function(acumulacion, numero){
      return acumulacion + numero;
     }, 0);
     return suma;
}

//Implementá la misma funcionalidad que en el ejercicio anterior (total), 
// pero sin usar .reduce. Esta vez, deberás usar un bucle for para recorrer el array y acumular el resultado.

function totalBis(arr) {
    let suma = 0;
    for(let i=0 ; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}


//Escribí una función llamada promedio que calcule el promedio (media) de los números en un array.
//  Debés hacerlo usando el método .reduce. El promedio es el total dividido por la cantidad de elementos.

function promedio(arr) {
    let suma = arr.reduce(function(acumulacion, numero){
        return acumulacion + numero;
    },0);
    return suma / arr.length;
}

//Reescribí la función anterior (promedio) sin usar .reduce.
//  Esta vez usá un bucle for para sumar los valores y calcular el promedio dividiendo por la cantidad de elementos.

function promedioBis(arr) {
  let suma = 0;
    for(let i=0 ; i < arr.length; i++){
       suma += arr[i];
    }
    return suma / arr.length;
}



/* LISTAS ENLAZDAS */
//Implementá una estructura de datos llamada ListaEnlazada que funcione como una lista simplemente enlazada. Esta lista debe permitir:
//Agregar nodos al principio y al final.
//Insertar un nodo en una posición específica.
//Eliminar el primer y último nodo.
//Imprimir todos los elementos o un elemento específico.
//Buscar un nodo por valor.
//No podés usar Array ni sus métodos (push, pop, etc.) para almacenar los elementos. Cada nodo debe ser un objeto que contenga al menos una propiedad data y un puntero next.
//Importante: resolvé todo sin usar prototype, utilizando funciones constructoras y métodos directamente dentro del objeto ListaEnlazada.


function Nodo(data) {
  return {
    data: data,
    next: null,
  };
}

function crearListaEnlazada() {
  const lista = {
    point: null,
    len:0,

    insertFirst(data){
      const nuevoNodo = Nodo(data);
      nuevoNodo.next = this.point;
      this.point = nuevoNodo;
      this.len++;
    },

    push(data){
      const nuevoNodo = Nodo(data);
      if(!this.point){
        this.point = nuevoNodo;
      } else {
        let actual = this.point;
        while(actual.next){
          actual = actual.next;
        }
        actual.next = nuevoNodo;
      }
      this.len++;
    },

    insert(data,posicion){

      if (posicion === 0){
        this.insertFirst(data);
        return;
      }
     
      const nuevoNodo = Nodo(data);
      let actual = this.point;
      let anterior = null;
      let i = 0;

      while (actual && i < posicion){
        anterior = actual;
        actual = actual.next;
        i++;
      }

      if(anterior){
        anterior.next = nuevoNodo;
        nuevoNodo.next = actual;
        this.len++;
    }
  },

  deleteFirst(){
    if(this.point){
      this.point = this.point.next;
      this.len--;
    }
  },

  deleteLast(){
    if (!this.point) return;
    if (!this.point.next){
      this.point = null;
      this.len--;
      return;
    }

    let actual = this.point;
    let anterior = null;

    while (actual.next){
      anterior = actual;
      actual = actual.next;
    }
    anterior.next = null;
    this.len--;
  },

  find(valor){
    let actual = this.point;
    while (actual){
      if (actual.data === valor) return actual;
      actual = actual.next;
    }
    return undefined;
  },

  print(){
    let actual = this.head;
    while(actual){
      console.log(actual.data);
      actual = actual.next;
    }
  },
};

  return lista;
}


// var list = new Lista();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()


//MATRIZ
//Implementá una clase Matriz que permita representar matrices bidimensionales y realizar operaciones básicas con ellas. Debe contar con los siguientes métodos:
//buscar(valor): retorna las coordenadas [fila, columna] del valor si existe.
//sumar(otraMatriz): retorna una nueva matriz con la suma elemento a elemento.
//restar(otraMatriz): retorna una nueva matriz con la resta elemento a elemento.
//multiplicar(otraMatriz): retorna una nueva matriz con el producto matricial.
//print(): imprime la matriz en consola con formato visual.
//Debe usarse programación moderna (ES6+), incluyendo class, let, const, y buen manejo de errores (como tamaños incompatibles).
//No podés usar librerías externas.


class Matriz {
    constructor(arg1,arg2){
      if(Array.isArray(arg1)){
        if(arg1.length === 0 || !Array.isArray(arg1[0])){
 throw new Error ("Debe proporcionar una matriz bidimensional.");
        }
      this.datos = arg1;
      this.filas = arg1.length;
      this.columnas = arg1[0].length;
} else if (typeof arg1 === 'number' && typeof arg2 === 'number'){
  this.filas = arg1;
  this.columnas = arg2;
  this.datos = Array.from({length: this.filas},()=> Array(this.columnas).fill(0));
} else {
  throw new Error("Constructor inválido. Use una matriz bidimensional o filas y columnas numéricas.")
}
};

    buscar(valor){
    for (let i=0; i < this.filas; i++){
      for(let j=0; j < this.columnas; j++){
        if (this.datos[i][j] === valor){
          return [i,j];
        }
      }
    }
    return undefined;
  };

  sumar(otra){
    if(this.filas !== otra.filas || this.columnas !== otra.columnas){
      throw new Error("Las matrices deben tener las mismas dimensiones para sumar.")
    }
    const resultado = [];

    for (let i =0; i<this.filas; i++){
      const fila = [];
      for (let j=0; j < this.columnas; j++){
        fila.push(this.datos[i][j]+otra.datos[i][j]);
      }
      resultado.push(fila);
    }
    return new Matriz(resultado);
  };

  restar(otra){
    if (this.filas !== otra.filas || this.columnas !== otra.columnas){
      throw new Error("Las matrices deben tener las mismas dimensiones para sumar.");
    }
    const resultado = [];

    for (let i=0; i < this.filas; i++){
      const fila = [];
      for(let j=0; j<this.columnas; j++){
 fila.push(this.datos[i][j]- otra.datos[i][j]);
      }
      resultado.push(fila);
    }
    return new Matriz(resultado);
  }

  multiplicar(otra){
    if(this.columnas !== otra.filas){
      throw new Error("Las dimensiones no son compatibles para multiplicación.");
    }
    const resultado = [];

    for (let i=0; i < this.filas; i++){
      const fila = [];
      for (let j=0; j < otra.columnas; j++){
        let suma = 0;
        for (let k = 0; k < this.columnas; k++){
          suma += this.datos[i][k]*otra.datos[k][j];
        }
        fila.push(suma);
      }
      resultado.push(fila);
    }
    return new Matriz(resultado);
  }

  print(){
    for(let i = 0; i < this.filas; i++){
      console.log(this.datos[i].join("\t"));
    }
  }

  get data(){
    return this.datos
  }
  
  set data(nuevosDatos){
    if(!Array.isArray(nuevosDatos) || !Array.isArray(nuevosDatos[0])){
      throw new Error("Debe proporcionar una matriz bidimensional.");
    }
    this.datos = nuevosDatos;
    this.filas = nuevosDatos.length;
    this.columnas = nuevosDatos[0].length
  }
  };

 



//"Resolver la Torre de Hanoi para n discos, usando tres pilas que representan las torres.
//  Implementar la lógica para mover todos los discos desde la primera torre hasta la tercera,
//  respetando las reglas clásicas: sólo se puede mover un disco a la vez,
//  y nunca colocar un disco más grande sobre uno más pequeño."

class Pila {
  constructor() {
    this.elementos = [];
  }

  push(valor){
    this.elementos.push(valor);
  }
  pop(){
    return this.elementos.pop();
  }
  peek(){
    return this.elementos[this.elementos.length - 1]
  }
  isEmpty(){
    return this.elementos.length === 0;
  }
  print(nombre){
    console.log(`${nombre}: [${this.elementos.join(", ")}]`)
  }

  getElementos(){
    return this.elementos;
  }
}

function moverDiscos(n,origen,destino,auxiliar,nombreOrigen,nombreDestino,nombreAux){
  if (n===1){
    const disco = origen.pop();
    destino.push(disco);
    console.log(`Mover disco ${disco} de ${nombreOrigen} a ${nombreDestino}`);
    return
  }
  
  moverDiscos(n-1, origen, auxiliar, destino, nombreOrigen, nombreAux, nombreDestino);
  moverDiscos(1,origen,destino,auxiliar,nombreOrigen,nombreDestino,nombreAux);
  moverDiscos(n-1,auxiliar,destino,origen,nombreAux,nombreDestino,nombreOrigen);
}

const torreA = new Pila();
const torreB = new Pila();
const torreC = new Pila();

const n = 3;
for (let i = n; i >= 1; i--){
  torreA.push(i);
}

console.log("Estado inicial:");
torreA.print("A");
torreB.print("B");
torreC.print("C");

console.log("\nMovimientos:");
moverDiscos(n,torreA,torreC,torreB,"A","C","B");

console.log("\nEstados final:");
torreA.print("A");
torreB.print("B");
torreC.print("C");


class Torre {
  constructor(n) {
    this.n = n;
    this.torres = {
      A: new Pila(),
      B: new Pila(),
      C: new Pila(),
    };
    this.n = 0;
    }

    init(n){
      this.n = n;
      this.torres.A = new Pila();
      this.torres.B = new Pila();
      this.torres.C = new Pila();

      for(let i = n;i>=1;i--){
      this.torres.A.push(i);
    };
    }

    
  solve(){
    moverDiscos(this.n,this.torres.A,this.torres.C,this.torres.B,"A","C","B");
  }

  resolver(){
    moverDiscos(this.n,this.torres.A,this.torres.C,this.torres.B,"A","C","B");
  }

  imprimir(){
    this.torres.A.print("A");
    this.torres.A.print("B");
    this.torres.A.print("C");
  }

  getTorre1(){
    return this.torres.A.getElementos();
  }
  getTorre2(){
    return this.torres.B.getElementos();
  }
  getTorre3(){
    return this.torres.C.getElementos();
  }
  
  };

  


module.exports = {
  minimo,
  mayor,
  total,
  totalBis,
  promedio,
  promedioBis,
  crearListaEnlazada,
  Matriz,  
  Torre, 
};
