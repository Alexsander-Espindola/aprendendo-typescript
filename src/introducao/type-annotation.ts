// Redundância de inferência de tipo:
// let name: string = 'Alexsander'; ts já iria atribuir a função um tipo string

// Tipos Literais (Passe o mause por cima dos atributos para ver os tipos que lhe são atribuidos)
const name = 'Alex';
// Note que é atribuido 'Alexs' (name: 'Alexs') como o tipo de name, isso é porque name é imutável então o ts lhe atribuiu o tipo subtipo de string 'Alexs'

let name2 = 'Alexs' as const; // É o mesmo que const name = 'Alex';
const object = {
  name: 'Alexs' as const,
  age: '22',
};

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

export default 1;
