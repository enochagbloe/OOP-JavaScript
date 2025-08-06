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
        console.log(`You deposited: ${depositNumber} cedis`);
    }
    withdraw(number){
        if(number > this.#value){
            console.log(`Insufficient balance`);
        }
        else if (typeof number !== "number" || isNaN(number)) {
            console.log("Enter a valid number");
            return this.#value;
        }
        else {
            this.#value -= number;
            console.log(`You withdrawed: ${number} cedis`)
        }
    }
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//const storedPasscode = "1234"; // You can change this to any passcode

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
                console.log(
                    `--- MENU ---
1. Check Balance
2. Deposit
3. Withdraw
5. Logout`
                )
                //rl.close();
                function bank(){
                    rl.question("Choose an option: ", (number) => {
                        const choice = Number(number);
                            if (choice === 2 ) {
                                rl.question("Enter an amount to deposit: ",  (depositNumber)=>{
                                    const convertDepositNumber = Number(depositNumber)
                                    money.deposit(convertDepositNumber)
                                    money.checkBalance()// checks the balance
                                    return bank()
                                })
                            } else if (choice === Number(1)){
                                money.checkBalance()
                                 return bank()
                            } else if (choice === Number(3)){
                                rl.question('Enter Amount to withdraw: ', (withDrawAmount) => {
                                    // withDrawAmount is a number
                                    // lets take withDrawAmount should only be a number
                                    amountToWithDraw = withDrawAmount;
                                    money.withdraw(amountToWithDraw)
                                    money.checkBalance()
                                    bank()
                                })
                            }else if(choice === Number(5)){
                                rl.question("Do you want to logout? Yes or No: ", (answer)=> {
                                    if (answer === 'Yes' || answer === 'yes') {
                                     console.log("✅ Logout successful");
                                     verifyPasscode()
                                    } else if (answer === 'No'|| answer === 'no') {
                                        console.log(
                                            `--- MENU ---
1.Check Balance
2. Deposit
3. Withdraw
5. Logout`
                                        )
                                        return bank()
                                    }
                                });
                                // return null
                            } else {
                                console.log(
                                    `--- MENU ---
1. Check Balance
2. Deposit
3. Withdraw
5. Logout`
                                )
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
