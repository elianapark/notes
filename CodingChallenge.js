////////////////////////////////////////////////////////////////////////
//                               1                                    //
////////////////////////////////////////////////////////////////////////
/* Have the function FirstReverse(str) take the str parameter being passed 
and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH.
Use the Parameter Testing feature in the box below to test your code with different arguments. */

function FirstReverse1(string) {
    return string.split("").reverse().join("");
}
console.log(FirstReverse1("Coderbyte"));
console.log(FirstReverse1('hello'))

////////////////////////////////////////////////////////////////////////
//                               2                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function FirstFactorial(num) take the num parameter being passed 
and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, 
the range will be between 1 and 18 and the input will always be an integer.
Use the Parameter Testing feature in the box below to test your code 
with different arguments.
*/
function FirstFactorial(num) {
    for (let i = num; i > 1; i--) {
        num = num * (i - 1)
    }
    return num;
}
console.log(FirstFactorial(5));

////////////////////////////////////////////////////////////////////////
//                               3                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with 
that length. Ignore punctuation and assume sen will not be empty.*/
function LongestWord(sen) {
    sen = sen.replace(/[^a-zA-Z ]/gi, "");
    words = sen.split(" ");
    Longestword = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > Longestword.length) {
            Longestword = words[i]
        }
    }
    return Longestword;
}
console.log(LongestWord("I love dogs"));

////////////////////////////////////////////////////////////////////////
//                               4                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the string 
with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) 
and finally return this modified string. */
function LetterChanges(str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA"
    return str.split("").map((char, i) => newAlpha[alpha.indexOf(char)] || char).join("");
}
console.log(LetterChanges("fun times!"));

////////////////////////////////////////////////////////////////////////
//                               5                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000.*/
function SimpleAdding(num) {
    result = 0;
    for (let i = 1; i <= num; i++) {
        result += i
    }
    return result
}
console.log(SimpleAdding(5))

////////////////////////////////////////////////////////////////////////
//                               6                                    //
////////////////////////////////////////////////////////////////////////
/* Have the function LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. Words will be separated by only one space.*/
function LetterCapitalize(str) {
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1))
}
console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize("i ran there"));

// ////////////////////////////////////////////////////////////////////////
// //                               7                                    //
// ////////////////////////////////////////////////////////////////////////
/*Have the function SimpleSymbols(str) take the str parameter being passed 
and determine if it is an acceptable sequence by either returning the string true or false. 
The str parameter will be composed of + and = symbols with several characters between them 
(ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. 
The string will not be empty and will have at least one letter. */
function SimpleSymbols(str) {
    if (str[0] === "+" && str[str.length - 1] === "+") {
        return true;
    } else {
        return false;
    }
}
console.log(SimpleSymbols("f++d+"));
console.log(SimpleSymbols("+d+=3=+s+"));

// ////////////////////////////////////////////////////////////////////////
// //                               8                                    //
// ////////////////////////////////////////////////////////////////////////
/*Have the function CheckNums(num1,num2) take both parameters being passed and 
return the string true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1.
 */
function CheckNums(num1, num2) {
    if (num2 > num1) {
        return true;
    } else if (num2 === num1) {
        return -1;
    } else {
        return false;
    }
}
console.log(CheckNums(3, 122));
console.log(CheckNums(67, 67));

////////////////////////////////////////////////////////////////////////
//                               9                                    //
////////////////////////////////////////////////////////////////////////
function TimeConvert(num) {
    return Math.floor(num / 60) + ":" + (num % 60);
}
console.log(TimeConvert(130));

////////////////////////////////////////////////////////////////////////
//                              10                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function AlphabetSoup(str) take the str string parameter being passed 
and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string.*/
function AlphabetSoup(str) {
    //return str in alphabetic order
    newArr = [];
    newArr = str.split("").sort().join("");
    return newArr;
}
console.log(AlphabetSoup("hello"));

////////////////////////////////////////////////////////////////////////
//                              11                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function ABCheck(str) take the str parameter being passed and 
return the string true if the characters a and b are separated 
by exactly 3 places anywhere in the string at least once 
(ie. "lane borrowed" would result in true because there is exactly three characters 
between a and b). Otherwise return the string false.*/
function ABCheck(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" && str[i + 4] === "b") return true;
    }
    return false;
}
console.log(ABCheck("Laura sobs"));
console.log(ABCheck("after badly"));


////////////////////////////////////////////////////////////////////////
//                              12                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (
    ie. "All cows eat grass and moo" would return 8). 
Do not count y as a vowel for this challenge. */
function VowelCount(str) {
    vowels = str.match(/[aeiou]/g);
    return vowels.length
}
console.log(VowelCount("coderbyte"));

////////////////////////////////////////////////////////////////////////
//                              13                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function WordCount(str) take the str string parameter being passed 
and return the number of words the string contains 
(e.g. "Never eat shredded wheat or cake" would return 6). 
Words will be separated by single spaces.*/
function WordCount(str) {
    str = str.split(" ").length;
    return str;
}
console.log(WordCount("one 22 three"));

////////////////////////////////////////////////////////////////////////
//                              14                                    //
////////////////////////////////////////////////////////////////////////
/* Have the function ExOh(str) take the str parameter being passed and 
return the string true if there is an equal number of x's and o's, 
otherwise return the string false. Only these two letters will be entered in the string, 
no punctuation or numbers. 
For example: if str is "xooxxxxooxo" then the output should return false 
because there are 6 x's and 5 o's.*/
function ExOh(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') countX++;
        else if (str[i] === 'o') countO++;
    }
    if (countX === countO) return true;
    else return false;
}
console.log(ExOh("xooxo"));

////////////////////////////////////////////////////////////////////////
//                              15                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function Palindrome(str) take the str parameter being passed 
and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. 
For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string.*/
function Palindrome(str) {
    backStr = str.split("").reverse().join("");
    if (str === backStr) {
        return true;
    } else {
        return false;
    }
}
console.log(Palindrome("with"));
console.log(Palindrome("eye"));

////////////////////////////////////////////////////////////////////////
//                              16                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function ArithGeo(arr) take the array of numbers stored in arr 
and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
or return "Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. 
An arithmetic sequence is one where the difference between each of the numbers is 
consistent, where as in a geometric sequence, each term after the first is 
multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, 
and no array will contain all the same elements. */

function ArithGeo(arr) {
    var a = arr[1] - arr[0];
    var g = arr[1] / arr[0];
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1] !== a) && (arr[i] / arr[i - 1] !== g)) {
            return -1;
            break;
        } else if ((arr[i] - arr[i - 1] == a) && (i == arr.length - 1)) {
            return "Arithmetic";
            break;
        } else if ((arr[i] / arr[i - 1] == g) && (i == arr.length - 1)) {
            return "Geometric";
            break;
        }
    }
}
console.log(ArithGeo([5, 10, 15]))

////////////////////////////////////////////////////////////////////////
//                              17                                    //
////////////////////////////////////////////////////////////////////////
/* Have the function ArrayAdditionI(arr) take the array of numbers stored 
in arr and return the string true if any combination of numbers in the array 
(excluding the largest number) can be added up to equal the largest number 
in the array, otherwise return the string false. 
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
true because 4 + 6 + 10 + 3 = 23. The array will not be empty, 
will not contain all the same elements, and may contain negative numbers.*/
function ArrayAdditionI(arr) {
    //1. find the largest number
    const largestNum = Math.max(...arr);
    console.log(largestNum)

    //2. add up the rest
    let sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0)
    let result = sum - largestNum

    //3. true if largestNum === return value
    if (largestNum === result) {
        return true;
    } else {
        return false;
    }
}
console.log(ArrayAdditionI([4, 6, 25, 10, 1, 3])) //24

////////////////////////////////////////////////////////////////////////
//                              18                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function LetterCountI(str) take the str parameter being passed 
and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest 
because it has 2 e's (and 2 t's) and it comes before ever which also has
 2 e's. If there are no words with repeating letters return -1. 
 Words will be separated by spaces. */
//1. split the words
function LetterCountI(str) {
    str = str.split(" ");
    let temp = "";
    let counts = [];

    for (let i = 0; i < str.length; i++) {
        temp = "00" + str[i];
        counts.push(
            temp
            .split("")
            .sort()
            .join("")
            .match(/(\w)\1+/gi).length
        );
    }
    return Math.max(...counts) > 1 ?
        str[counts.indexOf(Math.max(...counts))] :
        -1;
}
//2. find words that has most repeated letters
//3. if there is no words then return -1
console.log(LetterCountI("Hello apple pie"))


function letterCountI(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            for (let k = j + 1; k < words[i].length; k++) {
                if (words[i].charAt(j) === words[i].charAt(k)) {
                    return words[i]
                }
            }
        }
    }
    return -1
}
console.log(letterCountI("Hello apple pie"))
////////////////////////////////////////////////////////////////////////
//                              19                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function SecondGreatLow(arr) take the array of numbers stored 
in arr and return the second lowest and second greatest numbers, respectively,
 separated by a space. 
 For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
 The array will not be empty and will contain at least 2 numbers. 
 It can get tricky if there's just two numbers! */
function SecondGreatLow(arr) {
    //return the 2nd lowest and 2nd greatest numbers, separated by space
    //1. return the second lowest number
    //2. return the second greatest number

    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => a - b);
    }
    result = arr[1] + " " + arr[arr.length - 2];
    console.log(arr);
    return result;
    //console.log(arr);
}
console.log(SecondGreatLow([1, 42, 5, 108, 180]));

////////////////////////////////////////////////////////////////////////
//                              20                                    //
////////////////////////////////////////////////////////////////////////
/*Have the function DivisionStringified(num1,num2) take both parameters 
being passed, divide num1 by num2, and return the result as a string with 
properly formatted commas. If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be 
"12,346". */
function DivisionStringified(num1, num2) {
    let result = Math.round(num1 / num2);

    result = result.toLocaleString();

    return result;
}
console.log(DivisionStringified(123456789, 10000));



// console.log("Hello World!");

// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and  'Kyle' in it.
let name = ['Chris', 'Samantha', 'Richard', 'Kyle'];

/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/

// create a function called societyName(array)
function societyName(array) {
    //create result
    let result = [];

    // sort => alphabetical order
    array.sort()
    //console.log(array)
    //name = eachOfTheirName[0]
    //for loop, I will get the first letter of each name
    for (let i = 0; i < array.length; i++) {
        result.push(array[i][0])

        //console.log(array[i][0])
    }
    // return the result 
    return result.join('');
}
//name = eachOfTheirName[0]
// sort => alphabetical order

//returns the name of the secret society



// Check that your 'societyName' function is working correctly by passing the value of 'names' to the function 'societyName'
// console.log(societyName(['Adam', 'Sarah', 'Malcolm']));
// console.log(societyName(['Chris', 'Samantha', 'Richard', 'Kyle']))

/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/
function countTimes(array, searchValue) {
    //filter or for loop+if statement
    let result = array.filter(function (item) {
        return item === searchValue
    })
    //console.log(result)
    //if values of the array is equal to value of SearchValue
    //return value => length of the value
    let realResult = result.length
    //console.log(realResult)
    return realResult
    //return how many times searchValue is present in array
}
// console.log(countTimes([1, 8, 9, 9, 10], 9))


/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

function wordSearchLetterCounter(arrays, searching) {
    //link with countTimes functionv
    //return function countTimes
    let answer = [];
    // using for loop -> loop through arrays
    for (let i = 0; i < arrays.length; i++) {
        answer.push(countTimes(arrays[i]))
        // console.log(countTimes(arrays[i]))
    }
    return answer;
    console.log(answer)
}

console.log(wordSearchLetterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "D")) //3