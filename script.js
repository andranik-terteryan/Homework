// let
//     arr = [32, 16, 18, 22, 56, 20]

// function checkItems(val) {
//     return val % 2 === 0
// }
// console.log(arr.every(checkItems))
//     //task 1
function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIsogram('vbarev'))


//tsk 2