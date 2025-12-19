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