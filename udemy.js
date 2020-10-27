const person = {
    name: 'Gyuri',
    age: 26
};

for (let key in person)
    console.log(key, person[key]);


const colors = ['red', 'blue', 'pink']
for (let index in colors)
    console.log(index, colors[index])


const colorss = ['red', 'blue', 'pink']
for (let color of colorss)
    console.log(color)


//break, continue
let i = 0;
while (i <= 10) {
    if (i === 7) {
        break;
    } else if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++
}

//write a function that takes two numbers and returns max number of two
function maxTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}
console.log(maxTwo(5, 10))


function simpleMaxTwo(a, b) {
    return (a > b) ? a : b
}
console.log(simpleMaxTwo(5, 10))

function isLanscape(width, height) {
    // if(width>height){
    //     return true;
    // } else {
    //     return false;
    // }
    //true if landscape
    //false if portrait
    return (width > height);
}
console.log(isLanscape(15, 70));

//fizzbuzz
const output = fizzBuzz(15)
console.log(output)

function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz' // the order matters
    } else if (input % 5 === 0) {
        return 'Buzz'
    } else if (input % 3 === 0) {
        return 'Fizz'
    }
    return input;
}