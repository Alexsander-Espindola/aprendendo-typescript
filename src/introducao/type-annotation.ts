// Redundância de inferência de tipo:
// let name: string = 'Alexsander'; ts já iria atribuir a função um tipo string

import { type } from 'os';

// Tipos Literais (Passe o mause por cima dos atributos para ver os tipos que lhe são atribuidos)
console.log('---Tipos Literais---');
const name = 'Alex';
// Note que é atribuido 'Alexs' (name: 'Alexs') como o tipo de name, isso é porque name é imutável então o ts lhe atribuiu o tipo subtipo de string 'Alexs'

let name2 = 'Alexs' as const; // É o mesmo que const name = 'Alex';
const object = {
  name: 'Alexs' as const,
  age: '22',
};

function selectColor(color: 'red' | 'green' | 'blue'): void {
  console.log(color);
}

selectColor('pink');
selectColor('green');

// Enum
console.log('---ENUM---');
enum Colors {
  RED, // 0
  YELLOW, // 1
  GREEN, // 2
}

console.log(Colors.GREEN);

enum Colors {
  PINK = 'FFC0CB', // 'FFC0CB'
  BLACK = 10, // 10
  WHITE, // 11
}

console.log(Colors);
console.log(Colors.PINK);
console.log(Colors[11]);
console.log(Colors[9]);

function searchColorRGB(color: Colors): void {
  console.log(color);
}

searchColorRGB(Colors.PINK);

// type alias ( por padrão são iniciados em letra maíuscula)
console.log('---Type Alias---');

type Age = number;
type coresRGB = 'Vermelho' | 'Verde' | 'Azul';
type coresCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type bestColor = coresRGB | coresCMYK;
type Person = {
  name: string;
  age: Age;
  bestColor: bestColor;
};

function setBestColor(per: Person, color: bestColor): Person {
  return { ...per, bestColor: color };
}

const Alexs = setBestColor(
  { age: 22, name: 'Alexs', bestColor: 'Azul' },
  'Amarelo',
);
console.log(Alexs);

// Intersection type
type colorsA = 'Vermelho' | 'Verde' | 'Azul' | 'Amarelo';
type colorsB = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type intersection = colorsA & colorsB;

type obj1 = { key1: number };
type obj2 = { key2: string };
type obj3 = { key3: number };
type obj = obj1 & obj2 & obj3;

const objectIntersection: obj = {
  key1: 12,
  key2: 'Teste',
  key3: 10,
};

console.log(objectIntersection);

/* Asserções Recomendadas */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input');
const inputElement = document.querySelector('.input') as HTMLInputElement;
inputElement.value = 'valor';

/* Asserções não recomendadas */
// Type assertion
const bodyNumber = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!)
const body3 = document.querySelector('body')!;
body3.style.background = 'red';

export default 1;
