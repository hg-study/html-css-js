# Object

### 객체 리터럴

> 객체는 사물의 속성(Property)과 기능(Method)을 키(Key)와 값(Value)으로 묶은 자료다. 중괄호 `{}` 안에 `키: 값`을 쉼표로 나열해 만드는 방식을 객체 리터럴이라 한다.

<br>

```javascript
const myCar = {
    // 속성
    owner: "홍길동",
    curSpeed: 0,
    // 기능(메서드)
    Accel: function () {
        this.curSpeed += 10;
    }
};
myCar["color"] = "검정";   // 속성 추가
```

<br>

| **용어** | **설명** |
| --- | --- |
| 속성(Property) | 객체가 가진 값. `owner: "홍길동"` |
| 메서드(Method) | 객체 안에 정의한 함수. `Accel: function(){}` |
| `this` | 메서드를 호출한 객체를 가리킨다. `function`은 호출 시점, 화살표 함수는 정의된 위치의 상위 스코프 기준 |
| 점 표기법 | `myCar.owner` |
| 대괄호 표기법 | `myCar["owner"]`. 키를 변수나 문자열로 지정할 때, 속성 추가에도 쓴다 |
| `const` | 변수 자체는 재할당할 수 없지만 객체 내부 속성 값은 바꿀 수 있다 |

<br>

<span style="color:gray">객체를 설계할 때 공통 속성과 기능을 뽑아 상위 구조로 만드는 것을 추상화라 한다.</span>

<br>

- 예제 코드: [객체 리터럴](../02_Type/02Object.html)
- 예제 코드: [객체 연습: 점수 계산](../02_Type/03ObjectPrtc.html)
- 예제 코드: [객체 연습: 점수 계산 답](../02_Type/03Object답.html)
- 예제 코드: [객체 연습: 카페, 계좌, 도서관, 주차장](../02_Type/04ObjectPrtc.html)

---

### Object 함수

> `Object`는 객체를 다루는 기본 함수를 제공하는 내장 객체다.

<br>

| **함수** | **설명** |
| --- | --- |
| `Object.keys(obj)` | 객체의 키를 배열로 반환 |
| `Object.values(obj)` | 객체의 값을 배열로 반환 |
| `Object.entries(obj)` | `[키, 값]` 쌍의 배열로 반환 |
| `Object.assign(대상, 원본...)` | 원본의 속성을 대상 객체에 복사 |
| `Object.freeze(obj)` | 읽기 전용. 수정, 속성 추가 모두 불가 |
| `Object.seal(obj)` | 기존 속성 수정은 가능, 속성 추가와 삭제는 불가 |

<br>

- 예제 코드: [Object 함수와 prototype](../02_Type/08Prototype.html)

---

### 프로토타입(prototype)

> 자바스크립트는 프로토타입 기반 객체지향 언어다. 생성자 함수의 `prototype`에 메서드를 정의하면 그 함수로 만든 모든 객체가 공유한다. 자바의 클래스와 같은 역할을 한다.

<br>

| **구분** | **설명** |
| --- | --- |
| 생성자 함수 | `function Person(name){ this.name = name; }` 를 `new Person("홍길동")`으로 호출해 객체 생성 |
| 메서드 추가와 재정의 | `Person.prototype.toString = function(){}` |
| 상속 | `Dog.prototype = Object.create(Animal.prototype)` 로 상위 prototype을 물려받고, 생성자 안에서 `Animal.call(this, name)`으로 상위 생성자를 호출 |
| `Object.prototype` | 모든 객체가 상속하는 최상위 prototype. `toString()`, `hasOwnProperty()`, `valueOf()` 등이 정의되어 있다 |

<br>

- 예제 코드: [생성자 함수와 prototype](../02_Type/08Prototype.html)
- 예제 코드: [prototype 상속](../02_Type/09Prototype2.html)

<br>

---

<br>

**Object 요약**

<aside>

> 객체: 속성과 메서드를 {키: 값}으로 묶음, 메서드 안의 this는 호출한 객체 <br>
Object 함수: keys, values, entries, assign, freeze, seal <br>
prototype: 생성자 함수의 prototype으로 메서드 공유와 상속

</aside>

<br>

### Link
[MDN 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
