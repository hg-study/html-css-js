# CssAttribute

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