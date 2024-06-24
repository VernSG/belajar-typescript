// Contoh penggunaan antarmuka (interfaces) dalam TypeScript
// Definisi sebuah interface 'Shape'
export interface Shape {
    calculateArea(): number;
}


// class Circle implements Shape {
//     constructor(private radius: number) {}

//     calculateArea(): number {
//         return Math.PI * this.radius ** 2;
//     }
// }

// let circle = new Circle(5);
// console.log("Area of the circle:", circle.calculateArea());