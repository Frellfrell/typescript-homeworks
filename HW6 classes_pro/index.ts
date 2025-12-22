abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return "Bark";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => {
    console.log(animal.makeSound());
});
//Shape + Color Example
abstract class Shape {
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string;
}

class ColoredCircle extends ColoredShape {
    color = "Red";
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class ColoredRectangle extends ColoredShape {
    color = "Blue";
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const shapes: ColoredShape[] = [
    new ColoredCircle(5),
    new ColoredRectangle(4, 6)
];

shapes.forEach(shape => {
    console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});