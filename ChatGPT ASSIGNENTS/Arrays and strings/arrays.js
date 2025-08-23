let numbers = [3, 7, 2, 9, 5, 16, 70];
let max = numbers[0]
// console.log(max);
// numbers[i] // is each number in the array
// [i] // is the current value of the array

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    if(num > max){
        max = num
    }
}
console.log(max)


