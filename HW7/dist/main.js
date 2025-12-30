"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("./stringUtils");
const finance_1 = require("./finance");
const userManagement_1 = require("./userManagement");
const sequenceUtils_1 = require("./sequenceUtils");
// Задание 1
console.log((0, stringUtils_1.capitalize)("typescript"));
console.log((0, stringUtils_1.reverseString)("Visual Studio"));
// Задание 2
const loanPayment = finance_1.Finance.LoanCalculator.calculateMonthlyPayment(100000, 12, 24);
console.log("Ежемесячный платеж:", loanPayment.toFixed(2));
const tax = finance_1.Finance.TaxCalculator.calculateTax(50000, 13);
console.log("Налог:", tax);
// Задание 3
const admin = new userManagement_1.AdminUser("Иван", "ivan@example.com");
console.log(admin);
admin.grantSuperAdmin();
console.log("После повышения:", admin);
// Задание 4
console.log("Фибоначчи:", (0, sequenceUtils_1.generateFibonacci)(50));
console.log("Простые числа:", (0, sequenceUtils_1.generatePrimeNumbers)(50));
//# sourceMappingURL=main.js.map