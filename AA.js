// //1
// function biggerFilter(num, target) {
//     for (let i = 0; i < num.length; i++) {
//         if (num >= target) {
//             return num
//         } else {
//             return 'idk'
//         }
//     }
// }
// console.log(biggerFilter([7, 3, 2, 8, 12], 5))

// //2
// function strangeWords(words) {
//     for (let i = 0; i < words.length; i++) {
//         if (words.length < 6 && words[0] === 'e') {
//             return //nothing
//         } else if (words.length < 6) {
//             return words[i]
//         } else if (words[0] === 'e') {
//             return words[i]
//         }
//     }
// }

// function printStringArray(strings) {
//     if (strings.length === 0) {
//         console.log('[]')
//     } else {
//         console.log(`[${strings.join('","')}]`)
//     }
// }
// printStringArray(strangeWords(["eat", "eggs", "university", "taco"]))



function positiveProduct(nums) {
    //return positive numbers
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArr.push(nums[i])
        }
    }


    for (let j = 0; j < newArr.length; j++) {
        newArr = newArr[j] * newArr
    }
    return newArr

}

console.log(positiveProduct([-1, 4, 3, -3, 2]));
console.log(positiveProduct([5, -2, 5]));
console.log(positiveProduct([4]));