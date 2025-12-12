"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Функция приветствия
function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Андрей");
printPersonInfo({ name: "Иван", age: 25, city: "Москва" });
// Функция отображения информации о человеке
function printPersonInfo(person) {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}
// Функция, возвращающая квадрат числа
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));
// Функция проверки чётности
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));
printStudentInfo({ name: "Мария", grade: 95 });
// Функция вывода информации о студенте
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
// Функция с типом void
function logMessage(message) {
    console.log(message);
}
logMessage("Это сообщение в консоли.");
//# sourceMappingURL=index.js.map