//Initialization -

let people = [{
    firstname: "Jone",
    lastname: 'doe',
    address: [
        '111 maint st',
        '131 third st'

    ]
}, {
    firstname: "shan",
    lastname: 'lanag',
    address: [
        '111 okina st',
        '131 second st'
    ],
    greet: function () {
        return 'AWESOME!';
    }
}]




// typeof
let a = 3;
console.log(typeof a);

let b = {};
console.log(typeof b);

let c = [];
console.log(typeof c) //object
console.log(Object.prototype.toString.call(c)); // [object Array]

function Person(name) {
    this.name = name;
}
let e = new Person('You');
console.log(typeof e); // object
console.log(e instanceof Person); // true
console.log(typeof undefined) //undefined
console.log(typeof null) // object. It is a bug.



// STRICT MODE
"use strict";