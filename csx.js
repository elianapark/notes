In JavaScript, a callback is a
function that is passed as an argument to another
function.
update(add10)

What is a closure ?
    A closure is a variable environment that has outlived its execution context and remains attached to a
function that also has outlived the same execution context.

If multiple functions are created in the same execution context and all of them outlive that execution context, those functions each have their own closure, and each of these closures will access the same variables in memory.Therefore, mutation of those variables by one of those functions will affect the other functions in the manner that they will be accessing the same(mutated) variables.
// // 1
// //Construct a function intersection that compares input arrays 
// //and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
function intersection(arg) { //no need to 
    newArr = [];
    //console.log(args)
    //let arg = args[0]
    var dict = {}; //
    for (let i = 0; i < arg.length; i++) {
        var arr = arg[i]
        for (var j = 0; j < arr.length; j++) {
            var item = arr[j]

            if (dict[item]) {
                dict[item]++;
            } else {
                dict[item] = 1 //dict.item (x) => can't change/ can run one key
            }
        }
    }
    for (let key in dict) {
        if (dict[key] == arg.length) {
            newArr.push(key)
        }
    }
    return newArr;
}

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]




// // 2
// //Construct a function union that takes an input array of arrays, 
// //compares each array, and returns a new flat array that contains all elements. 
// //If there are duplicate elements, only add it once to the new array. 
// //Preserve the order of the elements starting from the first element of the first input array. 
// //BONUS - Use reduce!
function union(arg) {
    newArr = [];
    for (let i = 0; i < arg.length; i++) {
        var arr = arg[i]
        //console.log(arr)
        for (var j = 0; j < arr.length; j++) {
            var item = arr[j]
            if (newArr.indexOf(item) == -1) {
                newArr.push(item)
            }
        }
    }
    return newArr;
}
const arr11 = [5, 10, 15];
const arr22 = [15, 88, 1, 5, 7];
const arr33 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]




// // // 3
// // //Construct a function objOfMatches that accepts two arrays and a callback. 
// // //objOfMatches will build an object and return it. To build the object, 
// // //objOfMatches will test each element of the first array using the callback to see 
// // //if the output matches the corresponding element (by index) of the second array. 
// // //If there is a match, the element from the first array becomes a key in an object, 
// // //and the element from the second array becomes the corresponding value.
function objOfMatches(arr1, arr2, func) {
    let dict = {}
    for (let i = 0; i < arr1.length; i++) {
        //compare
        let arr1Val = arr1[i]
        let arr2Val = arr2[i]

        let result = func(arr1Val)
        //console.log(result)
        if (result === arr2Val) {
            dict[arr1Val] = arr2Val
        }
    }
    return dict
}

// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];

// function uppercaser(str) {
//     return str.toUpperCase();
// }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }




// // // 4
// // //Construct a function multiMap that will accept two arrays 
// // //- an array of values and an array of callbacks. 
// // //multiMap will return an object whose keys match the elements in the array of values. 
// // //The corresponding values that are assigned to the keys will be arrays consisting of outputs 
// // //from the array of callbacks, where the input to each callback is the key.
// // function multiMap(values, callbacj) {
// //     Object.keys(0: {})
// //     return
// // }
// function multiMap(values, callbacks) {
//     let dict = {}
//     for (let i = 0; i < values.length; i++) {
//         let val = values[i]
//         dict[val] = null;
//         results = [];
//         //console.log(dict)
//         for (let j = 0; j < callbacks.length; j++) {
//             let func = callbacks[j]
//             let result = func(val)
//             results.push(result)
//         }
//         dict[val] = results;
//     }
//     return dict
// }

// function uppercaser(str) {
//     return str.toUpperCase();
// }

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// function repeater(str) {
//     return str + str;
// }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); //should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }







// // 5
// //Create a function majority that accepts an array and a callback. 
// function majority(array, callback) {
//     //The callback will return either true or false. 
//     //majority will iterate through the array and perform the callback on each element 
//     for (let i = 0; i < array.length; i++)
//     //until it can be determined if the majority of the return values from the callback are true. 
//     //If the number of true returns is equal to the number of false returns, majority should return false.//
// }
function majority(array, callback) {
    let majority = 0; //numTrue
    let minority = 0;
    for (let i = 0; i < array.length; i++) {
        var result = callback(array[i])
        if (result == true) {
            majority++;
        } else {
            minority++;
        }
    }
    if (majority > minority) {
        return true;
    } else {
        return false;
    }
}
const isOdd = function (num) {
    return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false






// // 6
// //Create a function prioritize that accepts an array and a callback. 
// function prioritize(array, callback) {
//     const newArr = []
//     //The callback will return either true or false. 
//     //prioritize will iterate through the array and perform the callback on each element, 
//     for (let i = 0, i < array.length; i++)
//         //and return a new array, where all the elements that yielded a return value of true come first in the array, 
//         return newArr
//     //and the rest of the elements come second.
// }

// function startsWithS(str) {
//     return str[0].toLowerCase() === 's';
// }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']







// // 7
// //Create a function countBy that accepts an array and a callback, 
// function countBy(array, callback) {
//     const obj = {}
//     //and returns an object. 
//     return obj
//     //countBy will iterate through the array and perform the callback on each element. 
//     for (let i = 0; i < array.length; i++);
//     //Each return value from the callback will be saved as a key on the object. 
//     //The value associated with each key will be the number of times that particular return value was returned.
// }

// // function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// // const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// // console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']







// // 8
// //Create a function countBy that accepts an array and a callback,
// function countBy(array, callback) {
//     const obj = {}
//     //and returns an object. 
//     return obj
//     //countBy will iterate through the array and perform the callback on each element. 
//     let (i = 0; i < array.length; i++);
//     //Each return value from the callback will be saved as a key on the object. 
//     //The value associated with each key will be the number of times 
//     //that particular return value was returned.
// }
// // Uncomment these to check your work!
// // function evenOdd(n) {
// //   if (n % 2 === 0) return 'even';
// //   else return 'odd';
// // }
// // const nums = [1, 2, 3, 4, 5];
// // console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }







// // 9
// //Create a function groupBy that accepts an array and a callback,
function groupBy(array, callback) {
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        let el = array[i]
        let returnVal = callback(el)
        obj[returnVal] = [];
    }
    //console.log(obj)
    for (j = 0; j < array.length; j++) {
        let el = array[j] //1.3
        let returnVal = callback(el) //1
        obj[returnVal].push(el) // {1: [1.3]}
    }
    //obj[] === {returnVal: el}
    return obj
}
// } //and returns an object. groupBy will iterate through the array and perform the callback on each element. 
// //Each return value from the callback will be saved as a key on the object. 
// //The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.






// // 10
//Create a function goodKeys that accepts an object and a callback. 
function goodKeys(obj, callback) {
    //The callback will return either true or false. 
    let newArr = []
    //goodKeys will iterate through the object and perform the callback on each value. 
    for (let i = 0; i < Object.values(obj).length; i++) {
        let result = callback(Object.values(obj)[i])
        if (result == true) {}
    }
    //goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
    return newArr
}
const sunny = {
    mac: 'priest',
    dennis: 'calculator',
    charlie: 'birdlaw',
    dee: 'bird',
    frank: 'warthog'
};

function startsWithBird(str) {
    return str.slice(0, 4).toLowerCase() === 'bird';
};
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']