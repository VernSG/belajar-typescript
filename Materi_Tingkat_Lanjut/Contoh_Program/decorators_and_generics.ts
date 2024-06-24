function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // Mengecek tipe data argument yang akan dimasukkan ke method
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Contoh penggunaan decorator pada kelas dengan generics
class Example {
    @LogMethod
    greet(name: string) {
        return `Hello, ${name}!`;
    }
}

// Membuat objek dari kelas Example
const example = new Example();
console.log(example.greet('Alice')); // Output: Calling greet with arguments: ["Alice"]
