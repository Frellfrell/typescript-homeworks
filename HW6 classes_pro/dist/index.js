"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Bark";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach(animal => {
    console.log(animal.makeSound());
});
//Shape + Color Example
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    color = "Red";
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class ColoredRectangle extends ColoredShape {
    color = "Blue";
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapes = [
    new ColoredCircle(5),
    new ColoredRectangle(4, 6)
];
shapes.forEach(shape => {
    console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});
//Абстрактный класс Appliance
class Appliance {
}
class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing machine is ON");
    }
    turnOff() {
        console.log("Washing machine is OFF");
    }
}
class Refrigerator extends Appliance {
    turnOn() {
        console.log("Refrigerator is ON");
    }
    turnOff() {
        console.log("Refrigerator is OFF");
    }
}
const appliances = [
    new WashingMachine(),
    new Refrigerator()
];
appliances.forEach(appliance => {
    appliance.turnOn();
    appliance.turnOff();
});
// Account
class Account {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends Account {
    interestRate = 0.05;
    deposit(amount) {
        this.balance += amount;
        this.balance += this.balance * this.interestRate;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Not enough money");
        }
    }
}
class CheckingAccount extends Account {
    fee = 2;
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        const total = amount + this.fee;
        if (total <= this.balance) {
            this.balance -= total;
        }
        else {
            console.log("Not enough money (including fee)");
        }
    }
}
const savings = new SavingsAccount(100);
savings.deposit(50);
savings.withdraw(30);
console.log("Savings balance:", savings.getBalance());
const checking = new CheckingAccount(100);
checking.deposit(50);
checking.withdraw(30);
console.log("Checking balance:", checking.getBalance());
//Media
class Media {
}
class Audio extends Media {
    play() {
        console.log("Playing audio");
    }
}
class Video extends Media {
    play() {
        console.log("Playing video");
    }
}
const mediaList = [
    new Audio(),
    new Video()
];
mediaList.forEach(media => media.play());
//# sourceMappingURL=index.js.map