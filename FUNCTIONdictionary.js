Properties
Function.arguments
Function.caller[Translate]
Function.displayName[Translate]

Function.length
//지역함수이며 실제 함수에 전달된 인수의 수를 제공한다
console.log(Function.length); /* 1 */
console.log((function () {}).length); /* 0 */
console.log((function (a) {}).length); /* 1 */
console.log((function (a, b) {}).length); /* 2 등. */
console.log((function (...args) {}).length); /* 0, 나머지 매개변수는 계산되지 않음 */

Function.name
//함수이름반환
var f = function () {};
console.log(f.name);

Methods
Function.prototype.apply(thisArg, [argsArray])
//주어진 this값과 배열로 제공되는 arguments로 함수를 호출.
//call()과 유사하지만 단일배열을 받음
//1. 배열에 배열을 붙이기
//2. 내장함수사용
//3. chaining
Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
//새로운함수생성
//1.바인딩된 함수생성: 특정 this값으로 호출되는 함수만들기
//2.부분적용함수: 미리 지정된 초기인수가 있는 함수만들기
//3.setTimeout과 함께 사용
//4.생성자로 쓰임
//5.바로가기 생성
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
//apply()와 비슷하지만! 인수 '목록'을 받는다
Function.prototype.toSource()
Function.prototype.toString()[Translate]
Inheritance:
    Object
Properties
Object.prototype.__proto__[Translate]
Object.prototype.constructor
Methods
Object.prototype.__defineGetter__()
Object.prototype.__defineSetter__()[Translate]
Object.prototype.__lookupGetter__()[Translate]
Object.prototype.__lookupSetter__()[Translate]
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toLocaleString()
Object.prototype.toSource()[Translate]
Object.prototype.toString()
Object.prototype.valueOf()
Object.setPrototypeOf()