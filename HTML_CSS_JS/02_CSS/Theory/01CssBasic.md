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
