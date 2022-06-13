// Redundância de inferência de tipo:
// let name: string = 'Alexsander';
// ts já iria atribuir a função um tipo string

// Array
const arrayOfNumbers: Array<number> = [1, 2, 3];
const otherArrayOfnumbers: number[] = [4, 5, 6, 7];
console.log(arrayOfNumbers, otherArrayOfnumbers);

// Objetos
const car: {
  color: string;
  year: number;
  optional?: boolean;
} = {
  color: 'Blue',
  year: 2004,
};

console.log(car);

// Funções
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;
console.log(sum(10, 20), sum2(10, 25));
