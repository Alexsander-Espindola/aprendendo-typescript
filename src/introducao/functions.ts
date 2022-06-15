// Dois tipos para o parâmetro
function addOrConcat(x: string | number, y: string | number): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  // if (typeof x === 'string' && typeof y === 'string') return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(10, '20'));
