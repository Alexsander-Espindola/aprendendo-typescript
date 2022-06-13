// Objetos
const car = {
  color: 'verde',
  year: 2004,

  setColor(newColor: string): void {
    this.color = newColor;
  },
};

car.setColor('Vermelho');
console.log(car);
car.color = 'Rosa';
console.log(car);

const objectA: {
  readonly keyA: string;
  keyB: number;
  keyC?: boolean;
  [key: string]: unknown;
} = {
  keyA: 'Alou',
  keyB: 10,
};

objectA.keyC = true;
objectA.keyD = 'Alou denovo';
console.log(objectA.keyA);
