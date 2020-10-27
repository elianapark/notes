function mapForEach(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    };
    return newArr;
}

let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr1.push(arr1[i] * 10)
}
console.log(arr2)