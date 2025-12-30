"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = generateFibonacci;
exports.generatePrimeNumbers = generatePrimeNumbers;
function generateFibonacci(limit) {
    const result = [0, 1];
    while (true) {
        const last = result[result.length - 1];
        const prev = result[result.length - 2];
        if (last === undefined || prev === undefined)
            break;
        const next = last + prev;
        if (next > limit)
            break;
        result.push(next);
    }
    return result;
}
function generatePrimeNumbers(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(i);
    }
    return primes;
}
//# sourceMappingURL=sequenceUtils.js.map