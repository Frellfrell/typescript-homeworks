export function generateFibonacci(limit: number): number[] {
  const result = [0, 1];

   while (true) {
    const last = result[result.length - 1];
    const prev = result[result.length - 2];

    if (last === undefined || prev === undefined) break;

    const next = last + prev;
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
