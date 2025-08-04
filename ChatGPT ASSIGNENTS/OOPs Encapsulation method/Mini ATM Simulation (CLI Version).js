class ATM {
    #value;
    constructor(value){
        this.#value = value;
    }

    checkBalance(){
        return this.#value
    }
    deposit(number){
        this.#value += number;
        console.log(`You deposited: ${this.#value}`);
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

    // Function to verify passcode
    function verifyPasscode() {
        rl.question("Enter passcode again to login: ", (enteredPasscode) => {
            if (enteredPasscode === initialPasscode) {
                console.log("✅ Login successful!");
                //rl.close();
                rl.question("Choose an option: ", (number) => {
                   const choice = Number(number);
                    if (choice === 1 ) {
                        rl.question("Enter an amount to deposit: ", (depositNumber)=>{
                            const money = new ATM();
                            money.deposit(depositNumber)
                        })
                    }
                })
            } else {
                console.log("❌ Incorrect passcode. Try again.");
                verifyPasscode(); // Recursively ask again
            }
        });
    }


    verifyPasscode(); // Start verification
});
