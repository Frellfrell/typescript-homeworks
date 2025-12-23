export function generateFibonacci(limit: number): number[] {
  const result = [0, 1];

  while (true) {
    const next = result[result.length - 1] + result[result.length - 2];
    if (next > limit) break;
    result.push(next);
  }

  return result;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  return primes;
}
