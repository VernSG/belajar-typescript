// Contoh penggunaan decorators dalam TypeScript
function log(target: any, key: string) {
    console.log(`Calling ${key} method`);
}

class Calculator {
    @log
    square(num: number): number {
        return num * num;
    }
}

let calc = new Calculator();
console.log("Square:", calc.square(5)); // Output: Calling square method \n Square: 25