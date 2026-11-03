# CssBasic

### CSS 기본 개념

> CSS(Cascading Style Sheets)는 HTML 요소에 색상, 크기, 배치 등 시각적 스타일을 지정하는 언어다. HTML이 구조를 담당한다면 CSS는 표현을 담당한다.

<br>

**CSS 적용 방식**

| **방식** | **설명** |
| --- | --- |
| 인라인(Inline) | HTML 태그 `style` 속성에 직접 작성한다. `<p style="color:red">` |
| 내부(Internal) | `<head>` 안 `<style>` 태그 내에 작성한다 |
| 외부(External) | 별도 `.css` 파일을 만들어 `<link rel="stylesheet">`로 연결한다 |

<br>

**길이 단위**

| **단위** | **설명** |
| --- | --- |
| `px` | 픽셀. 절대 단위 |
| `%` | 부모 요소 기준 상대 비율 |
| `em` | 현재 요소의 font-size 기준 상대 단위 |
| `rem` | 루트(`html`) 요소의 font-size 기준 상대 단위 |
| `vw` / `vh` | 뷰포트 너비 / 높이의 1% |

<br>

- 예제 코드: [길이 단위](../01_Basic/05단위.html)

<br>

---

### 스타일 우선순위

> 같은 요소에 스타일이 여러 개 걸리면 우선순위가 높은 것이 적용된다. 우선순위가 같으면 코드 아래에 쓴 것이 적용된다.

<br>

| **순위** | **방식** | **설명** |
| --- | --- | --- |
| 1 | `!important` | 우선순위와 상관없이 가장 먼저 적용된다 |
| 2 | 인라인 `style` | 태그에 직접 작성한 스타일이다 |
| 3 | 내부 `<style>`, 외부 `.css` | 같은 선택자면 나중에 작성한 것이 적용된다 |

<br>

<span style="color:brown">`!important`는 유지보수가 어려워 권장하지 않는다. 인라인 스타일도 마찬가지다.</span>

<br>

- 예제 코드: [스타일 우선순위](../01_Basic/02StylePriority.html)

---

### 크기 계산 함수

> 값을 계산하거나 범위를 제한해 화면 크기에 따라 가변하게 만드는 함수다.

<br>

| **함수** | **형식** | **설명** |
| --- | --- | --- |
| `clamp()` | `clamp(최솟값, 기준값, 최댓값)` | 기준값(`vw` 등)이 변해도 최솟값과 최댓값 사이로 제한한다<br>`font-size: clamp(16px, 2vw, 40px);` |
| `calc()` | `calc(값 연산 값)` | 단위가 다른 값끼리 계산한다<br>`top: calc(50vh - 25px);` |

<br>

- 예제 코드: [글자 크기 단위](../01_Basic/08FontSize.html)

---

### 폰트 적용

> `font-family`로 글꼴을 지정한다. 브라우저에 없는 폰트는 Google Font를 연결하거나 폰트 파일을 등록해 사용한다.

<br>

| **방식** | **설명** |
| --- | --- |
| 시스템 폰트 | `font-family`에 쉼표로 우선순위를 지정하고, 마지막에 `serif`, `cursive` 같은 계열 폰트를 쓴다 |
| Google Font | `<link>`로 폰트 CSS를 불러온 뒤 지정된 클래스나 폰트 이름으로 적용한다 |
| `@font-face` | 폰트 파일(`.ttf`, `.woff2`)을 불러와 `font-family` 이름을 붙여 등록한다 |

<br>

```css
@font-face {
    font-family: 'custom-01';
    src: url("../../../.github/fonts/NanumGangInHanWiRo.ttf");
}
```

<br>

- 예제 코드: [글꼴 적용](../01_Basic/09FontFamily.html)

<br>

---

<br>

**CSS 기본 요약**

<aside>

> 우선순위: !important > 인라인 > 내부, 외부 (같으면 아래 코드) <br>
clamp(): 최솟값과 최댓값 사이로 제한, calc(): 단위가 다른 값 계산 <br>
폰트: 시스템 폰트, Google Font, @font-face

</aside>

<br>

### Link
[Google Fonts](https://fonts.google.com/)
