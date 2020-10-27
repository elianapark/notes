// CONCEPTUAL ASIDE; TYPES and JAVASCRIPT
    //Dynamic Typing: You don't tell the engine what type of data 
                //     a variable holds, if figures it out while your code is running
                // variables can hold differen types of values because it's all figured out during execution

//Static Typing
    // bool isNew = 'hello; //error

//Dynamic Typing
    //var isNew = true; //no error
    // isNew = 'yes!'
    // isNew = 1;






// PRIMITIVE TYPES: a type of data that represents a single value (not object)
    //Undefined: lack of existence_ do not set value to undefined
    //Null: lack of existence_ can set a variable to null
    //Boolean: true or false
    //Number: Floating point number. The only number type.
    //String: a sequence of characters ("" or '')
    //Symbol: Used in ES 6





//CONCEPTUAL ASIDE: Operators(a special function that is written differently)
var a = 3 + 4; // + is operator, it is a 'function' actually
console.log(a); 

    // //same 
    // function +(a, b) {
    //     return
    // } +(3,4)





// OPERATOR PRECEDENCE: which operator function gets called first
    // functions are called in order of precedence (higher precedence wins)
// Associativity: what order operator functions get called in: left-to-right or right-to-left
    //when functions have the same precedence
var b = 3 + 4 * 5; //23, 4*5 =20, 20+3 = 23
console.log(b)

var c = (3 + 4) * 5; //35
console.log(c)

let aa = 2, bb = 3, cc = 4;
aa = bb = cc;
console.log(aa); //4
console.log(bb); //4
console.log(cc); //4
// cc = bb (4 = 4)
// bb = aa (4 = 4)

// let aa = 2, bb = 3, cc = 4;
// aa === bb === cc;
// console.log(aa); //2
// console.log(bb); //3
// console.log(cc); //4






//COERCION: converting a value from one type to another
        //  This happens often because JS is dynamically typed




//COMPARISON OPERATORS
 



//EXISTENCE and BOOLEANS
// Boolean(undefined); //false
// Boolean(null); //false
// Boolearn("") //false

var a; // goes to internet and looks for a value
if (a) {
    console.log('something is there.')
}  

//DEFAULT VALUES
function greet(name) {
    console.log('HEllo ' + name)
}
greet(); //undefined
greet('Shawn'); //Shawn

undefined || "hello" // "hello"
//falsy values are false, thus 2nd statement is true



// Framework aside
    //default values:
    