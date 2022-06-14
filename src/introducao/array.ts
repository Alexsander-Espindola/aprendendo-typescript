// Array
const arrayOfNumbers: Array<number> = [1, 2, 3];
const otherArrayOfnumbers: number[] = [4, 5, 6, 7];
console.log(arrayOfNumbers, otherArrayOfnumbers);

function arrayFunc(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

// ReadOnly array
const array: ReadonlyArray<string> = ['1', '2'];
console.log(array);

// Tuple
const client: readonly [string?, ...number[]] = ['Alexsander', 22];

console.log(arrayFunc(2, 3, 10));
console.log(client, client[0]);
