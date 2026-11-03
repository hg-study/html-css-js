# CssAttribute

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
| `float` | **left:** 왼쪽으로 띄워 배치<br>**right:** 오른쪽으로 띄워 배치<br>**none:** 기본값<br>`float: left;` | 요소를 흐름에서 분리해 좌우 배치 |
| `justify-content` | **flex-start:** 기본값. 시작점 정렬<br>**flex-end:** 끝점 정렬<br>**center:** 가운데 정렬<br>**space-between:** 양 끝 붙이고 사이 균등 분배<br>**space-around:** 요소 양옆에 균등 여백<br>`justify-content: space-between;` | `display: flex` 컨테이너의 주축(가로) 방향 정렬 |
| `align-items` | **stretch:** 기본값. 교차축 꽉 채움<br>**center:** 교차축 가운데 정렬<br>**flex-start / flex-end:** 교차축 시작/끝 정렬<br>`align-items: center;` | flex 컨테이너의 교차축(세로) 방향 정렬 |
| `gap` | `px` `%`<br>flex·grid 자식 요소 사이 간격을 한 번에 지정. margin과 달리 바깥쪽 끝에는 여백이 생기지 않음<br>`gap: 5px;` | flex(또는 grid) 자식 요소 사이 간격 |
| `flex-direction` | **row:** 기본값. 가로 방향 배치<br>**column:** 세로 방향 배치<br>**row-reverse / column-reverse:** 역순 배치<br>`flex-direction: row;` | flex 컨테이너의 주축 방향 지정 |
| `flex-wrap` | **nowrap:** 기본값. 한 줄 유지(넘치면 축소)<br>**wrap:** 공간 부족 시 다음 줄로 넘김<br>`flex-wrap: wrap;` | flex 자식 요소의 줄바꿈 허용 여부 |
| `cursor` | **pointer:** 손가락 모양. 클릭 가능한 요소임을 표시<br>**default:** 기본 화살표<br>**not-allowed:** 금지 모양<br>`cursor: pointer;` | 마우스를 올렸을 때의 커서 모양 |

<br>

- 예제 코드: [회원가입 폼 Css 추가](../../01_HTML/16Form_add_css.html)

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

- 예제 코드: [회원가입 폼 페이지2 bs5 추가](../../01_HTML/20Form_only_html_bs.html)

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

- 예제 코드: [회원가입 폼 페이지2 bs5 추가](../../01_HTML/20Form_only_html_bs.html)

---


### Link
[CSS 속성 참고서 - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)