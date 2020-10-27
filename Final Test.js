// CHALLENGE 1 - ADD CODE BELOW

//Define a function select which takes two arguments, an array and a callback function. 
const select = (array, callback) => {
    const result = [];
    //select will iterate/loop through the array
    for (const test of array) {
        //If the callback called on a certain value returns true, 
        //the original value (the input to the callback) is pushed to a new array.
        if (callback(test)) {
            result.push(test);
        }
    }
    return result;
};
//select will return this new array. The callback function can be considered a test in 
//that it will return either true or false 
//depending on the input. 
//and pass each array element to the callback as an argument.
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const array = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(array, isEven)); // should log: [2, 4]




// CHALLENGE 2 - ADD CODE BELOW
//Define a function russianRoulette that accepts a number (let us call it n),
function russianRoulette(n) {
    let numberOfCalls = 0;
    //and returns a function. The returned function will take no arguments, 
    return () => {
        numberOfCalls++;
        //and will return the string ‘click’ the first n - 1 number of times it is invoked. 
        if (numberOfCalls < n) {
            return "click";
            //On the very next invocation (the nth invocation), 
            //the returned function will return the string ‘bang’.
        } else if (numberOfCalls === n) {
            return "bang";
        } // On every invocation after that, the returned function returns the string ‘reload to play again’.
        else {
            return "reload to play again";
        }
    };
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘bang’
console.log(play()); // should log: ‘reload to play again’
console.log(play()); // should log: ‘reload to play again’








// CHALLENGE 3 - ADD CODE BELOW
//Define a function goldenSequence that takes a number n and returns n's corresponding Fibonacci number.
function goldenSequence(n) {
    //Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    // - Each number is found by adding the previous two
    // - The first two values, index 0 and index 1, of the sequence shall be 1 and 1
    if (n === 0 || n === 1) {
        return 1;
    }
    return goldenSequence(n - 1) + goldenSequence(n - 2);
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(goldenSequence(0)); // should log: 1
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 2
console.log(goldenSequence(3)); // should log: 3
console.log(goldenSequence(4)); // should log: 5
console.log(goldenSequence(12)); // should log: 233