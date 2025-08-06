class ATM {
    #value;
    constructor(value){
        this.#value = value;
    }

    checkBalance(){
        const balance =  this.#value;
        console.log(`Your Current Balance: ${balance} cedis`);
    }
    deposit(depositNumber){
        this.#value += depositNumber;
        console.log(`You deposited: ${this.#value} cedis`);
    }
    withdraw(number){
        this.#value -= number;
    }
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const storedPasscode = "1234"; // You can change this to any passcode

console.log("Welcome to Enoch ATM");

rl.question("Please set your passcode: ", (initialPasscode) => {
    console.log("Passcode saved.");
    let balanceCheck = 0;
    let money = new ATM(Number(balanceCheck));

    // Function to verify passcode
    function verifyPasscode() {
        rl.question("Enter passcode again to login: ", (enteredPasscode) => {
            if (enteredPasscode === initialPasscode) {
                console.log("✅ Login successful!");
                //rl.close();
                function bank(){
                    rl.question("Choose an option: ", (number) => {
                        const choice = Number(number);
                            if (choice === 2 ) {
                                rl.question("Enter an amount to deposit: ",  (depositNumber)=>{
                                    const convertDepositNumber = Number(depositNumber)
                                    money.deposit(convertDepositNumber)
                                    balanceCheck = money.checkBalance()// checks the balance
                                    return bank()
                                })
                            } else if (choice === Number(1)){
                                money.checkBalance()
                                 return bank()
                            } else if (choice === Number(3)){
                                rl.question('Enter Amount to withdraw: ', (withDrawAmount) => {
                                    const amountToWithDraw = Number(withDrawAmount);
                                    const currentBalance = money.checkBalance()
                                    if (amountToWithDraw === currentBalance){
                                        console.log("Cannot complete Transaction, Insufficent balance")
                                    }else if (amountToWithDraw >=  currentBalance){
                                        console.log("Insufficient balance")
                                    }else{
                                        money.withdraw(amountToWithDraw)
                                        money.checkBalance()
                                        bank()
                                    }
                                })
                            }else {
                                console.log("Enter 1 to check balance, Enter 2 to deposit, Enter 3 to withdraw")
                                bank()
                            }
                    })
                } bank()
            } else {
                console.log("❌ Incorrect passcode. Try again.");
                verifyPasscode(); // Recursively ask again
            }
        });
    }


    verifyPasscode(); // Start verification
});
