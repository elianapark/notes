// OBJECTS (name/value's paris) and the DOT
//Object: collections of values given names
//primitive property, object property, function method

// var person = new Object(); //

// person["firstName"] = "Tony"; //property (primitive)
// person["lastName"] = "Alicea";

// var firstNameProperty = "firstName";

// console.log(person); //{ firstName: 'Tony', lastName: 'Alicea' }
// console.log(person[firstNameProperty]) // Tony

// console.log(person.firstName); //Tony
// console.log(person.lastName); //Alicea

// person.address = new Object();
// person.address.street = '113 thresher ln';
// person.address.city = 'stafford';
// person.address.state = 'VA'

// console.log(person.address.street); //113 thresher ln
// console.log(person.address.city); //stafford
// console.log(person["address"]["state"]) //VA

// // Framework Aside
// //Namespace: a container for variables and functions
// //(typically to keep variables and functions with the same name separate)
// let greet = 'Hello!'
// let greet2 = "hola!"
// console.log(greet);

// let english = {};
// let spanish = {};

// english.greet = 'Hello!';
// spanish.greet = "hola!";
// console.log(english);
// console.log(spanish);

// //JSON: JavaScript Object Notation (inspired by object literal)
// let objectLiteral = {
//     firstName: 'Gyuri',
//     lastName: 'Park'
// }
// console.log(JSON.stringify(objectLiteral)); //{"firstName":"Gyuri","lastName":"Park"}

// let jsonValue = JSON.parse('{ "firstname: "mary", "isprogram": true }');
// console.log(jsonValue)

//Functions are objects
//first class functions: everything you can do with other types,
// you can do with functions
// assign them to variable, pass them around, create them on the fly

// Function (a special type of object)
//     - primitives
//     - object
//     - function
//     - name(optional)
//     - code (invocable)

// function greet() {
//     console.log('hi');
// }

// greet.language = 'English';
// console.log(greet.language);

// Function Statements and Function Expressions
//expression: unit of code that results in a value (it doesnt have to save to a variable)
// let a;
// a = 3;
// console.log(a) //3

// function greet() {
//     console.log('hellow')
// }
// greet() //hellow

// let aG = function () {
//     console.log('heloow')
// }
// aG() //heloow

// //conceptial aside by VALUE vs by REFERENCE
// //primitive value <- a
// //copy of primitive value <- b
// // b = a (pass by value to a funciton)
// let a = 3;
// let b;
// b = a;
// a = 2;
// console.log(a); // 2
// console.log(b); //3

// //object <- a
// //        <- b
// // b = a (by reference) - all objects including functions
// var c = {
//     greeting: 'hi'
// };
// var d;

// d = c;
// c.greeting = 'hello' //mutate: to change something
// console.log(c) //{ greeting: 'hello' }
// console.log(d) //{ greeting: 'hello' }

// function changeGreeting(obj) {
//     obj.greeting = 'hola';
// }
// changeGreeting(d);
// console.log(c); //{ greeting: 'hola' }
// console.log(d); //{ greeting: 'hola' }

// c = {
//     greeting: 'howdy'
// }
// console.log(c); //{ greeting: 'howdy' }
// console.log(d); //{ greeting: 'hola' }

//Objects, Functions, THIS
// variable environment
// 'THiS' //global object -> prints window on developer tool
// outer environment

// function aa() {
//     console.log(this)
//     this.newVar = 'annyeong'
// }

// let bb = function () {
//     console.log(this);
// }
// aa(); // Object[global] {}
// console.log(aa) //[Function: aa]
// bb(); // Object[global] {},  newVar: 'annyeong'

// let cc = {
//     name: 'c object',
//     log: function () {
//         console.log(this)
//         let setName = function (newName) {
//             this.name = newname; //this points to the global object
//             setName('updated'); //nothing
//             console.log(this);
//         }
//     }
// }
// cc.log(); // { name: 'c object', log: [Function: log] }

// ARRAYS - collection of anything
// let arr = new Array(1, 2, 3);
// let arr2 = [1, false, 3, {
//     name: 'me',
//     address: 'here st'
// }, function (name) {
//     let greeting = 'hello!!';
// }, "nice to meet you"];
// console.log(arr2)
// arr[4](arr[1].name); // ???

// ARGUMENTS and SPREAD
//variable environments
//this
//outer environments
// arguments (the parameters pass to a function)
// - JS gives a keyword of the same name which contains them all
// function sayHi(firstName, lastName, language) {
//   console.log(firstName); //undefined
//   console.log(lastName); //undefined
//   console.log(language); //undefined
// }
// sayHi();
// sayHi("John");
// sayHi("John", "Bibb");
// sayHi("John", "Bibb", "Korean");

// //Framework Aside - function overloading
// function whoAre(firstName, lastName, language) {
//   language = language || "en";
//   if (language === "en") {
//     console.log("Hello" + firstName + lastName);
//   }
//   if (language === "es") {
//     console.log("Hola" + firstName + lastName);
//   }
// }

// function greetEnglish(firstName, lastName) {
//   whoAre(firstName, lastName, "en");
// }

// function greetSpanish(firstName, lastName) {
//   whoAre(firstName, lastName, "es");
// }
// greetEnglish("Heigi", "dodo"); //HelloHeigidodo
// greetSpanish("monica", "lee"); //Holamonicalee

//Syntax Parsers_ Conceptual Aside

//Dangerous Aside: so easy to make mistake, hard to track so always avoid!
// semicolon is optional but I SHOULD PUT ;
// return;
// function getPerson() {
//   return;
//   {
//     firstName: "Amanda";
//   }
// }
// console.log(getPerson()); //undefined. If I remove; it will work

// //Whitespace: invisible characters that create literall 'space' in your written code
// // carriage returns, tabs, spaces
// let firstName, lastName, language;
// let person = {
//   firstName: "Ariel",
//   lastName: "Doe",
// };
// console.log(person); //{ firstName: 'Ariel', lastName: 'Doe' }

//IIFEs: immediately invoked function expressions

// CLOSURE
// function greet(whattosay) {
//     return function (name) {
//         console.log(whattosay + ' ' + name);
//     }
// }
// let sayHie = greet('Hi');
// sayHie('Tony'); // Hi Tony

// function buildFunctions() {
//     let arr = [];
//     for (let i = 0; i < 3; i++) { //2. execution context i=3, arr[f0,f1,f2]
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }
// let fs = buildFunctions(); //1. global execution context
// fs[0](); //0
// fs[1](); //1
// fs[2](); //2

//Framework aside: Funciton Factories
// function makeGreeting(language) {
//   //1. Global Execution Context

//   return function (firstName, lastName) {
//     //3. 4.
//     if (language === "en") {
//       console.log("Hello, " + firstName + lastName);
//     }
//     if (language === "es") {
//       console.log("Hola, " + firstName + lastName);
//     }
//   };
// }
// let greetInEnglish = makeGreeting("en"); //2. execution context
// let greetInSpanish = makeGreeting("es"); //2. execution context.

// greetInEnglish("You", "Park"); //1. Global Execution Context
// greetInSpanish("Maca", "honey"); ///1. Global Execution Context

// console.log(greetInEnglish()); //Hello, YouPark
// console.log(greetInSpanish()); //Hola, Macahoney

//Closure, Callback
// function sayHiLater() {
//     let greetings = 'Hi!';

//     setTimeouts(function () {
//         console.log(greetings);
//     }, 3000)
// }
// sayHiLater();

// function tellMe(callback) {
//   let a = 1000;
//   let b = 2000;
//   callback();
// }
// tellMe(function () {
//   console.log("I am done");
// });

//Function
// call()
// apply()
// bind()
// name
// code
var person = {
  firstname: "Jone",
  lastname: "do",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};
var logName = function (lan1, lan2) {
  console.log("logged " + this.getFullName()); //logged Jone do
  console.log(lan1 + " " + lan2); //undefined undefined
};
var logPersonName = logName.bind(person);
logPersonName(); //logged Jone do
logName.call(person, "en", "es"); //en es
logName.apply(person, ["en", "es"]);

//Function Borrowing
let person2 = {
  firstname: "shawn",
  lastname: "bibb",
};
console.log(person.getFullName.apply(person2)); //Shawn bibb

//function currying: creating a copy of function, but with some preset parameters
//  useful for bind
function multiply(a, b) {
  return a * b;
}
let multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo); //[Function: bound multiply]
console.log(multipleByTwo(4)); // 8
