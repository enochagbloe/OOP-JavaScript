class BankAccount {
    #value;
    constructor(owner, accountNumber, balance) {
        this.#value = owner;
        this.#value = accountNumber;
        this.#value = balance;
    }

    deposit(number){
        this.#value += number
    }
    withdraw(number){
        this.#value -= number;
    }
    getBalance(){
        return `Your Balance: ${this.#value} cedis`;
    }
    getAccountDetails(accountNumber, balance, owner){
       this.#value = owner;
       this.#value = accountNumber;
       this.#value = balance;
    }
}
const money = new BankAccount('Enoch', '010105100819', 1000);
money.deposit(100)
const getBalance = money.getBalance()
console.log(getBalance)