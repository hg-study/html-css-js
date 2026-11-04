# Selector

- [기본 선택자](#기본-선택자)
- [결합자](#결합자)
- [속성 선택자](#속성-선택자)
- [가상 클래스](#가상-클래스)
- [가상 요소](#가상-요소)

<br>

---

### 기본 선택자

> 선택자는 스타일을 적용할 HTML 요소를 고르는 규칙이다. 중괄호 앞에 쓰고, 선택된 요소에 중괄호 안의 스타일이 적용된다.

<br>

| **선택자** | **형식** | **설명** |
| --- | --- | --- |
| 전체 | `*` | 문서의 모든 요소를 선택한다<br>`* { box-sizing: border-box; }` |
| 요소 | `div` | 태그 이름이 같은 요소를 모두 선택한다<br>`div { margin: 10px; }` |
| id | `#id_01` | id가 같은 요소 하나를 선택한다. 문서에서 id는 유일해야 한다<br>`#id_01 { background-color: red; }` |
| class | `.cl` | class가 같은 요소를 모두 선택한다. 서로 다른 태그에도 쓸 수 있다<br>`.cl { background-color: royalblue; }` |
| 그룹 | `A, B` | 여러 선택자에 같은 스타일을 한 번에 적용한다<br>`#id_01, .cl { border-radius: 50px; }` |

<br>

- 예제 코드: [기본 선택자](../03_Selector/01BasicSelector.html)

---

### 결합자

> 선택자 두 개를 연결해 요소 사이의 관계(부모와 자식, 형제)로 대상을 좁힌다.

<br>

| **선택자** | **형식** | **설명** |
| --- | --- | --- |
| 자식 | `A > B` | A의 바로 아래 단계 자식 B만 선택한다. 손자 이하는 선택하지 않는다<br>`.parent>div { border: 1px solid; }` |
| 자손 | `A B` | A 안에 포함된 모든 하위 B를 단계와 상관없이 선택한다<br>`.parent p { color: orange; }` |
| 일반 형제 | `A ~ B` | A 뒤에 오는 같은 부모의 형제 B를 모두 선택한다<br>`.c2~p { background-color: orange; }` |
| 인접 형제 | `A + B` | A 바로 다음에 오는 형제 B 하나만 선택한다<br>`.c2+p { width: 200px; }` |

<br>

<span style="color:gray">레이아웃은 `.wrapper>header>nav`처럼 자식 선택자를 이어 써서 영역별로 선택하면 다른 영역과 스타일이 섞이지 않는다.</span>

<br>

- 예제 코드: [자식, 자손 선택자](../03_Selector/02ChildSelector.html)
- 예제 코드: [레이아웃 선택자 구조](../03_Selector/03LayoutSelector.html)
- 예제 코드: [형제 선택자](../03_Selector/04SiblingSelector.html)

---

### 속성 선택자

> 요소의 속성과 값으로 대상을 고른다. 같은 태그라도 `type` 같은 속성값으로 구분할 때 쓴다.

<br>

| **선택자** | **형식** | **설명** |
| --- | --- | --- |
| 속성 | `[속성="값"]` | 해당 속성값을 가진 요소를 선택한다<br>`input[type="checkbox"] { display: none; }` |

<br>

---

### 가상 클래스

> 요소의 특정 상태를 선택해 스타일을 적용하는 선택자다. `:`(콜론 한 개)로 시작하며 일반 선택자 뒤에 이어붙여 사용한다.

<br>

| **선택자** | **설명** |
| --- | --- |
| `:hover` | 마우스를 요소 위에 올렸을 때의 상태를 선택한다<br>`.btn:hover { opacity: 1; }` |
| `:focus` | 요소가 클릭, 탭 등으로 포커스를 받았을 때의 상태를 선택한다<br>`input:focus { border-color: royalblue; }` |
| `:active` | 요소를 클릭하는 순간의 상태를 선택한다<br>`.btn:active { opacity: 0.6; }` |
| `:visited` | 이미 방문한 링크를 선택한다. `a` 태그의 `href`가 방문 기록에 있을 때 적용된다<br>`.btn:visited { color: tomato; }` |
| `:checked` | 체크된 `checkbox`, `radio`를 선택한다<br>`input[type="checkbox"]:checked+label { background-color: lightseagreen; }` |
| `:first-child` `:last-child` | 형제 요소 중 첫 번째, 마지막 요소를 선택한다<br>`li:first-child { margin-top: 0; }` |
| `:nth-child(n)` | 형제 요소 중 n번째 요소를 선택한다. `2n`은 짝수번째, `2n+1`은 홀수번째다<br>`li:nth-child(2n) { color: gray; }` |

<br>

<span style="color:gray">체크박스는 기본 모양을 `display: none`으로 숨기고, `for`와 `id`로 연결된 `label`을 `:checked+label`로 꾸미면 원하는 모양의 체크박스를 만들 수 있다.</span>

<br>

- 예제 코드: [체크박스 커스텀](../03_Selector/05Checkbox.html)
- 예제 코드: [링크 상태 가상 클래스](../03_Selector/07LinkState.html)
- 예제 코드: [구조 가상 클래스](../03_Selector/09NthChild.html)
- 예제 코드: [회원가입 폼 Css 추가](../../01_HTML/16Form_add_css.html)
- 예제 코드: [회원가입 폼 페이지2 Css 추가](../../01_HTML/19Form_only_html_css.html)

---

### 가상 요소

> 실제 HTML 태그가 아니지만 요소의 일부분이나 앞뒤에 내용을 만들어 스타일을 적용하는 선택자다. `::`(콜론 두 개)로 시작하며 일반 선택자 뒤에 이어붙여 사용한다.

<br>

| **선택자** | **설명** |
| --- | --- |
| `::before` | 요소 내용의 앞에 `content` 값을 추가한다<br>`div::before { content: '[ '; }` |
| `::after` | 요소 내용의 뒤에 `content` 값을 추가한다<br>`div::after { content: ' ]'; }` |
| `::file-selector-button` | `input[type="file"]` 내부의 "파일 선택" 버튼 부분만 선택해 스타일을 적용한다<br>`input[type="file"]::file-selector-button { background-color: royalblue; }` |

<br>

<span style="color:brown">`::before`, `::after`는 `content` 속성이 있어야 표시된다. 화면에는 보이지만 개발자 도구의 Elements에는 나타나지 않는다.</span>

<br>

- 예제 코드: [가상 요소](../03_Selector/08PseudoElement.html)

<br>

---

<br>

**선택자 요약**

<aside>

> 기본: `*` 요소 `#id` `.class` `A, B` <br>
결합자: `A > B` 자식, `A B` 자손, `A ~ B` 일반 형제, `A + B` 인접 형제 <br>
속성: `[type="값"]`, 가상 클래스: `:hover` `:checked` `:nth-child()`, 가상 요소: `::before` `::after`

</aside>

<br>

### Link
[MDN CSS 선택자](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_selectors)
