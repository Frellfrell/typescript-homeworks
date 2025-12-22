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

//Абстрактный класс Appliance
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}
class WashingMachine extends Appliance {
    turnOn(): void {
        console.log("Washing machine is ON");
    }

    turnOff(): void {
        console.log("Washing machine is OFF");
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log("Refrigerator is ON");
    }

    turnOff(): void {
        console.log("Refrigerator is OFF");
    }
}

const appliances: Appliance[] = [
    new WashingMachine(),
    new Refrigerator()
];

appliances.forEach(appliance => {
    appliance.turnOn();
    appliance.turnOff();
});
// Account
abstract class Account {

     protected balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}
class SavingsAccount extends Account {
    private interestRate = 0.05;

    deposit(amount: number): void {
        this.balance += amount;
        this.balance += this.balance * this.interestRate;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Not enough money");
        }
    }
}

class CheckingAccount extends Account {
    private fee = 2;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        const total = amount + this.fee;
        if (total <= this.balance) {
            this.balance -= total;
        } else {
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
abstract class Media {
     abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const mediaList: Media[] = [
    new Audio(),
    new Video()
];

mediaList.forEach(media => media.play());
