// Funções
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;
console.log(sum(10, 20), sum2(10, 25));

// O "any" representa "qualquer tipo" e deve ser evitado
// pois no TypeScript você quer ser mais específico em tudo
function notUseAny(message: any) /* eslint-disable-line */ {
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

// Dois tipos para o parâmetro
function addOrConcat(x: string | number, y: string | number): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  // if (typeof x === 'string' && typeof y === 'string') return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(10, '20'));

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

// Never return
export function funcNever(): never {
  throw new Error('Never Never Never');
}
