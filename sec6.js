// Function Constructor
// NEW
// let john = new Person();

function Person() {
    this.firstname = 'Jone'
    this.lastname = 'Doe'
}
Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname
}
let jone = new Person('jone', 'doe');
console.log(jone)

let jane = new Person('jane', 'Doee')
console.log(jane)

Person.prototype.getFormalFullName = function () {
    return this.firstname + ' ' + this.lastname;
}




// Function constructors: a normal function that is used to construct objects
// "THIS" variable points a new empty object, and that object is returned from the function automatically

//Function ( a special type of object)
// "invocable" code
// Name
//Prototype (used only by the new operator)





// Dangerous Aside: Arrays and for..in
// let arr = ['1', '2', '3']
// for (let propp in arr) {
//     console.log(propp + ': ' + arr[propp])
// }


// Array.prototype.myCustomFeature 'cool!'
// for (let i = 0; i < arr.length; i++) {

// }



// Object.create
// Pure prototypal Inheritance
let personn = {
    firstname: 'd',
    lastname: 'c',
    greet: function () {
        return 'HELLO, ' + this.firstname + ' ' + this.lastname;
    }
}

let john = Object.create(personn);
console.log(john); // {} empty object, proto: object
john.greet(); // nothing

john.firstname = 'JOHN'
john.lastname = "DOE"
console.log(john); //{ firstname: 'JOHN', lastname: 'DOE' }




// Polyfill: code that adds a feature which the engine may lack

// Syntatic sugar: a different way to type something that doesn't change
// how it works under the hood