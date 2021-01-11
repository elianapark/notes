//1.
function one(arr){
    let newArr=[];
    for (let i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            newArr.push("big")
        }else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(one([-1,3,5,-5]))


//2.
function two(arrTwo){
    let biggest=arrTwo[0]
    let lowest=arrTwo[1]
    for (let i=1; i<arrTwo.length; i++) {
        if (biggest<arrTwo[i]) {
            biggest = arrTwo[i]
        } else if (lowest>arrTwo[i]) {
            lowest=arrTwo[i]
            console.log(lowest)
        }
    }
    return biggest
}
console.log(two([-1,3,5,-5]))


//3. Build a function that takes in an array of numbers.
//      The function should print the second to last value in the array
//      and return the first odd value in the array
function three(arrThree){
    let firstOdd = [];
    let result = arrThree[arrThree.length-2]
    for (let i=0; i<arrThree.length; i++){
        if (arrThree[i]%2===1){
            firstOdd.push(arrThree[i])
        }
    }
    console.log(result);
    return firstOdd

}
console.log(three([0,5,4,8,6]))

//4.
function four(arrFour) {
    let newArrFour = [];
    for (let i=0; i<arrFour.length; i++){
        newArrFour.push(arrFour[i]*2)
    }
    return newArrFour;
}
console.log(four([1,2,3]))

//5.
function five(arrFive){
    let newArrFive=[];
    for(let i=0; i<arrFive.length; i++) {
        if(arrFive[i]>0){
            newArrFive.push(arrFive[i])
        }
        arrFive[arrFive.length-1] = newArrFive.length
    }
    return arrFive;
}
console.log(five([-1,1,1,1]))

//6. Create function that accepts an array
function six(arrSix){
    for (let i=0; i<arrSix.length; i++){
        if(arrSix[i]&&arrSix[i+1]&&arrSix[i+2]){
            if(arrSix[i]%2===1 && arrSix[i+1]%2===1 && arrSix[i+2]%2===1) {
                console.log("That is odd!")
            } else if (arrSix[i]%2===0 && arrSix[i+1]%2===0 && arrSix[i+2]%2===0) {
                console.log("Even more so!")
            }
        }
    }
    // return true;
}
// console.log(six([2,4,6,1,3]))

//7.
function seven(arrSeven) {
    let newArrSeven = [];
    for (let i=0; i<arrSeven.length; i++) {
        if (arrSeven[i]%2===1) {
            newArrSeven.push(arrSeven[i]+1)
        } else {
            newArrSeven.push(arrSeven[i])
        }
    }
    return newArrSeven;
}
console.log(seven([1,2,3,4,5]))

//8. You are passed an array containing strings. Working within that same array,
//      replace each string with a number
//      the length of the string at the previous array index - and return the array
//      previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
//      Hint: Can for loops only go forward?
function eight(arrEight){
    //let firstIndex = arrEight[0]
    for (let i=arrEight.length-1; i>0; i--){
        arrEight[i]=arrEight[i-1].length;
        console.log(arrEight)
    }
    return arrEight;
}
console.log(eight([["hello", "dojo", "awesome"]]))

//9.
function nine(arrNine) {
    let newArrNine=[];
    for (let i=0; i<arrNine.length; i++) {
        newArrNine.push(arrNine[i]+7)
    }
    return newArrNine;
}
console.log(nine([1,2,3]))

//10. given an array, write a function that reserves its values in place
//      reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].
//      Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function ten(arrTen){
    let newArr=arrTen.reverse()
    return newArr
}
console.log(ten([3,1,6,4,2]))

//11. Given an array, create and return a new one containing all the values of the original array,
    // but make them all negative (do not multiply by -1)
function eleven(arrEleven){
    let newArr=[]
    for (let i=0; i<arrEleven.length; i++){
        if(arrEleven[i]>0){
            newArr.push('-'+arrEleven[i])
        } else if (arrEleven[i]<=0){
            newArr.push(arrEleven[i])
        }
    }return newArr;
}
console.log(eleven([1,-3,5]))

//12. Create a function that accepts an array and prints "yummy" each time one of the values is equal to food.
    // if no array values are food, then print I am hungry once.
function twelve(arrTwelve){
    for (let i=0; i<arrTwelve.length; i++){
        if(arrTwelve[i]==='food'){
            console.log("yummy")
        } else if(arrTwelve[i]!=='food'){
            console.log("I am hungry")
        }
    }
    return true;
}
console.log(twelve([5,3,2,'food','food']))

//13. Given an array, swap the first and last values, third and third-to-last, etc
//swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].
var array = [true,42,"Ada",2,"pizza"];
var nums = [1,2,3,4,5,6];
function thirteen(arrThirteen){
    var temp = arrThirteen[0];
    arrThirteen[0] = arrThirteen[arrThirteen.length-1];
    arrThirteen[arrThirteen.length-1] = temp;
    var temp2 = arrThirteen[2];
    arrThirteen[2] = arrThirteen[arrThirteen.length-3];
    arrThirteen[arrThirteen.length-3] = temp2;
    return arrThirteen;
    }
console.log(thirteen(array));
console.log(thirteen(nums));

//14.
function fourteen(arrFourteen, num) {
    let newArrFourteen = [];
    for (let i=0; i<arrFourteen.length; i++) {
        newArrFourteen.push(arrFourteen[i]*num)
    }
    return newArrFourteen;
}
console.log(fourteen([1,2,3],3))
