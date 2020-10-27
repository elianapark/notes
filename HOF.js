//map
let vals = [4, 8, 1, 2, 9];
console.log(vals);

function doubler(x) {
  return x * 2;
}
vals.map(doubler); //return new array. doesnt do anything to current array.
console.log(vals);

let doubled = vals.map(doubler); //set variables
console.log(doubled); //returned new array.

//shorter version
let values = [4, 8, 1, 2, 9];
values = values.map((x) => x * 2);
console.log(values);

//fill
values.fill(Math.random());
console.log(values);

//map
valueMap = values.map((x) => Math.random() * 1000);
console.log(valueMap);

//fill and map, Array variable
valueMapFill = Array(100).fill(0).map(Math.random);
console.log(valueMapFill);

//reduce: for of loop
let valReduce = [5, 4, 3, 2, 1];
let sum = 0;
for (let vr of valReduce) {
  sum += vr;
}
console.log(sum);

//reduce: array to reduce to one thing..?
let valReduces = [5, 4, 3, 2, 1];

function sums(acc, val) {
  return acc + val;
}
let answer = valReduces.reduce(sums, 10); //function sum can be one line here
console.log(answer);

//filter
let arr = [9, 3, 4, 5, 23, 34];

function isEvens(nums) {
  return nums % 2 == 0;
}
arr = arr.filter(isEvens);
console.log(arr); //only even ones left

// CSP question
const phoneBook = {};
const names = ["Mira", "Royce", "Kathie"];
const numbers = ["3234958675", "9164059384", "4154958675"];

for (let i = 0; i < names.length; i++) {
  let result = [];
  result.push(names[i]);
  phoneBook[result] = numbers[i];
}

//Uncomment the lines below to test your code

console.log(phoneBook["Mira"]); //=> 3234958675
console.log(phoneBook["Royce"]); //=> 9164059384
console.log(phoneBook["Kathie"]); //=> 4154958675

//pluralize
//create a function pluralize that takes an array of strings as input
function pluralize(arr) {
  //return new array with an 's'
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 's')
  }
  return newArr
}
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

//map
//create a function called substractTwo that will accept a number
function subtractTwo(num) {
  //then return that number -2
  return num - 2;
}

//function called map that takes two inputs - array of numbers, cb function
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]))
  }
  return result;
}
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]


//forEach
//create a function forEach which takes an array and a callback
function forEach(array, callback) {
  //and runs the callback on each element of the array.
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
  //forEach does not return anything
}
//use forEach for function map above
function map(array, callback) {
  const result = [];
  // for (let i = 0; i < array.length; i++) {
  //   result.push(callback(array[i]))
  // }
  forEach(arr, function (elem) {
    result.push(callback(elem))
  })
  return result;
}



//filterArray
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];

function func1(num) {
  return (num % 2 == 0)
}

function func2(num) {
  return (num % 2 != 0)
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


//eitherFilter
//add code to the function eitherFilter. The array returned from it should contain all elements
//in the passed in array that yield a truthy return value when passed into EITHER of the two callbacks passed into either Filter
// function eitherFilter(array, callback1, callback2) {
//   return array.filter(function (item) {
//     return callback1(item) || callback2(item)
//   })

// }

// // Uncomment these to check your work!
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

//eitherCallback
function eitherCallback(callback1, callback2) {
  return function (x) {
    return callback1(x) || callback2(x)
  }
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]


//reduce
//the function reduce takes array and reduces the elements to a single value.
function reduce(arr, cb, initial) {
  //   //loops through the array
  arr.reduce(function (item1, item2) {
    return item1 + item2
  }, initial)

  arr.map(function (item) {
    return cb(item)
  })
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
}
console.log(reduce(nums, add, 0)); // should log 8


//intersection: Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

function intersection(arr) {
  var dict = {};
  arr.map(function (item) {
    item.map(function (item2) {
      if (dict[item2] !== undefined) {
        dict[item2]++;
      } else {
        dict[item2] = 1
      }
    })
  })
  //console.log(dict)
  var result = [];
  for (let key in dict) {
    if (dict[key] === arr.length) {
      result.push(parseInt(key))
    }
  }
  return result;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


//union
//construct a function union that takes an input array of arrays, compares each array,
//and returns a new flat array that contains all elements.
function union(arr) {
  let result = [];

  arr.map(function (item) {
    item.map(function (item2) {
      if (result.indexOf(item2) === -1) { //when it doesn't exist
        result.push(item2)
      }
    })
  })

  return result;
}
// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3]));


//objOfMatches
function objOfMatches(arr1, arr2, cb) {
  //build an object and return it
  let obj = {};
  //test each element of the first array using the callback to see if output matches with second array
  arr1.map(function (item, index) {
    if (cb(item) === arr2[index]) {
      //if there is a match. ele from first array becomes a key in object
      obj[item] = arr2[index]
    }
  })
  return obj;
}
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];

// function uppercaser(str) {
//   return str.toUpperCase();
// }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


//arrToObj
function arrToObj(array, func) {
  let newObj = {};
  //return object that has elements from passed in array as keys
  array.map(function (item) {
    newObj[item] = func(item)
  })
  //outputs from the callback as the corresponding values
  return newObj;
}
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }


//multiMap
function multiMap(arr, arrCb) {
  const result = {};
  //return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
  for (let i = 0; i < arr.length; i++) {
    const emptyArray = [];
    for (let j = 0; j < arrCb.length; j++) {
      emptyArray.push(arrCb[i] arr[i])
    }
    result[arr[i]] = emptyArray
  }
}

function goodKeys(obj)


//once
function after(numOfTimes, callback) {

}