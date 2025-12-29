import { capitalize, reverseString } from './stringUtils';
import { Finance } from './finance';
import {  AdminUser } from './userManagement';
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

// Задание 1
console.log(capitalize("typescript"));
console.log(reverseString("Visual Studio"));

// Задание 2
const loanPayment = Finance.LoanCalculator.calculateMonthlyPayment(100000, 12, 24);
console.log("Ежемесячный платеж:", loanPayment.toFixed(2));

const tax = Finance.TaxCalculator.calculateTax(50000, 13);
console.log("Налог:", tax);

// Задание 3
const admin = new AdminUser(
  "Иван",
  "ivan@example.com"
);
console.log(admin);

admin.grantSuperAdmin();
console.log("После повышения:", admin);

// Задание 4
console.log("Фибоначчи:", generateFibonacci(50));
console.log("Простые числа:", generatePrimeNumbers(50));
