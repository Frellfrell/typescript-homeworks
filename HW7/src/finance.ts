export namespace Finance {

  export class LoanCalculator {
    static calculateMonthlyPayment(
      loanAmount: number,
      annualRate: number,
      months: number
    ): number {
      const monthlyRate = annualRate / 12 / 100;
      return loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }
  }
   export class TaxCalculator {
    static calculateTax(income: number, taxRate: number): number {
      return income * taxRate / 100;
    }
  }

}