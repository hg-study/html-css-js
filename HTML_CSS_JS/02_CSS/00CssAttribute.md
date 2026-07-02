# CssAttribute

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

---


## CSS Box Model
 
> 모든 HTML 요소는 content - padding - border - margin 4개 영역이 겹겹이 쌓인 박스 구조로 공간이 구성된다. CSS에서 `width` / `height`를 지정할 때 어떤 영역까지 포함하는지는 `box-sizing` 속성으로 결정된다.
 
<br>

```
┌─────────────────────────────┐
│          margin             │  ← margin: 바깥 여백 (다른 요소와의 간격)
│  ┌───────────────────────┐  │
│  │        border         │  │  ← border: 테두리 선
│  │  ┌─────────────────┐  │  │
│  │  │     padding     │  │  │  ← padding: 안쪽 여백 (content ↔ border)
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  content  │  │  │  │  ← content: 실제 콘텐츠 (텍스트, 이미지 등)
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```
 
Inline 요소는 Box Model에서 `width`, `height`, 상하 `margin`이 <span style="color:brown">적용되지 않는다.</span>
 
<span style="color:gray">`box-sizing: border-box;`를 적용하면 width/height 안에 padding·border가 포함되어 계산된다. 때문에 `* { box-sizing: border-box; }`로 전체 요소에 일괄 적용하는 경우가 많다.</span>
 
<br>

- 예제 코드: [Block · Inline 요소 & Box Model](../01_HTML/02Basic.html)

---

## 크기

> 요소의 너비, 높이, 내외부 여백을 지정하는 속성들이다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `width` | `px` `%` `vw` `auto`<br>**auto:** 콘텐츠 너비에 맞게 자동 계산<br>`width: 300px;` | 요소 너비 |
| `height` | `px` `%` `vh` `auto`<br>**auto:** 콘텐츠 높이에 맞게 자동 계산<br>`height: 200px;` | 요소 높이 |
| `min-width` | `px` `%`<br>요소가 이 값보다 작아지지 않는다<br>`min-width: 200px;` | 최소 너비 |
| `max-width` | `px` `%`<br>요소가 이 값보다 커지지 않는다<br>`max-width: 1200px;` | 최대 너비 |
| `min-height` | `px` `%`<br>`min-height: 100px;` | 최소 높이 |
| `max-height` | `px` `%`<br>`max-height: 500px;` | 최대 높이 |
| `margin` | **a:** 상하좌우 공통<br>**a b:** 상하 / 좌우<br>**a b c:** 상 / 좌우 / 하<br>**a b c d:** 상 / 우 / 하 / 좌<br>**auto:** 브라우저 자동 계산. 블록 요소 수평 가운데 정렬에 사용<br>음수 허용: 요소를 당겨 겹치게 배치 가능<br>`margin: 10px auto;` | 요소 바깥 여백 |
| `padding` | `margin`과 동일한 단축 표기 적용<br>음수 불가<br>`padding: 20px 10px;` | 요소 안쪽 여백 |

<br>

---

## 레이아웃

> 요소의 배치 방식, 위치 기준, 쌓임 순서를 제어하는 속성들이다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `display` | **block:** 한 줄 전체 차지. width/height 지정 가능<br>**inline:** 콘텐츠 크기만큼만 차지. width/height 지정 불가<br>**inline-block:** 인라인처럼 배치되지만 width/height 지정 가능<br>**none:** 화면에서 완전히 제거. 레이아웃 공간도 없어짐<br>**flex:** 자식 요소를 flexbox 방식으로 배치<br>**grid:** 자식 요소를 grid 방식으로 배치<br>`display: inline-block;` | 요소의 레이아웃 배치 방식 |
| `position` | **static:** 기본값. 문서 흐름대로 배치<br>**relative:** 자기 자신의 원래 위치 기준 이동. 공간은 유지됨<br>**absolute:** 가장 가까운 position 지정 부모 기준 절대 배치<br>**fixed:** 뷰포트 기준 고정 배치. 스크롤해도 위치 유지<br>**sticky:** 스크롤 위치에 따라 relative ↔ fixed 전환<br>`position: absolute;` | 요소의 위치 기준 |
| `top`<br>`right`<br>`bottom`<br>`left` | `px` `%`<br>position이 static이 아닐 때 활성화됨<br>`top: 0; left: 0;` | 위치 좌표 지정 |
| `z-index` | 숫자 (기본값 auto)<br>값이 클수록 앞에 표시됨. position 지정 요소에만 동작<br>`z-index: 10;` | 요소의 쌓임 순서 |
| `overflow` | **visible:** 기본값. 넘친 내용 그대로 표시<br>**hidden:** 넘친 내용 잘라 숨김<br>**scroll:** 항상 스크롤바 표시<br>**auto:** 내용이 넘칠 때만 스크롤바 표시<br>`overflow: hidden;` | 콘텐츠가 요소 밖으로 넘칠 때 처리 방식 |
| `float` | **left:** 왼쪽으로 띄워 배치<br>**right:** 오른쪽으로 띄워 배치<br>**none:** 기본값<br>`float: left;` | 요소를 흐름에서 분리해 좌우 배치 |
| `justify-content` | **flex-start:** 기본값. 시작점 정렬<br>**flex-end:** 끝점 정렬<br>**center:** 가운데 정렬<br>**space-between:** 양 끝 붙이고 사이 균등 분배<br>**space-around:** 요소 양옆에 균등 여백<br>`justify-content: space-between;` | `display: flex` 컨테이너의 주축(가로) 방향 정렬 |
| `align-items` | **stretch:** 기본값. 교차축 꽉 채움<br>**center:** 교차축 가운데 정렬<br>**flex-start / flex-end:** 교차축 시작/끝 정렬<br>`align-items: center;` | flex 컨테이너의 교차축(세로) 방향 정렬 |
| `gap` | `px` `%`<br>flex·grid 자식 요소 사이 간격을 한 번에 지정. margin과 달리 바깥쪽 끝에는 여백이 생기지 않음<br>`gap: 5px;` | flex(또는 grid) 자식 요소 사이 간격 |
| `flex-direction` | **row:** 기본값. 가로 방향 배치<br>**column:** 세로 방향 배치<br>**row-reverse / column-reverse:** 역순 배치<br>`flex-direction: row;` | flex 컨테이너의 주축 방향 지정 |
| `flex-wrap` | **nowrap:** 기본값. 한 줄 유지(넘치면 축소)<br>**wrap:** 공간 부족 시 다음 줄로 넘김<br>`flex-wrap: wrap;` | flex 자식 요소의 줄바꿈 허용 여부 |
| `cursor` | **pointer:** 손가락 모양. 클릭 가능한 요소임을 표시<br>**default:** 기본 화살표<br>**not-allowed:** 금지 모양<br>`cursor: pointer;` | 마우스를 올렸을 때의 커서 모양 |

<br>

- 예제 코드: [회원가입 폼 Css 추가](../01_HTML/16Form_add_css.html)

---

## 영역

> 요소의 테두리, 외곽선, 그림자, 박스 크기 계산 방식을 제어하는 속성들이다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `border` | `굵기 스타일 색상` 순 단축 속성<br>**solid:** 실선 <br>**dashed:** 파선 <br>**dotted:** 점선<br>**none:** 선 없음 <br>**double:** 이중 실선<br>`border: 1px solid black;` | 테두리 |
| `border-radius` | `px` `%`<br>**50%:** 원형으로 만들 때 사용<br>`border-radius: 8px;` | 테두리 모서리 곡률 |
| `border-collapse` | **collapse:** 이중 테두리 → 단일 선<br>**separate:** 기본값. 이중 테두리<br>`border-collapse: collapse;` | 테이블 테두리 병합 방식 |
| `box-sizing` | **content-box:** 기본값. width/height = 콘텐츠 영역만<br>**border-box:** width/height에 padding · border 포함 계산<br>`box-sizing: border-box;` | 박스 크기 계산 기준 |
| `box-shadow` | `x y blur spread color` 순<br>**inset:** 내부 그림자<br>`box-shadow: 2px 4px 8px rgba(0,0,0,0.2);` | 박스 그림자 |
| `outline` | `굵기 스타일 색상` 순. border와 유사하지만 레이아웃에 영향 없음<br>`outline: 2px solid red;` | 윤곽선. 레이아웃 공간 차지 안 함 |

<br>

<span style="color:gray">`outline: none;`은 클릭(focus) 시 브라우저가 기본으로 그리는 테두리를 제거할 때 자주 쓰인다.</span>

<br>

**가상 요소(Pseudo-element)**

> 실제 HTML 태그가 아니지만 특정 요소 내부의 일부분만 선택해 스타일을 적용할 수 있게 해주는 선택자다. `::`(콜론 두 개)로 시작하며 일반 선택자 뒤에 이어붙여 사용한다.

| **선택자** | **설명** |
| --- | --- |
| `::file-selector-button` | `input[type="file"]` 내부의 "파일 선택" 버튼 부분만 선택해 스타일을 적용하는 가상 요소. <br>`input[type="file"]::file-selector-button { background-color: royalblue; }` |


<br>

**가상 클래스(Pseudo-class)**

> 요소의 특정 상태를 선택해 스타일을 적용하는 선택자다. `:`(콜론 한 개)로 시작하며 일반 선택자 뒤에 이어붙여 사용한다.

| **선택자** | **설명** |
| --- | --- |
| `:hover` | 마우스를 요소 위에 올렸을 때의 상태를 선택한다<br>`.btn:hover { opacity: 1; }` |
| `:focus` | 요소가 클릭·탭 등으로 포커스를 받았을 때의 상태를 선택한다<br>`input:focus { border-color: royalblue; }` |
| `:active` | 요소를 클릭하는 순간의 상태를 선택한다<br>`.btn:active { opacity: 0.6; }` |
| `:first-child` / `:last-child` | 형제 요소 중 첫 번째 / 마지막 요소를 선택한다<br>`li:first-child { margin-top: 0; }` |
| `:nth-child(n)` | 형제 요소 중 n번째 요소를 선택한다<br>`li:nth-child(2) { color: gray; }` |

<br>

- 예제 코드: [회원가입 폼 페이지2 Css 추가](../01_HTML/19Form_only_html_css.html)

- 예제 코드: [회원가입 폼 Css 추가](../01_HTML/16Form_add_css.html)

---

## 색상 & 배경

> 요소의 글자색, 배경색, 배경 이미지를 제어하는 속성들이다.

<br>

**색상 표기 방식**

| **방식** | **예시** | **설명** |
| --- | --- | --- |
| 키워드 | `red` `black` `white` | CSS에서 정의된 색상 이름 |
| HEX | `#ff0000` `#fff` | 16진수 RGB 표기 |
| RGB | `rgb(255, 0, 0)` | 빨강 / 초록 / 파랑 0~255 |
| RGBA | `rgba(0, 0, 0, 0.5)` | RGB + 투명도 (0: 완전 투명 ~ 1: 완전 불투명) |

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `color` | 색상값 (키워드 / HEX / RGB / RGBA)<br>`color: #333;` | 글자 색상 |
| `background-color` | 색상값<br>**transparent:** 투명 (기본값)<br>`background-color: rgba(0,0,0,0.5);` | 배경 색상 |
| `background-image` | `url('경로')`<br>`background-image: url('img/bg.png');` | 배경 이미지 |
| `background-size` | **cover:** 비율 유지, 요소 전체를 덮도록 확대/축소<br>**contain:** 비율 유지, 요소 안에 전부 들어오도록<br>`px` `%`<br>`background-size: cover;` | 배경 이미지 크기 |
| `background-repeat` | **repeat:** 기본값. 반복<br>**no-repeat:** 반복 없음<br>**repeat-x / repeat-y:** 가로/세로 방향만 반복<br>`background-repeat: no-repeat;` | 배경 이미지 반복 방식 |
| `background-position` | `center` `top` `bottom` `left` `right`<br>`px` `%` 조합 가능<br>`background-position: center center;` | 배경 이미지 위치 |
| `background` | 배경 관련 속성을 한 줄로 묶은 단축 속성<br>`background: url('bg.png') no-repeat center / cover;` | 배경 단축 속성 |
| `opacity` | `0` ~ `1`<br>자식 요소에도 투명도가 함께 적용됨<br>`opacity: 0.5;` | 요소 전체 투명도 |

<br>

---

## 글자

> 글자의 크기, 굵기, 정렬, 간격 등을 제어하는 속성들이다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `font-family` | 폰트 이름. 쉼표로 우선순위 지정, 마지막에 계열 폰트 권장<br>`font-family: 'Noto Sans KR', sans-serif;` | 글꼴 |
| `font-size` | `px` `%` `em` `rem`<br>브라우저 기본값: `16px`<br>`font-size: 1.2rem;` | 글자 크기 |
| `font-weight` | **normal:** 기본 (400)<br>**bold:** 굵게 (700)<br>**lighter / bolder:** 부모 기준 상대적 굵기<br>숫자 100~900 (100 단위)<br>`font-weight: 700;` | 글자 굵기 |
| `font-style` | **normal:** 기본<br>**italic:** 기울임꼴<br>`font-style: italic;` | 글자 기울기 |
| `text-align` | **left:** 왼쪽 정렬 (기본값)<br>**center:** 가운데 정렬<br>**right:** 오른쪽 정렬<br>**justify:** 양쪽 정렬<br>`text-align: center;` | 텍스트 수평 정렬 |
| `text-decoration` | **none:** 장식 없음. 링크 밑줄 제거 시 사용<br>**underline:** 밑줄<br>**line-through:** 취소선<br>**overline:** 윗줄<br>`text-decoration: none;` | 텍스트 장식선 |
| `text-transform` | **uppercase:** 전체 대문자<br>**lowercase:** 전체 소문자<br>**capitalize:** 각 단어 첫 글자 대문자<br>`text-transform: uppercase;` | 영문 대소문자 변환 |
| `line-height` | 숫자(배수) `px` `%`<br>**숫자 권장:** `1.5` = font-size의 1.5배. 단위 없는 숫자는 자식에도 상대적으로 계산됨<br>`line-height: 1.6;` | 줄 간격 |
| `letter-spacing` | `px` `em`<br>음수 허용 (자간 좁히기)<br>`letter-spacing: 0.05em;` | 자간 (글자 사이 간격) |
| `white-space` | **normal:** 기본값. 연속 공백 합침, 자동 줄바꿈<br>**nowrap:** 줄바꿈 하지 않음<br>**pre:** 입력 그대로 유지. 공백/줄바꿈 보존<br>`white-space: nowrap;` | 공백 및 줄바꿈 처리 방식 |

<br>

---

## CSS 프레임워크 - Bootstrap 5

> 미리 만들어진 CSS·JS 클래스 모음(프레임워크)이다. 클래스 이름만 붙이면 레이아웃, 버튼, 폼 스타일 등을 별도 CSS 작성 없이 적용할 수 있다.

<br>

**CDN 연동**

> CDN(Content Delivery Network)은 라이브러리 파일을 직접 설치하지 않고 외부 서버에서 불러오는 방식이다. `link` · `script` 태그 한 줄로 사용할 수 있다.

<br>

| **속성** | **설명** |
| --- | --- |
| `integrity` | 불러온 파일이 중간에 변조되지 않았는지 검증하는 해시값<br>`<link ... integrity="sha384-...">` | 
| `crossorigin="anonymous"` | 외부 서버 파일을 요청할 때 인증 정보(쿠키 등)를 포함하지 않도록 지정<br>`<script src="..." crossorigin="anonymous">` |

<br>

---

### 그리드 시스템

> Bootstrap의 레이아웃은 `container - row - col` 3단계 구조로 구성된다.

<br>

| **클래스** | **설명** |
| --- | --- |
| `container` | 전체 콘텐츠를 가운데 정렬하고 좌우 여백을 잡는 최상위 래퍼<br>`<div class="container">` |
| `row` | `col`들을 가로로 배치하는 flex 행 단위. 내부를 12열로 나눠 관리한다<br>`<div class="row">` |
| `col` / `col-N` | row 안에서 차지할 열 수를 지정한다. `col-4`면 12열 중 4칸, `col`이면 나머지 공간을 균등 분배한다<br>`<div class="col-4">` |

<br>

**여백 유틸리티**

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `m-N` / `p-N` | N: 0~5 숫자<br>**m:** margin, **p:** padding<br>`m-2` → margin 전체 0.5rem | 여백 전체 지정 |
| `m(t\|b\|s\|e)-N` | **t:** top, **b:** bottom, **s:** start(왼쪽), **e:** end(오른쪽)<br>`me-1` → margin-right 0.25rem | 방향별 여백 지정 |

<br>

- 예제 코드: [회원가입 폼 페이지2 bs5 추가](../01_HTML/20Form_only_html_bs.html)

---

### 폼 & 버튼 클래스

<br>

| **클래스** | **설명** |
| --- | --- |
| `form-control` | `input` 태그에 적용. 기본 폼 스타일(테두리, 패딩, 포커스 효과)을 부여한다<br>`<input class="form-control">` |
| `form-select` | `select` 태그에 적용. `form-control`과 동일한 스타일을 부여한다<br>`<select class="form-select">` |
| `form-check` | checkbox·radio 래퍼 또는 input 자체에 적용하는 체크박스 스타일<br>`<input class="form-check" type="checkbox">` |
| `form-check-label` | `form-check`와 함께 쓰는 label 스타일<br>`<label class="form-check-label">` |
| `btn` | 버튼 기본 스타일(크기, 패딩, 둥근 모서리)<br>`<button class="btn">` |
| `btn-primary` / `btn-success` | `btn`에 색상(파란색 / 초록색)을 적용하는 수식 클래스<br>`<button class="btn btn-primary">` |

<br>

<span style="color:gray">Bootstrap은 페이지 전체 기본 글자 크기가 커서, 보통 `{font-size:0.9rem;}` 처럼 별도로 줄여 쓰는 경우가 많다.</span>

<br>

- 예제 코드: [회원가입 폼 페이지2 bs5 추가](../01_HTML/20Form_only_html_bs.html)

---


### Link
[CSS 속성 참고서 - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)