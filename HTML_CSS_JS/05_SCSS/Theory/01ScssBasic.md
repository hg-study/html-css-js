# Scss Basic

### SCSS

> CSS를 더 편하게 작성하도록 확장한 문법(CSS 전처리기)이다. 변수, 중첩, 함수 같은 기능을 쓸 수 있고, 브라우저가 읽을 수 있도록 CSS로 변환(컴파일)해서 사용한다. 확장자는 `.scss`이며 CSS 문법을 그대로 사용할 수 있다.

<br>

| **구분** | **설명** |
| --- | --- |
| 컴파일 | `sass` 패키지가 `.scss`를 `.css`로 변환. Parcel은 html에서 `.scss`를 연결하면 자동으로 컴파일 |
| 실행 | `npm install` 후 `npx parcel 07_BuiltIn/index.html`처럼 확인할 html을 지정 |
| 주석 | `// 한 줄`은 CSS로 변환되지 않고, `/* 여러 줄 */`은 CSS에도 남는다 |

<br>

---

### 중첩

> 부모 선택자 안에 자식 선택자를 작성해 반복되는 선택자를 줄인다.

<br>

| **문법** | **설명** |
| --- | --- |
| 자식 중첩 | `.container { ul { li {} } }` 은 `.container ul li` |
| `&` | 부모 선택자를 가리킨다. `li { &.name {} }` 은 `li.name` |
| `&-접미사` | 부모 선택자 뒤에 이어 붙인다. `.fs { &-small {} }` 은 `.fs-small` |
| 속성 중첩 | 앞부분이 같은 속성을 묶는다. `font: { weight: bold; size: 100px; }` |

<br>

- 예제 코드: [중첩](../01_Nesting/Nesting.scss)

---

### 변수

> `$이름: 값;`으로 값을 저장해 재사용한다. 블록 밖에서 선언하면 파일 전체에서 쓰는 전역 변수, 블록 안에서 선언하면 그 블록 안에서만 쓰는 지역 변수다.

<br>

```scss
$size: 200px;                // 전역 변수
.container {
    $localsize: 100px;       // 지역 변수
    .item { width: $size; height: $localsize; }
}
```

<br>

- 예제 코드: [변수](../02_Variable/Variable.scss)

---

### 연산

> 단위가 같은 값끼리 `+`, `-`, `*`, `%` 연산을 할 수 있다. 나누기 `/`는 CSS 문법(`font: 10px / 15px`)과 헷갈리므로 `math.div()`를 사용한다.

<br>

| **구분** | **설명** |
| --- | --- |
| `@use "sass:math";` | 수학 모듈을 불러온다 |
| `math.div(30px, 2)` | 나누기 |
| `calc(100% - 400px)` | 단위가 다른 값은 CSS 계산 함수 `calc()` 사용 |

<br>

- 예제 코드: [연산](../03_Operation/Operation.scss)

<br>

---

<br>

**Scss Basic 요약**

<aside>

> SCSS: 변수, 중첩, 함수를 쓰고 CSS로 컴파일 <br>
중첩: 자식 선택자를 안에 작성, &는 부모 <br>
변수: $이름, 전역과 지역 <br>
연산: + - * %, 나누기는 math.div

</aside>

<br>

### Link
[Sass 공식 문서](https://sass-lang.com/documentation/)
