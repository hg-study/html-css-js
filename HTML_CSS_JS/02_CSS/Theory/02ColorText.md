# ColorText

### 색상 & 배경

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
| `background-attachment` | **scroll:** 기본값. 요소와 함께 스크롤<br>**fixed:** 스크롤해도 뷰포트에 고정<br>`background-attachment: fixed;` | 배경 이미지 스크롤 방식 |
| `opacity` | `0` ~ `1`<br>자식 요소에도 투명도가 함께 적용됨<br>`opacity: 0.5;` | 요소 전체 투명도 |

<br>

<br>

- 예제 코드: [색상 표기](../01_Basic/04Color.html)
- 예제 코드: [배경 이미지](../01_Basic/06Background.html)

<br>

---

### 글자

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
| `word-spacing` | `px` `em`<br>단어 사이 간격만 조절한다<br>`word-spacing: 20px;` | 단어 간격 |
| `white-space` | **normal:** 기본값. 연속 공백 합침, 자동 줄바꿈<br>**nowrap:** 줄바꿈 하지 않음<br>**pre:** 입력 그대로 유지. 공백/줄바꿈 보존<br>`white-space: nowrap;` | 공백 및 줄바꿈 처리 방식 |

<br>

<br>

- 예제 코드: [글자 기본 속성](../01_Basic/07TextBasic.html)
- 예제 코드: [글자 크기 단위](../01_Basic/08FontSize.html)
- 예제 코드: [글꼴 적용](../01_Basic/09FontFamily.html)

<br>

### Link
[MDN CSS 속성](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)
