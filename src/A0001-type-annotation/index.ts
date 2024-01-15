// Tipos básicos
let nome: string = 'Vinicius'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.55, -5.55
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualque-symbol')
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [4, 5, 6]
let arrayDeStrings: Array<string> = ['a', 'b']
let arrayDeStrings2: string[] = ['c', 'd']

// Objetos
let pessoas: {nome: string, idade:number, adulto?: boolean} = {
  nome: 'Vinicius',
  idade: 23,
  adulto: true
}

// Função
function soma(x: number, y: number): number{
  return x + y
}
const resul = soma(2, 4);
console.log(resul);


const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma2(5, 1));



