//Класс Animal и наследник Dog
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name, "Dog");
    this.breed = breed;
  }

  sound(): void {
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
  static totalBooks: number = 0;

  addLibraryBook(): void {
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
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

// Проверка
const bike = new Motorcycle("Yamaha", "R1", "Sport");

console.log(bike.make);   // Yamaha
console.log(bike.model);  // R1
console.log(bike.type);   // Sport

