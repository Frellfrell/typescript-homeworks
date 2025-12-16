"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//стрелочн функц sumEvenNumbers, которая суммирует все чётные числа в массиве.
const sumEvenNumbers = (numbers) => {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
};
// Пример использования
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums)); // 12 (2 + 4 + 6)
// Пример функции: проверка на пустую строку
const isEmpty = (str) => str.trim().length === 0;
// Использование
console.log(isEmpty("")); // true
console.log(isEmpty("Hello")); // false
const areStringsEqual = (str1, str2) => str1 === str2;
// Использование
console.log(areStringsEqual("abc", "abc")); // true
console.log(areStringsEqual("abc", "def")); // false
//Обобщённая функция getLastElement, возвращающая последний элемент массива любого типа.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
// Использование
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"
//Обобщённая функция makeTriple, создающая массив из трёх элементов одного типа.
function makeTriple(a, b, c) {
    return [a, b, c];
}
// Использование
console.log(makeTriple(1, 2, 3)); // [1, 2, 3]
console.log(makeTriple("a", "b", "c")); // ["a", "b", "c"]
//# sourceMappingURL=index.js.map