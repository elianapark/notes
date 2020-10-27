Object 생성자의 메서드

Object.assign(target, source)
//하나 이상의 원본 객체들로부터 모든 열거가능한 속성들을 대상 객체로 복사합니다.

Object.create()
주어진 프로토타입(prototype) 의 객체와 속성들을 갖고 있는 새 객체를 생성합니다.
Object.defineProperty()
주어진 기술자(descriptor) 에 의해 기술된(described) 이름붙은 속성을 객체에 추가합니다.
Object.defineProperties()
주어진 기술자들에 맞는 이름붙은 속성들을 객체에 추가합니다.
Object.freeze()
객체를 프리징(freeze) 합니다.즉, 다른 곳의 코드에서 객체의 속성을 지우거나 바꿀 수 없습니다.
Object.getOwnPropertyDescriptor()
객체의 이름붙은 속성의 기술자를 반환합니다.
Object.getOwnPropertyNames()
주어진 객체 자신만의 열거가능하거나 열거불가능한 속성들의 이름을 포함하는 배열(array) 을 반환합니다.
Object.getOwnPropertySymbols()
주어진 객체에서 바로 찾을 수 있는 모든 심볼 속성을 배열로 반환합니다.
Object.getPrototypeOf()
명시된 객체의 프로토타입을 반환.
Object.is()
두 값이 같은지를 비교합니다.모든 NaN 값은 같다고 처리됩니다.(다른 추상적 또는 엄격한 등호 비교에서는 다르게 처리됩니다)
Object.isExtensible()
객체의 확장이 가능한지 확인합니다.
Object.isFrozen()
객체가 프리징 되었는지 확인합니다.
Object.isSealed()
객체가 실링(seal) 되었는지 확인합니다.
Object.keys()
주어진 객체 자신의 열거가능한 속성들의 이름의 배열을 반환합니다.
Object.preventExtensions()
객체가 확장되는 것을 못하도록 합니다.
Object.seal()
다른 코드가 객체의 속성을 삭제하지 못하도록 합니다.
Object.setPrototypeOf()
프로토타입(즉, 내부의[[Prototype]] 속성) 을 설정합니다.
Object.values()
주어진 객체의 열거가능한 모든 스트링 속성들의 값들을 포함하고 있는 배열을 반환합니다.