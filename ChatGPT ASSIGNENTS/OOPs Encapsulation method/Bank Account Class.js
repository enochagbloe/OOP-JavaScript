class BankAccount {
    #value;
    constructor(value) {
        this.#value = value;
    }
    deposit(number){
        // check if the number is positive
        if(number <= 0 || typeof number !== "number"){
            console.log("Enter a valid number");
            return this.#value;
        } else{
            console.log(`You Deposited: ${number} cedis`)
            return this.#value += number;
        }

    }
    withdraw(number) {
        // First, check if input is a valid number
        if (typeof number !== "number" || isNaN(number)) {
            console.log("Enter a valid number");
            return this.#value;
        }

        // Then, check if number is positive
        if (number <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return this.#value;
        }

        // Then, check if there's enough balance
        if (number > this.#value) {
            console.log(`You cannot withdraw: ${number} cedis. Insufficient funds.`);
            return this.#value;
        }

        // Process the withdrawal
        console.log(`You Withdrawn: ${number} cedis`);
        this.#value -= number;
        return this.#value;

}
    getBalance(){
        return `Your Balance: ${this.#value} cedis`;
    }
}
const money = new BankAccount(1000);
money.withdraw("200");
console.log(money.getBalance());