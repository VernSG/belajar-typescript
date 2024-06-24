// Mengimpor interface Shape dari berkas interfaces.ts
import { Shape } from 'Interface/interface';

// Implementasi interface Shape pada kelas Circle
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Membuat objek dari kelas Circle
let circle = new Circle(5);
console.log("Area of the circle:", circle.calculateArea());
