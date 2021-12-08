// In object-oriented design, the chain-of-responsibility pattern is a design patterns consisiting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle the rest are passed to the next processing object in the chain.

class Account {
  setNext(account) {
    this.successor = account;
  }

  pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay}`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.name}. Proceeding...`);
      this.successor.pay(amountToPay);
    } else {
      console.log(`None of the accounts have enough balance`);
    }
  }
  canPay(amount) {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance) {
    super();
    this.name = "bank";
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = "Paypal";
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance) {
    super();
    this.name = "bitcoin";
    this.balance = balance;
  }
}

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);

/*
    Cannot pay using bank. Proceeding...
    Cannot pay using Paypal. Proceeding...
    Paid 259
 */
