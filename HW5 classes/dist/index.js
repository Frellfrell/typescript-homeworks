"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Класс Animal и наследник Dog
class Animal {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    sound() {
        console.log("The animal makes a sound");
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    sound() {
        console.log("The dog barks");
    }
}
// Проверка
const animal = new Animal("Generic", "Unknown");
animal.sound();
const dog = new Dog("Rex", "Labrador");
dog.sound();
//Статическое свойство totalBooks
class Book {
    static totalBooks = 0;
    addLibraryBook() {
        Book.totalBooks += 1;
    }
}
// Проверка
const book1 = new Book();
const book2 = new Book();
book1.addLibraryBook();
book1.addLibraryBook();
book2.addLibraryBook();
console.log("Total books:", Book.totalBooks); // Вывод: Total books: 3
//Переопределение конструктора (Vehicle → Motorcycle)
class Vehicle {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class Motorcycle extends Vehicle {
    type;
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}
// Проверка
const bike = new Motorcycle("Yamaha", "R1", "Sport");
console.log(bike.make); // Yamaha
console.log(bike.model); // R1
console.log(bike.type); // Sport
//# sourceMappingURL=index.js.map