/*
Make Plans
Create a function makePlans that accepts a string. This string should be a name. 
The function makePlans should call the function callFriend and return the result. 
callFriend accepts a boolean value and a string. 
Pass in the friendsAvailable variable and name to callFriend.

Create a function callFriend that accepts a boolean value and a string. 
If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'. 
Otherwise it should return 'Everyone is busy this weekend'. */
let friendsAvailable = true;

function makePlans(name) {
    return callFriend(friendsAvailable, name)
}

function callFriend(bool, name) {
    if (bool === true) {
        return `Plans made with ${name} this weekend`
    } else {
        return `Everyone is busy this weekend`
    }
}
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."



/*
droids:
Complete the function droids that accepts an array of strings and 
iterates through the array using a FOR loop. Update the variable result 
to "Found Droids!" if the array contains the string "Droids". 
Otherwise update the variable result to "These are not the droids you're looking for." 
Return your updated result.*/
function droids(arr) {
    let result = 'These are not the droids you\'re looking for.';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Droids') {
            return "Found Droids!"
            //if가 아니면 , 엘스로 리턴이 되므로 삭제해야함.
        }
    }
    return result;
}
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."



/*
droids: forEach */
function droidss(arr) {
    let results = 'These are not the droids you\'re looking for.';
    arr.forEach(char => {
        if (char === "Droids") {
            results = "Found Droids!"
        }
    })
    return results;
}
const starWarss = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const throness = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droidss(starWarss)) // should log: "Found Droids!"
console.log(droidss(throness))



/*
Short-Circuiting a Loop
Complete the function holidays that accepts an array of strings and iterates through the array. 
If the array contains the string "October", return "Happy Halloween". 
Otherwise, return the string "Have a great day!". 
Do not use a variable to store the result that you are returning.*/

function holidays(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "October") {
            return "Happy Halloween"
        }
    }
    return "Have a great day!"
}
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"



/*
For Loops - updating array elements
Using a FOR loop, write a function addN which adds the argument n 
to each number in the array arr and returns the updated arr. */

function addN(arr, n) {
    arr.forEach((ele, i) => {
        arr[i] += n
    })
    return arr
}
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

function addNForLoop(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += n
    }
    return arr
}
console.log(addNForLoop([1, 2, 3], 3), 'addNForLoop-1')
console.log(addNForLoop([3, 4, 5], 2), 'addNForLoop-2')



/*
For loops - summing array elements:
Using a FOR loop, 
write a function getTheSum which adds each element in arr to find the array total.
 */
function getTheSum(arr) {
    let sumTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        sumTotal += Number(arr[i])
    }
    return sumTotal;
}
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33



/*
multiplyAll:
Create a function multiplyAll that takes an unknown number of integer arguments, 
multiplies them all together, and returns the result. */
function multiplyAll() {
    if (arguments.length === 0) {
        return 0
    }
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i]
    }
    return total;
}
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375


function multiplyAll2(...nums) {
    if (nums.length === 0) {
        return 0
    }
    return nums.reduce((acc, num) => acc * num, 1)
}
console.log(multiplyAll2(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll2(5, 5, 5, 3)) // should log: 375





/*
Loops - Summing Two Arrays:
Write a function mergingElements which adds each element in array1 to the corresponding element 
of array2 and returns the new array. */
function mergingElements(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            result.push(array1[j] + array2[j])
        }
        return result;
    }

}
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]



/*
Loops& Control Flow:
Write a function mergingTripletsAndQuints which adds the corresponding element from array2 
if the element from array1 is divisible by 3 or 5 and returns the new array. */
function mergingTripletsAndQuints(array1, array2) {
    return array1.map((a, index) => {
        if ((a % 3 === 0) || (a % 5 === 0)) {
            return a + array2[index]
        }
        return a
    })
}
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]


/*
While loop:
Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. 
When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' 
When it's at 3, print 'I'm about to explode with excitement!' 
When the counter is finished, print 'That was kind of a let down'. */
function imAboutToExplodeWithExcitement(n) {
    // ADD CODE HERE
    // create function that goes backwards n
    // n, n-1, n-2, ...
    // when n === 5 =>
    //when n === 3 => 
    //when n === 0 => 
    let i = n;
    while (i < n) {
        n++
    } {
        if (n === 5) {
            'Oh wow, I can\'t handle the anticipation!'
        } else if (n === 3) {
            'I\'m about to explode with excitement!'
        } else if (n === 0) {
            'That was kind of a let down'
        }
    }
    return n
}
console.log(imAboutToExplodeWithExcitement(10));
// expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

/*
 Control Flow - If statements and the Math object
:Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. 
The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.
 
*/
// function closestToTheMark(player1, player2) {
//     const theMark = Math.floor(Math.random() * 100)
//     console.log(`If theMark is ${theMark}...`);
//     // ADD CODE HERE
// }
// console.log(closestToTheMark(25, 75));



/* Loops- range:
Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
The value returned should be an array with the low, high, and range.
 */
// function getTheRange(arr){
//     // ADD CODE HERE
//     //find max
//     //find min
//     //max - min
//   }

//   // Uncomment these to check your work!
//   // console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]




/* Loops- multiple conditions:
Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 
to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 
to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
 */
// function addingAllTheWeirdStuff(array1, array2){
//     // ADD CODE HERE
//   }

//   // Uncomment these to check your work!
//   // console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
//   // console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]





/* disemvowel
:Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
 */
function disemvowel(string) {
    // objects that includes vowels
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };
    // create empty string - act as our result value
    let result = '';
    // loop through the inputted string
    for (let i = 0; i < string.length; i++) {
        let letter = string[i].toLowerCase();
        // convert the letter to lowercase to catch upper case inputs
        // check if the letter is inside of the object
        if (!vowels[letter]) {
            result += string[i];
        }
        // if not, concatenate that letter onto result
    }
    return result
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'





/* addWaldo:
:Create a function addWaldo that accepts an object with keys being first names and values being last names. 
For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' 
with the value 'unknown' to the object and return the mutated object.
*/

// function addWaldo(obj) {
//     for (let i = 0; i < obj.length; i++) {
//         if (Object.)
//     }
// }











/*
:
 */
function addingAllTheWeirdStuff(array1, array2) {
    // adds sum of all odd numbers in array2 + each element under 10 in arr1
    // adds sum of all even numbers in array2+ each element above 10 in arr1
    //1. seperate even and odd numbers
    //2. seperate under and above 10
    let sumOfOdd = 0;
    let sumOfEven = 0;
    let overTwenty = false;
    for (let a2 = 0; a2 < array2.length; a2++) {
        if (array2 % 2 === 0) {
            sumOfEven += array2[a2]
            console.log(sumOfEven)
        } else if (array2 % 2 !== 0) {
            sumOfOdd += array2[a2]
            console.log(sumOfOdd)
        }
        if (array2[a2] > 20) {
            overTwenty = true;
        }
    }
    console.log(sumOfEven);
    console.log(sumOfOdd)
    for (let a1 = 0; a1 < array1.length; a1++) {
        if (array1[a1] < 10) {
            array1[a1] += sumOfOdd;
        } else if (array1[a1] > 10) {
            array1[a1] += sumOfEven;
        }
        if (overTwenty) {
            array1[a1] += 1
        }
    }
    // console.log로 array1의 값이 찍혀야 하므로
    // array1을 리턴한다.
    return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]));
// expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]));
// expected log [11, 13, 15, 46, 44, 11]

function addingAllTheWeirdStuff(array1, array2) {
    //1. sum of odd numbers in array2 -> add array1>10
    //2. sum of even numbers in array2-> add array1<10
    let sumOfOdd = 0;
    let sumOfEven = 0;
    let overTwenty = false;

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 === 0) {
            sumOfEven += array2[i]
        } else {
            sumOfOdd += array2[i]
        }

        if (array2[i] > 20) {
            overTwenty = true;
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 10) {
            array1[i] += sumOfOdd
        } else if (array1[i] > 10) {
            array1[i] += sumOfEven;
        }
        if (overTwenty) {
            array1[i] += 1
        }
    }
    return array1
}
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]





function mergingTripletsAndQuints(array1, array2) {
    //let result = 0;
    for (let i = 0; i < array1.length; i++) {

        if (array1[i] % 3 === 0) {
            array1[i] += array2[i]
        } else if (array1[i] % 5 === 0) {
            array1[i] += array2[i]
            // } else {
            //     array1[i] += array2[j]
            // }
        }


    }
    return array1;
}
// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]

console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]




function imAboutToExplodeWithExcitement(n) {


    while (n > 0) {
        n--;
        if (n === 5) {
            console.log('Oh wow, I can\'t handle the anticipation!')
        }
        if (n === 3) {
            console.log('I\'m about to explode with excitement!')
        }
        if (n === 0) {
            console.log('That was kind of a let down')
        }
        console.log("The number is " + n);
    }
    //console.log(n);
}

// Uncomment the line below to check your work!
console.log(imAboutToExplodeWithExcitement(10));
// expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'