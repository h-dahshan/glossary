/**
 * - grouping of properties and methods playing with these properties
 * - restricting direct access to encapsulated members
 */

class BankAccount {
  // property inside
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // modify properties inside
  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  // restricting properties inside access
  getBalance(): number {
    return this.balance;
  }
}
