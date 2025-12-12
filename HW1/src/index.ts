// Функция приветствия
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}
// Интерфейс Person
interface Person {
    name: string;
    age: number;
    city: string;
}
// Функция отображения информации о человеке
function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Функция, возвращающая квадрат числа
function squareNumber(num: number): number {
    return num * num;
}
// Функция проверки чётности
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Интерфейс Student
interface Student {
    name: string;
    grade: number;
}