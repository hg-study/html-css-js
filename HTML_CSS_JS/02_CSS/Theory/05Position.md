# Position

### position 속성

> 요소의 위치를 지정하는 기준과 방식을 정한다. `static`이 아닌 값을 지정해야 `top`, `right`, `bottom`, `left`로 위치를 움직일 수 있다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `position` | **static:** 기본값. 문서 흐름대로 배치<br>**relative:** 자기 자신의 원래 위치 기준 이동. 공간은 유지됨<br>**absolute:** 가장 가까운 position 지정 부모 기준 절대 배치<br>**fixed:** 뷰포트 기준 고정 배치. 스크롤해도 위치 유지<br>**sticky:** 스크롤 위치에 따라 relative ↔ fixed 전환<br>`position: absolute;` | 요소의 위치 기준 |
| `top`<br>`right`<br>`bottom`<br>`left` | `px` `%`<br>position이 static이 아닐 때 활성화됨<br>`top: 0; left: 0;` | 위치 좌표 지정 |
| `z-index` | 숫자 (기본값 auto)<br>값이 클수록 앞에 표시됨. position 지정 요소에만 동작<br>`z-index: 10;` | 요소의 쌓임 순서 |

<br>

| **방식** | **기준** | **문서 흐름** |
| --- | --- | --- |
| `relative` | 원래 있던 위치 | 원래 자리를 유지한다 |
| `absolute` | `position`이 지정된 가장 가까운 상위 요소. 없으면 뷰포트(문서) | 흐름에서 빠져 나머지 요소가 그 자리를 채운다 |
| `fixed` | 뷰포트 | 흐름에서 빠지고 스크롤해도 같은 자리에 유지된다 |
| `sticky` | 스크롤 위치에 따라 `relative`처럼 있다가 지정한 위치(`top: 0`)에 닿으면 `fixed`처럼 고정 | 부모 영역을 벗어나면 함께 사라진다 |

<br>

<span style="color:brown">`absolute`의 기준이 되는 상위 요소에는 보통 `position: relative`를 지정한다. 기준 요소가 없으면 화면 기준으로 움직인다.</span>

<br>

- 예제 코드: [relative, absolute 비교](../04_Position/01Relative.html)
- 예제 코드: [absolute 기준 요소](../04_Position/02Absolute.html)
- 예제 코드: [fixed, 고정 요소](../04_Position/08Fixed.html)
- 예제 코드: [relative, absolute, fixed, sticky 비교](../04_Position/09Sticky.html)
- 예제 코드: [z-index](../04_Position/10Zindex.html)
