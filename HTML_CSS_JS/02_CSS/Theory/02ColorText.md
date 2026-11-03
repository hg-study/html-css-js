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
