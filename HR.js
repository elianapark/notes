function applyParseInt(numString) {
  // create a result variable
  let result = Number.parseInt(numString);
  // assign it to parsed integer from input string
  // return result
  return result;
}
var parsedInteger = applyParseInt("23.5");
console.log(parsedInteger);

function applyParseFloat(numString) {
  // create a result variable
  let result = Number.parseFloat(numString);
  // assign it to parsed float from input string
  // return result
  return result;
}
var parsedFloat = applyParseFloat("101.78744414");
console.log(parsedFloat);

function generateRandomNumber(min, max) {
  let random = Math.random() * (max - min) + min;
  return random;
}
var randomNumber = generateRandomNumber(1, 10);
console.log("should be between 1 and 10:", randomNumber);

//indexOf
function applyIndexOf(string, subString) {
  // create an index variable
  let index = string.indexOf(subString);
  // assign it to the index inside o
  return index;
}
var string1 = "Quicksort";
var subString1 = "sort";
var resultIndex1 = applyIndexOf(string1, subString1);
console.log("should log 5:", resultIndex1);

var string2 = "size,color,cut,price";
var subString2 = "cut";
var resultIndex2 = applyIndexOf(string2, subString2);
console.log("should log 11:", resultIndex2);

//.toString()
function generateHaiku(firstLine, secondLine, thirdLine) {
  // create a haiku variable
  let haiku = firstLine + "\n" + secondLine + "\n" + thirdLine;
  // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
  // return the haiku variable
  return haiku;
}
var resultHaiku1 = generateHaiku(
  "In the twilight rain",
  "these brilliant-hued hibiscus -",
  "A lovely sunset."
);
console.log("should log formatted haiku:\n" + resultHaiku1);

var resultHaiku2 = generateHaiku(
  "The lamp once out",
  "Moves west, flowers' shadows",
  "Creep eastward."
);
console.log("should also log formatted haiku:\n" + resultHaiku2);

//array-length
function getLastElement(array) {
  // create a lastIndex variable
  // assign it to the last index in the array
  let lastIndex = array.length - 1;
  // create a lastElement variable
  // assign it to the last element in the string (make use of lastIndex)
  let lastElement = array[lastIndex];
  // return the lastElement variable
  return lastElement;
}
var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);

//splice()
function addAnElementInGeneral(array, index, element) {
  // add the element to the array at the index given
  array.splice(index, 0, element);
  // (be sure not to replace any existing elements)
  // return the array
  return array;
}
var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log("should log [7, 8 , 9, 10]:", resultArray1);

var resultArray2 = addAnElementInGeneral(["q", "r", "t"], 2, "s");
console.log('should log ["q", "r", "s", "t"]:', resultArray2);

//delete
function removeAnElementInGeneral(array, index) {
  // remove the element from the array at the index given
  array.splice(index, 1);
  // return the array
  return array;
}
var resultArray1 = removeAnElementInGeneral([8, 9, 10, "bad entry", 11], 3);
console.log("should log [8, 9, 10, 11]:", resultArray1);

var resultArray2 = removeAnElementInGeneral(["one", "two", 452, "three"], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);

//if statement
function findAgent(agentList, agentToSearchFor) {
  // if agentToSearchFor is present within agentList
  if (agentList.indexOf(agentToSearchFor) > -1) {
    return `${agentToSearchFor} is present within Agent list`;
  }
  // return '{agentToSearchFor} is present within Agent list'
}
var result1 = findAgent(["001", "005", "007", "009"], "007");
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(["tiny", "teeny", "eeny", "meany"], "teeny");
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(["red", "blue", "green"], "orange");
console.log(
  "Should log undefined, because function returned nothing:",
  result3
);

//if Statement with OBJECT
function generateReportSummary(reportTotals, teamName) {
  // if teamName's report total is greater than 5
  if (reportTotals[teamName] > 5) {
    return `${teamName} has surpassed goal with ${reportTotals[teamName]} reports`;
  }
}
var result1 = generateReportSummary({
    a_team: 12,
    b_team: 7,
    c_team: 0,
  },
  "b_team"
);
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({
    blue: 18,
    red: 8,
    green: 12,
  },
  "blue"
);
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({
    gamma: 1,
    epsilon: 3,
    alpha: 4,
    bravo: 17,
  },
  "alpha"
);
console.log(
  "Should log undefined, because function returned nothing:",
  result3
);

//if else-indexOf
function findIngredient(ingredientList, ingredientToSearchFor) {
  // if ingredientToSearchFor is present within ingredientList
  if (ingredientList.indexOf(ingredientToSearchFor) > -1) {
    return `${ingredientToSearchFor} is on the list`;
  } else {
    return `${ingredientToSearchFor} is not on the list`;
  }
  // return '{ingredientToSearchFor} is on the list'
  // otherwise
  // return '{ingredientToSearchFor} is not on the list'
}

//Array.isArray
function isAnArray(input) {
  // create a result variable
  let result = Array.isArray(input);
  // assign it to a call to the applicable method
  return result;
  // return the result variable
}
var resultBoolean1 = isAnArray([1, 2, 3]);
console.log("should log true:", resultBoolean1);

var resultBoolean2 = isAnArray({
  name: "Tom",
  friend: "Jerry",
});
console.log("should log false:", resultBoolean2);

//slice
var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);

console.log("altitudes for today's hike:", todaysHike);

console.log(
  "original altitudes along trail is not affected by slice:",
  altitudesAlongHikingTrail
);

//join
function applyJoin(arrayOfStrings, string) {
  let joinedString = arrayOfStrings.join(string);

  return joinedString;
}
var resultString1 = applyJoin(["first", "second", "third"], "--");
console.log("should log joined string:", resultString1);

var resultString2 = applyJoin(["git", "commit"], " ");
console.log("should also log joined string:", resultString2);

//reassigning object
function reassignAProperty(object, key, newValue) {
  // reassign the property's value in the object, located at the key, to the newValue parameter
  object[key] = newValue;
  // return the input object
  return object;
}
var resultObject = reassignAProperty({
    name: "Ramses",
    favoriteFood: "chicken",
    type: "dog",
  },
  "favoriteFood",
  "goose"
);
console.log('should replace "chicken" with "goose":', resultObject);

//
function isPropertyPresent(object, key) {
  // create an isPresent variable
  let isPresent = object[key] !== undefined;
  // assign it to a comparison between object's value at key and undefined
  // return the isPresent variable
  return isPresent;
}
var object1 = {
  a: 1,
  b: 2,
};
var key1 = "c";
var result1 = isPropertyPresent(object1, key1);
console.log("should log false:", result1);

var object2 = {
  size: "M",
  color: "green",
  cut: "tapered",
  price: 30,
};
var key2 = "cut";
var result2 = isPropertyPresent(object2, key2);
console.log("should log true:", result2);

//unshift
function applyUnshiftAgain(arrayOfArrays, index, element) {
  // add the element to the front of the inner array within the array of arrays located at the index
  arrayOfArrays[index].unshift(element);
  return arrayOfArrays;
  // return the array of arrays
}
var resultArray1 = applyUnshiftAgain(
  [
    [1, 3],
    [10, 11],
    [9, 4],
  ],
  1,
  5
);
console.log("should log [ [1, 3], [5, 10, 11], [9, 4] ]:", resultArray1);

var resultArray2 = applyUnshiftAgain(
  [
    ["ag", "bc"],
    ["ef", "hi"],
  ],
  0,
  "iq"
);
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);

//nested Arrays
function loopAnArrayOfArrays(arrayOfArrays) {
  // create a loop which iterates over the input array
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++)
      console.log(arrayOfArrays[i][j]);
  }
}

//nested objects
function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
  for (let key in nestedObject) {
    for (let innerKey in nestedObject[key]) {
      console.log(nestedObject[key][innerKey]);
    }
  }
  // create an inner loop which iterates over current inner object
  // log current value to the console
}

//function
function computeSumOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// ******** important
function countAllCharacters(string) {
  if (string === "") {
    return {};
  }

  let count = {};
  let alphabet = string.split("");

  for (let i = 0; i < alphabet.length; i++) {
    currentAlphabet = alphabet[i];
    if (count[currentAlphabet] === undefined) {
      count[currentAlphabet] = 1;
    } else {
      count[currentAlphabet]++;
    }
  }
  return count;
}

//** important */
function countWords(str) {
  // return object
  //key: str, value: how many times appeared
  if (str === '') {
    return {}
  }
  let obj = {}
  //let count = 0
  let word = str.split(' ')
  for (let i = 0; i < word.length; i++) {
    //when it is present - increment the value
    //Do not for get [i]
    if (word === obj[word[i]]) {
      //count++
      obj[word[i]] += 1
    } //when it is not present - instantiate the count for the current word
    else if (obj[word[i]] === undefined) {
      obj[word[i]] = 1
    }
  }
  return obj
}
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}


//comparing which words are shortest
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  //let longestWord = word1

  let arrays = [word1, word2, word3]

  let minLength = word1.length

  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length < minLength) {
      minLength = arrays[i].length
    }
  }
  return minLength;
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1


//how many properties are given?
function countNumberOfKeys(obj) {
  let count = 0
  for (let key in obj) {
    count++
  }
  return count
}
var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3


//advance3
function select(arr, obj) {

  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      result[arr[i]] = obj[arr[i]]
    }
  }
  return result;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }


//arrays
function removeElement(array, discarder) {
  if (array.length === 0) {
    return [];
  }
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== discarder) {
      result.push(array[i])
    }
  }
  return result;
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]


// got it right, but
//how to do:
//  1.If all the elements match, it should return an empty array.
if the length of new array equals the length of the original array, and
return an empty array
//  2.If no elements match, "keep" should return an empty array.
if there is no match, the new array stays empty