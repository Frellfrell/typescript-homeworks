//стрелочн функц sumEvenNumbers, которая суммирует все чётные числа в массиве.
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
};

// Пример использования
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums)); // 12 (2 + 4 + 6)
