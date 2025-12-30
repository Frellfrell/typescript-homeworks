"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        static calculateMonthlyPayment(loanAmount, annualRate, months) {
            const monthlyRate = annualRate / 12 / 100;
            return loanAmount *
                (monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        static calculateTax(income, taxRate) {
            return income * taxRate / 100;
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
//# sourceMappingURL=finance.js.map