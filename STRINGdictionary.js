//
String.fromCharCode()

//
String.fromCodePoint()[Translate]

// String.prototype.anchor()[Translate]
// String.prototype.big()[Translate]
// String.prototype.blink()[Translate]
// String.prototype.bold()[Translate]
//
String.prototype.charAt(index)
//문자열에서 특정 인덱스에 위치하는 유니코드 단일문자 반환
//기본값은 0
//1. 문자열 내의 다른 위치에 있는 문자출력
let anyString = "You are my world";
console.log(anyString.charAt(4)); //a
//2. 문자열 내의 모든 문자 얻기


String.prototype.charCodeAt()
String.prototype.codePointAt()[Translate]
String.prototype.concat()


//
String.prototype.endsWith(searchString[, length]))
//return true or false
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';
console.log(str2.endsWith('?'));
// expected output: false

// String.prototype.fixed()[Translate]
// String.prototype.fontcolor()[Translate]
// String.prototype.fontsize()[Translate]

//
String.prototype.includes((searchString[, position]))
//return true or false
//case sensitive
'Blue Whale'.includes('blue') // returns false

//
String.prototype.indexOf(searchValue[, fromIndex])
//일치하는 첫번째 인덱스 반환, 없으면 -1 리턴
//case sensitive


//String.prototype.italics()[Translate]

//
String.prototype.lastIndexOf(searchValue[, fromIndex])
//역순으로 탐색, 최초로 마주치는 인덱스반환, 없으면 -1
'canal'.lastIndexOf('a'); //  3 반환
'canal'.lastIndexOf('a', 2); //  1 반환
'canal'.lastIndexOf('a', 0); // -1 반환

//String.prototype.link()[Translate]

//
String.prototype.localeCompare(compareString[, locales[, options]])
//기준 문자열과 비교했을때 비교대상문자열이 전에 오는지 후에 오는지 알려주는 숫자리턴
//-: 전, +:후, 0:같을때
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

//
String.prototype.match(RegExp)
//RegExp와 매치되는 부분검색
//문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 옵니다. 
//일치하는 것이 없으면 null이 반환됩니다.
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var matches_array = str.match(/[A-E]/gi); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']



String.prototype.normalize()
String.prototype.padEnd()
String.prototype.padStart()

//
String.prototype.repeat(count)
'abc'.repeat(-1); // RangeError
'abc'.repeat(0); // ''
'abc'.repeat(1); // 'abc'
'abc'.repeat(2); // 'abcabc'

//
String.prototype.replace()
//var newStr = str.replace(regexp|substr, newSubstr|function)
const regex = /dog/gi;
//어떤 패턴에 일치하는 일부나 모든 부분이 교체된 새로운 문자열 반환.
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...

//
String.prototype.replaceAll()[Translate]

//
String.prototype.search(RegExp)
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation

//
String.prototype.slice(beginIndex[, endIndex])

//String.prototype.small()[Translate]

//
String.prototype.split([separator[, limit]])



String.prototype.startsWith()
String.prototype.strike()[Translate]
String.prototype.sub()[Translate]
String.prototype.substr()
String.prototype.substring()
String.prototype.sup()[Translate]
String.prototype.toLocaleLowerCase()[Translate]
String.prototype.toLocaleUpperCase()[Translate]
String.prototype.toLowerCase()
String.prototype.toSource()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()[Translate]
String.prototype.trimStart()[Translate]
String.prototype.valueOf()
// String.prototype[@ @iterator]()[Translate]
// String.raw()[Translate]