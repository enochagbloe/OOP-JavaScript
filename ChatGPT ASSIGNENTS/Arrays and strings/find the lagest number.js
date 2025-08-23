//👉 Task 3: Find the largest number in an array.
let numbers = [12, 45, 7, 89, 23];

let lagestNumber = numbers[0]

for (let j = 0; j < numbers.length; j++) {
    num = numbers[j]
    if ( num > lagestNumber) {
        lagestNumber = num
    }
}
console.log(lagestNumber)
