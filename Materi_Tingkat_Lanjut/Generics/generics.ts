// Contoh penggunaan generic (generics) dalam TypeScript
function identity<T>(arg: T): T {
    return arg;
}

let result1: string = identity<string>("Hello");
let result2: number = identity<number>(42);

console.log("Result 1:", result1);
console.log("Result 2:", result2);