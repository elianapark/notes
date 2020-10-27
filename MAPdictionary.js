생성자
Map()
//새로운 Map 객체를 생성합니다.
new Map([iterable])


속성
Map.length
//값이 0인 속성입니다.
요소의 수는 Map.prototype.size로 알아낼 수 있습니다.


get Map[@ @species]
//파생 객체를 생성하는데 사용하는 생성자 함수입니다.
Map[Symbol.species]; // function Map(): Species in ordinary objects
class MyMap extends Map {
    // Overwrite MyMap species to the parent Map constructor
    static get[Symbol.species]() {
        return Map;
    }
} //Species in derived objects


//모든 Map 인스턴스는 Map.prototype을 상속합니다.


속성
Map.prototype.constructor
//인스턴스의 프로토타입을 만드는 함수를 반환한다. 이것 Map 함수의 기본 값이다.


Map.prototype.size
//Map 객체에 들어있는 key/value pair의 수를 반환한다.



메서드
Map.prototype.clear()
//Map 객체의 모든 key/value pair를 제거한다.


Map.prototype.delete(key)
//주어진 키(Key)와 해당되는 값(Value)를 제거하고 
//제거하기 전에 Map.prototype.has(key)가 반환했던 값을 반환한다. 
//그 후의 Map.prototype.has(key)는 false를 반환한다.



Map.prototype.entries()
//Map 객체 안의 모든 요소들을 [key, value] 형태의 array 로 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.


Map.prototype.forEach(callbackFn[, thisArg])
//Map 객체 안에 존재하는 각각의 key/value pair에 집어넣은 순서대로 callbackFn을 부른다. 만약 thisArg 매개변수가 제공되면, 이것이 각 callback의 this 값으로 사용된다.


Map.prototype.get(key)
//주어진 키(Key)에 해당되는 값(value)을 반환하고, 만약 없으면 undefined를 반환한다.


Map.prototype.has(key)
//Map 객체 안에 주어진 key/value pair가 있는지 검사하고 Boolean 값을 반환한다.


Map.prototype.keys()
//Map 객체 안의 모든 키(Key)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.


Map.prototype.set(key, value)
//Map 객체에 주어진 키(Key)에 값(Value)를 집어넣고, Map 객체를 반환한다.


Map.prototype.values()
//Map 객체 안의 모든 값(Value)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.


Map.prototype[Symbol.iterator]
//Map 객체 안의 모든 요소들을 [key, value] 형태의 array 로 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.