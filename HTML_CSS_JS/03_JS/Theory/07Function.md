# Function

- [함수](#함수)
- [호이스팅](#호이스팅)
- [스코프](#스코프)
- [클로저](#클로저)
- [콜백 함수](#콜백-함수)

<br>

---

### 함수

> 반복해서 사용할 코드를 이름을 붙여 묶어 둔 것이다. 선언 후 호출해 실행하며, 인자(argument)로 값을 받고 `return`으로 결과를 돌려준다.

<br>

| **구분** | **설명** | **예시** |
| --- | --- | --- |
| 선언문 | `function` 키워드로 선언. 호이스팅된다 | `function add(a, b) { return a + b; }` |
| 함수 표현식 | 변수에 함수를 대입. 호이스팅되지 않는다 | `const add = function (a, b) { return a + b; };` |
| 화살표 함수 | `=>`로 짧게 표현 | `const add = (a, b) => a + b;` |

<br>

**function과 화살표 함수 비교**

| **구분** | **function** | **화살표 함수** |
| --- | --- | --- |
| `this` | 호출한 객체 | 정의된 위치의 상위 스코프 |
| 생성자(`new`) | 사용 가능 | 사용 불가 |
| 표기 | 길다 | 짧다. 본문이 한 줄이면 `{}`와 `return` 생략 |

<br>

- 예제 코드: [함수 정의와 호출](../05_Function/01FunctionBasic.html)

---

### 호이스팅

> 선언을 코드의 맨 위로 끌어올린 것처럼 동작하는 특징이다. 선언 전에 사용할 수 있는지는 선언 방식에 따라 다르다.

<br>

| **선언** | **선언 전 사용** | **설명** |
| --- | --- | --- |
| `var` | 가능(값은 `undefined`) | 선언만 끌어올려지고 대입은 그대로 |
| `function` 선언문 | 가능 | 선언과 본문 모두 사용 가능 |
| `let`, `const` | 불가 | 선언 전에 사용하면 `ReferenceError` |
| 함수 표현식(`const f = function`) | 불가 | 변수 규칙을 따른다 |

<br>

- 예제 코드: [호이스팅](../05_Function/02Hoisting.html)

---

### 스코프

> 변수와 함수에 접근할 수 있는 범위다. 전역 스코프는 어디서나, 지역 스코프는 특정 영역 `{}` 안에서만 접근할 수 있다.

<br>

| **구분** | **설명** |
| --- | --- |
| 전역 스코프 | 함수 밖에서 선언한 변수. 모든 곳에서 접근 |
| 함수 스코프 | 함수 안에서 선언한 변수. 그 함수 안에서만 접근. `var`가 적용 대상 |
| 블록 스코프 | `if`, `for` 등 `{}` 안에서 선언한 `let`, `const`. 블록 안에서만 접근 |
| 렉시컬 스코프 | 변수를 선언한 위치에 따라 스코프가 결정된다. 같은 이름이면 가장 가까운 선언을 따른다 |

<br>

<span style="color:brown">`var`는 블록 스코프를 무시한다. `for (var i...)`의 `i`는 반복문 밖에서도 접근되므로 `let`을 사용한다.</span>

<br>

- 예제 코드: [스코프](../05_Function/03Scope.html)

---

### 클로저

> 내부 함수가 외부 함수의 변수를 기억하고 접근하는 구조다. 외부 함수가 끝난 뒤에도 그 변수를 계속 사용할 수 있다.

<br>

```javascript
function outer() {
    let count = 0;
    return function () {   // 내부 함수가 count를 기억
        return ++count;
    };
}
const counter = outer();
counter();   // 1
counter();   // 2
```

<br>

- 예제 코드: [클로저](../05_Function/04Closure.html)

---

### 콜백 함수

> 다른 함수에 인자로 전달해 나중에 호출되게 하는 함수다. 호출 시점과 처리 로직을 호출하는 쪽에서 정할 수 있다.

<br>

- 예제 코드: [콜백 함수](../05_Function/05CallBack.html)

<br>

---

<br>

**Function 요약**

<aside>

> 함수: 선언문, 표현식, 화살표 함수. this는 function은 호출한 객체, 화살표는 상위 스코프 <br>
호이스팅: var와 function 선언문은 선언 전 사용 가능, let과 const는 불가 <br>
스코프: 전역, 함수, 블록, 렉시컬 <br>
클로저: 내부 함수가 외부 변수를 기억, 콜백: 인자로 전달하는 함수

</aside>

<br>

### Link
[MDN 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)
