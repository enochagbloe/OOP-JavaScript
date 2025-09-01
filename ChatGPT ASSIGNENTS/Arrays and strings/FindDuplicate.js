// check for duplicates in the array

function checkDuplicates(array) {
    // set an empty array
    let result = []

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i] === array[j]) {
                result.push(array[j]);
            }
        }
        console.log(`array[${i}] = ${array[i]}`);
    }
    return result
}
console.log(checkDuplicates([1, 2, 3, 3, 2, 5]))