# Array

### 배열

> 여러 값을 순서(index)를 붙여 저장하는 자료구조다. 번호로 요소에 접근하고, 자료형이 달라도 함께 담을 수 있으며 크기가 동적으로 늘어난다.

<br>

```javascript
let arr = ['str1', 100, true, null, {name: "홍길동", age: 35}];
console.log(arr[0]);   // 'str1'
arr[8] = 100;          // 중간 빈 자리는 empty로 채워진다
```

<br>

---

### 배열 함수

> 콜백 함수 `()=>{}`는 다른 함수에 인자로 전달되어 나중에 호출되는 함수다. 배열 함수는 콜백에 로직을 전달해 요소를 처리한다.

<br>

| **함수** | **설명** | **원본 변경** |
| --- | --- | --- |
| `push(값)` | 배열 끝에 요소 추가 | O |
| `pop()` | 배열 끝 요소를 제거하고 반환 | O |
| `forEach((요소, 번호)=>{})` | 모든 요소에 순서대로 접근. `break`, `continue` 불가 | X |
| `sort((a,b)=>a-b)` | 정렬. 인자가 없으면 문자열로 바꿔 정렬하므로 숫자는 콜백 필수. `a-b` 오름차순, `b-a` 내림차순 | O (복사 후 정렬 권장) |
| `filter((요소)=>조건)` | 조건을 만족하는 요소만 모은 새 배열 | X |
| `map((요소)=>새 형태)` | 요소를 변환한 같은 길이의 새 배열 | X |
| `reduce((누적, 요소)=>누적값, 초기값)` | 요소를 누적해 하나의 값으로 만든다. 초기값을 꼭 지정한다 | X |

<br>

<span style="color:brown">`sort`는 원본 배열을 바꾼다. 원본을 유지하려면 `[...arr].sort()`처럼 스프레드로 복사한 뒤 정렬한다.</span>

<br>

**filter, map, reduce 비교**

| **함수** | **반환 길이** | **용도** |
| --- | --- | --- |
| `filter` | 원본과 같거나 짧음 | 조건에 맞는 요소만 걸러내기 |
| `map` | 원본과 같음 | 요소를 다른 형태로 변환 |
| `reduce` | 값 하나 | 합계, 곱, 그룹별 집계 같은 누적 작업 |

<br>

- 예제 코드: [배열과 배열 함수](../02_Type/05ArrayObject.html)

---

### 객체 배열과 스프레드

> 객체를 요소로 가진 배열 `[{}, {}]`은 `filter`, `map`, `reduce`를 이어 붙여 처리한다. `...객체`(스프레드 연산자)는 기존 객체의 속성을 그대로 가져온다.

<br>

```javascript
// 총판매액(totalPrice) 속성을 추가한 새 배열
const result = products.map((item) => ({...item, "totalPrice": item.price * item.amount}));

// 부서(department)별 연봉 합계
const sum = employees.reduce((acc, item) => {
    acc[item.department] = (acc[item.department] ?? 0) + item.salary;
    return acc;
}, {});
```

<br>

- 예제 코드: [공공데이터 filter, map](../02_Type/06OpenData.html)
- 예제 코드: [주문받기: 분류별 집계](../02_Type/07OrderPrtc.html)
- 예제 코드: [주문받기: 분류별 집계 답](../02_Type/07Order답.html)

<br>

---

<br>

**Array 요약**

<aside>

> 배열: 순서(index)로 접근하는 동적 자료구조 <br>
push, pop은 끝 요소, forEach는 순회, sort는 정렬(원본 변경) <br>
filter는 거르기, map은 변환, reduce는 누적

</aside>

<br>

### Link
[MDN 배열](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
