// reverse an array

function setArrays(array) {
    let i = 0;
    let  j = array.length -1

    while (j > i) {
       let temp =  array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j++
    }
    return array;
}
setArrays([1,2,3,4,5,6,7,8,9,10])
console.log(setArrays)


//reversing an array
// create a function
// create 2 variables
// yse a while loops and agains the variables created
// create a vraible in the loop and set it to the array[vaiable 1]
// then array[variable one] = array[vaiable 2]
// array[v2] to the temp
// then increment the the variables
// close the loop and return the array.