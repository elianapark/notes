Array
//매치 결과를 이용한 배열생성:
// 하나의 d와 하나 이상의 b에 하나의 d가 뒤따라 일치해야 합니다.
// 일치한 b와 다음 d를 기억하십시오.
// 대소문자 구분은 무시됩니다.
var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');

Array.length
//배열을 순회한다 (for loop)
//배열을 단축한다 (x.length>3)

Array.from(arrayLike[, mappingFunction[, thisArg]])
//유사배열객체(length)나 반복가능한객체(map, set)를 얕게 복사해 새로운 array생성
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", ..., "W", "X", "Y", "Z"]   

Array.isArray(obj)
//true(if it is array) or false(if it's not array)

Array.of(element0[, element1[, ...[, elementN(배열을 생성할 때 사용할 요소)]]])
//인자의 수나 유형에 상관없이 가변인자를 갖는 새 array 인스턴스를 생성
//Array.of(7);       // [7] 
//  vs
//Array(7);          // [ , , , , , , ]

Array.prototype.concat([value1[, value2[, ...[, valueN]]]])
//인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 변환한다. 
//기존배열 변경안함, 배열 세개 이상도 가능.
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
alpha.concat(numeric);
// 결과: ['a', 'b', 'c', 1, 2, 3]   

Array.prototype.copyWithin(target[, start[, end]])
//배열의 일부를 얕게 복사후 동일한 배열의 다른위치에 덮어쓰고 그배열을 반환, 배열길이 수정안함
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

Array.prototype.entries()
//배결의 각 인덱스에 대한 값을 가지는 new Array Iterator 객체반환
//1. iteration
const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
    console.log(index, element);

// 0 'a' 
// 1 'b' 
// 2 'c'
//2. for of
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
    console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c'] 
Array.prototype.every(callback[, thisArg])
//빈배열은 무조건 트루, 배열내의 모든 요소가 조건에 맞는지 
//콜백이 거짓을 찾을때까지 하나 하나 콜백 함수실행
//[12, 5, 8, 130, 44].every(elem => elem >= 10); // false

Array.prototype.fill(value[, start[, end]])


Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()

Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype[@ @iterator]()
get Array[@ @species]