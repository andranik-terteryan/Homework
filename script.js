let
    arr = [32, 16, 18, 22, 56, 20]

function checkItems(val) {
    return val % 2 === 0
}
console.log(arr.every(checkItems))
    //task 1