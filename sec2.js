// Name/value pair: a name which maps to a unique value
//      The name maybe defined more than once, bt only can have one value in any given context
//      That value may be more name/value pairs => address = '113 thresher ln'


// OBJECT: collection of name value pairs

//Execution Context (global)
    //(Creation Phase)
    //Global Object: lexical environment (window), Not inside a function
    //this
    //outer environment: null
    //my code, Hoisting(setup memory space for variables and functions)


// let a = 'hello world';
// console.log(a)

// function b(){
//     console.log('idk')
// }
// b();

// var a = 'hello world';
// console.log(a);

// if (a === undefined) {
//     console.log('a is undefined')
// } else {
//     console.log('a is defined')
// }
// NEVER set the value - let a = undefined _ NEVER do this




//CONCEPTUAL ASIDE: single threaded(One command at a time), 
//                  synchronous execution(One at a time, in order)


//Function Invocation & The Execution Stack
    // invocation: running a function (in JS. by using parenthesis () )
// function b () {  //global memory 1
// }
// function a() {   //global memory 2
//     b();        //execition context 4
//                 // and popped off
// }
// a();    //execution context 3




//Function, Context,
    //variable environment: where the variables live, how they relate to each other in memory
// function b () {     // 5. Execution Context 
//     var myVar;      // 6. (myVar = undefined)
//     console.log(myVar); //c. undefined
// }

// function a() {  // 3. Execution Context (create and execute)
//     var myVar = 2; // 3.1 myVar = 2
//     console.log(myVar); //b. 2
//     b();    // 4. Execution context (myVar = undefined)

// }

// var myVar = 1;  // 1. Global Execution Context (created and code is executed)
// console.log(myVar); //a. 1
// a();    // 2. Execution Context (create and execute)






//THE SCOPE CHAIN: 1 -> 2 -> 3
function b() { // 3. Execution context (create and execute) //lexically sitting in global
    console.log(myVar);
}

function a() { // 2.1. myValue = 2 
    var myVar = 2;
    b();    // 3. Execution context (create and execute) => refer to OUTER ENVIRONMENT ( 1 )
}

var myVar = 1; // 1. Gobal Execution Context (created and code is executed)
a();    //2. Execution context => refer to OUTER ENVIRONMENT ( 1 )






//SCOPE. ES6. LET
    //scope: where a variable is available in your code
    //let allows to use block scoping


//Asynchronous callback
    // Asynchronous: (more than one at a time) 
    // Callback:
//Event Queue: Click / HTTP Request : clickHandler()