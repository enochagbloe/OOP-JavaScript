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