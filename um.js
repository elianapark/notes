//Object= {key: value}
let obj = {
    'hello': 10,
    'myName': 6,
    'secret': 15
}

let objTwo = {};
objTwo['one'] = 1
objTwo['two'] = 2
console.log(objTwo)

console.log(obj['hello'])
//obj[key] = value
console.log(obj.hello)


for (key in obj) {
    console.log("key: " + key + ", value: " + obj[key])
}


function liftoff_countdown(start_num) {
    let result = '';
    for (let i = start_num; i > 0; i--) {
        result += i
    }
    return result;
}
console.log(liftoff_countdown(6))

function eitherFilter(array, callback1, callback2) {
    return array.filter(function (item) {
        return callback1(item) || callback2(item)
    })

}

function union(arr) {
    let result = [];

    arr.map(function (item) {
        item.map(function (item2) {
            if (result.indexOf(item2) === -1) { //when it doesn't exist
                result.push(item2)
            }
        })
    })

    return result;
}



function arrToObj(array, func) {
    let newObj = {}

    array.map(function (item) {
        //newObj["beer"]=capitalized("beer")
        newObj[item] = func(item)

        //array: capitalize  
    })
    return newObj
    //obj[item] = array2[index]
}