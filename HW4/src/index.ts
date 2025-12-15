//стрелочн функц sumEvenNumbers, которая суммирует все чётные числа в массиве.
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
};

// Пример использования
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums)); // 12 (2 + 4 + 6)

//интерфейс для функции, которая принимает строку и возвращает boolean
interface StringToBooleanFunction {
    (input: string): boolean;
}

// Пример функции: проверка на пустую строку
const isEmpty: StringToBooleanFunction = (str) => str.trim().length === 0;

// Использование
console.log(isEmpty("")); // true
console.log(isEmpty("Hello")); // false
