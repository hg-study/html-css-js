# Type

### 자료형

> 값의 종류를 자료형이라 한다. 숫자, 문자열 같은 원시 타입과 객체(Object)로 나뉘며, `typeof`로 확인한다.

<br>

**원시 타입(Primitive Types)**

| **타입** | **설명** | **예시** |
| --- | --- | --- |
| `Number` | 숫자. 정수와 실수 | `20`, `10.5` |
| `String` | 문자열. `"`, `'`, `` ` `` 로 감싼다. 변수나 식을 문자열에 넣는 보간법은 백틱에서만 가능 | `"HELLO"`, `` `HELLO` `` |
| `Boolean` | `true` 또는 `false`. 이진수에서는 `true`가 1, `false`가 0 | `true` |
| `null` | 비어 있는 값을 명시적으로 표현. 공간이 만들어지고 기본값 `null`이 들어간다. 개발자가 의도한 값이다 | `let vol = null;` |
| `undefined` | 정의되지 않은 값. 값을 할당받지 못한 상태. 개발자가 의도하지 않은 예외다 | `let vol2;` |
| `Symbol` | ES6에서 추가된 고유 식별자 | |
| `BigInt` | 매우 큰 정수 | |

<br>

**참조 타입(Reference Types)**

| **타입** | **설명** | **예시** |
| --- | --- | --- |
| `Object` | 키(Key)와 값(Value)의 집합. 배열(Array), 함수(Function)도 객체에 속한다 | `{"name": "사과", "color": "빨간색"}` |

<br>

```javascript
console.log(typeof "Hello")      // "string"
console.log(typeof 10)           // "number"
console.log(typeof true)         // "boolean"
console.log(typeof undefined)    // "undefined"
console.log(typeof null)         // "object" (null이지만 JS의 오래된 오류로 object로 표시)
console.log(typeof [])           // "object"
console.log(typeof function(){}) // "function"
```

<br>

- 예제 코드: [typeof로 자료형 확인](../01_Basic/04Type.html)

---

### 변수와 상수 선언

> 값을 저장하는 이름을 변수라 한다. `const`, `let`, `var` 세 키워드로 선언하고, 가급적 `const`를 쓰며 값이 바뀔 때만 `let`을 쓴다.

<br>

| **키워드** | **재선언** | **재할당** | **특징** | **스코프** |
| --- | --- | --- | --- | --- |
| `const` | 불가 | 불가 | 가장 안전한 상수(Symbolic). 변수 자체는 재할당할 수 없지만 객체 내부 속성 값은 바꿀 수 있다 | 블록 레벨 스코프 |
| `let` | 불가 | 가능 | 값이 바뀔 때만 사용 | 블록 레벨 스코프 |
| `var` | 가능 | 가능 | 오류 위험이 커서 비추천. 호이스팅이 일어난다 | 함수 스코프 (블록을 무시) |

<br>

<span style="color:gray">함수 밖에서 선언하면 모두 전역 스코프가 된다. 스코프와 호이스팅은 [Function](07Function.md)에서 다룬다.</span>

<br>

---

### 리터럴과 보간법

> 리터럴은 특정 자료형의 값을 코드에 직접 쓴 고정 데이터다. 보간법은 백틱 문자열 안에서 변수나 식을 `${}`로 삽입하는 기능이다.

<br>

| **구분** | **설명** |
| --- | --- |
| 리터럴(Literal) | 이름(식별자) 없이 값 자체를 쓴 것. `10`, `"abc"`, `true` |
| 객체 리터럴 | 중괄호로 속성을 나열해 객체를 만드는 표기법. `{owner: "홍길동"}` |
| 보간법 | `` `TEST: ${str1} / ${10 + 20}` `` 처럼 변수, 산술식, 비교식, 함수 호출 결과를 문자열에 삽입. 백틱에서만 가능 |

<br>

- 예제 코드: [보간법](../02_Type/01Interpolation.html)

<br>

---

<br>

**Type 요약**

<aside>

> 원시 타입: Number, String, Boolean, null, undefined, Symbol, BigInt / 참조 타입: Object <br>
null: 의도한 빈 값, undefined: 값이 할당되지 않음 <br>
const 기본, 값이 바뀌면 let, var는 지양

</aside>

<br>

### Link
[MDN 자료형](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
