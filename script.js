// concat
// const array1 = ['1', '2', '3'];
// const array2 = ['4', '5', '6'];
// const array3 = array1.concat(array2);

// console.log(array3);


// fill
// const arr = ['Heloo', 'my', 'is', '.....']
// arr.fill('John', 3)

// console.log(arr)


// find

// const arr2 = ['5', '6', '7', '8', '3']

// const chnagedarr2 = []

// arr2.find((el) => {
//     el % 2 ? chnagedarr2.push(el) : el
// })

// console.log(chnagedarr2)


// findIndex

// let arr3 = [1, 5, 7, 8, 10, 7];
// let index = arr3.findIndex(rank => rank === 7);
// console.log(index);


// flat

// const numbers = [1, 2, [3, 4, 5]];
// const flatNumbers = numbers.flat();

// console.log(flatNumbers);


// map

// const numbers = [1, 2, 3, 4, 5];
// const chnagednumber = numbers.map(el => el * 2);

// console.log(chnagednumber);

// reduce

// const numbers = [1, 8, 7, 9, 5];
// numbers.reduce((el, ac) => el < ac ? console.log(el) : el);


// let
//     arr = [32, 16, 18, 22, 56, 20]

// function checkItems(val) {
//     return val % 2 === 0
// }
// console.log(arr.every(checkItems))
//     //task 1

// function isIsogram(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; ++i) {
//         for (let j = i + 1; j < str.length; ++j) {
//             if (str[i] === str[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(isIsogram('barev'))
//tsk 2