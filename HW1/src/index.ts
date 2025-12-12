// Функция приветствия
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}

greetUser("Андрей");

// Интерфейс Person
interface Person {
    name: string;
    age: number;
    city: string;
}

printPersonInfo({ name: "Иван", age: 25, city: "Москва" });

// Функция отображения информации о человеке
function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Функция, возвращающая квадрат числа
function squareNumber(num: number): number {
    return num * num;
}

console.log(squareNumber(5));

// Функция проверки чётности
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(10));  

// Интерфейс Student
interface Student {
    name: string;
    grade: number;
}
printStudentInfo({ name: "Мария", grade: 95 });

// Функция вывода информации о студенте
function printStudentInfo(student: Student): void {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Функция с типом void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Это сообщение в консоли.");