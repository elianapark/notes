//1
function one(){
  for (let i=1; i<=255; i++)
  console.log(i)
}
one()

//2
function two(num){
  let sum=0
  for (let j=1; j<=num; j++){
      if(j%2===0){
          sum+=j
      }
  }
  return sum;
}
two(1000)

//3
function three(){
  let sumThree=0
  for (let k=1; k<=5000; k++) {
      if (k%2===1){
          sumThree+=k
      }
  }
  return sumThree;
}

//4
function four(arr){
  let newArr=0
  for (let l=0; l<arr.length; l++){
      newArr+=arr[l]
  }
  return newArr
}
four([1,2,5])

//5
function five(arrFive){
  let max = arrFive[0]
  for(let m=0; m<arrFive.length; m++) {
      if (max < arrFive[m]){
          max = arrFive[m]
      }
  }
  return max;
}

//6
function six(arrSix){
  let sumSix=0
  for (let n=0; n<arrSix.length; n++){
      sumSix+=arrSix[n]
  }
  return sumSix/arrSix.length
}

//7
function seven(){
  let newArr=[];
  for (let i=0; i<=50; i++){
    if (i%2===1){
      newArr.push(i)
    }
  }
  return newArr;
}
seven()

//8: Given value of Y, Write a function that takes an array and returns the number of values
//    that are greater than Y.

function eight(arrEight, Y){
  let newArr = [];
  for (let i=0; i<arrEight.length; i++) {
    if(arrEight[i]>Y){
      newArr.push(arrEight[i])
    }
  }return newArr.length
}
console.log(eight([1, 3, 5, 7],3))



//9
function nine(arr){
  let newArr= [];
  for (let i=0; i<arr.length; i++) {
      newArr.push(arr[i]**2)
  }
  return newArr;
}
nine([1,5,10,-2])

//10
//write a function that replaces any negative numbers within the array with 0
function ten(arrTen){
  let newArrTen = [];
  for(let j=0; j<arrTen.length; j++){
      if(arrTen[j]>=0) {
          newArrTen.push(arrTen[j])
      } else {
          newArrTen.push(0)
      }
  }
  return newArrTen
}
ten([1,5,10,-2])

//11
//Max/Min/Avg - Given an array with multiple values,
//              write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function eleven(arrEleven){
  let max= arrEleven[0];
  let min =arrEleven[0]
  let avg = 0;
  for (let i=1; i< arrEleven.length; i++){
    if(max < arrEleven[i]){
      max = arrEleven[i]
    } else if (min> arrEleven[i]){
      min = arrEleven[i]
    }
  }
  for (let i=0; i<arrEleven.length; i++){
    avg += arrEleven[i]
  }
  console.log(avg)
  return [max, min, avg/arrEleven.length]
}
console.log(eleven([1,5,10,-2]))

//12:Swap Values - Write a function that will swap the first and last values of any given array.
//                The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function twelve(arrTwelve){
  let indexZero = arrTwelve[0]
  arrTwelve[0] = arrTwelve[arrTwelve.length-1]
  arrTwelve[arrTwelve.length-1] = indexZero
  return arrTwelve;
}
console.log(twelve([1,5,10,-2]))

//13:Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function thirteen(arrThirteen){
  let newArrThirteen=[];
  for (let i=0; i<arrThirteen.length; i++) {
      if(arrThirteen[i]<0){
          newArrThirteen.push("Dojo")
      } else {
          newArrThirteen.push(arrThirteen[i])
      }
  }
  return newArrThirteen;
}
thirteen([-1,-3,2])
