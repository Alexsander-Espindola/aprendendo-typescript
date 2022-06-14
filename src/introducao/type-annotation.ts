// Redundância de inferência de tipo:
// let name: string = 'Alexsander';
// ts já iria atribuir a função um tipo string

// Funções
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;
console.log(sum(10, 20), sum2(10, 25));

// O "any" representa "qualquer tipo" e deve ser evitado
// pois no TypeScript você quer ser mais específico em tudo
function notUseAny(message: any) {
  return message;
}

console.log(notUseAny([10, '20', 30]));
console.log(notUseAny(10));
console.log(notUseAny('20'));

// Void retunr
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

console.log(noReturn);

// Type Annotation para retornos de objetos
function returnObject(
  keyA: string,
  keyB?: string,
): {
  keyA: string;
  keyB?: string;
} {
  return {
    keyA,
    keyB,
  };
}

console.log(returnObject('A'));

export function funcNever(): never {
  throw new Error('Never Never Never');
}

// Enum
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
