# Layout

### display

> 요소를 화면에 어떤 방식으로 배치할지 정한다. 블록은 한 줄을 차지하고, 인라인은 내용 크기만큼만 차지한다. `flex`와 `grid`를 지정하면 자식 요소를 배치하는 컨테이너가 된다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `display` | **block:** 한 줄 전체 차지. width/height 지정 가능<br>**inline:** 콘텐츠 크기만큼만 차지. width/height 지정 불가<br>**inline-block:** 인라인처럼 배치되지만 width/height 지정 가능<br>**none:** 화면에서 완전히 제거. 레이아웃 공간도 없어짐<br>**flex:** 자식 요소를 flexbox 방식으로 배치<br>**grid:** 자식 요소를 grid 방식으로 배치<br>`display: inline-block;` | 요소의 레이아웃 배치 방식 |

<br>

- 예제 코드: [Block vs Inline](../01_Basic/01Block_vs_Inline.html)

---

### Flex

> 자식 요소를 한 방향(가로 또는 세로)으로 배치하는 레이아웃이다. 부모에 `display: flex`를 지정하고, 부모와 자식에 각각 속성을 지정한다. 주축은 `flex-direction`이 정한 방향이고, 교차축은 그에 수직인 방향이다.

<br>

**컨테이너(부모) 속성**

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `flex-direction` | **row:** 기본값. 가로 방향 배치<br>**column:** 세로 방향 배치<br>**row-reverse / column-reverse:** 역순 배치<br>`flex-direction: row;` | flex 컨테이너의 주축 방향 지정 |
| `justify-content` | **flex-start:** 기본값. 시작점 정렬<br>**flex-end:** 끝점 정렬<br>**center:** 가운데 정렬<br>**space-between:** 양 끝 붙이고 사이 균등 분배<br>**space-around:** 요소 양옆에 균등 여백<br>`justify-content: space-between;` | `display: flex` 컨테이너의 주축(가로) 방향 정렬 |
| `align-items` | **stretch:** 기본값. 교차축 꽉 채움<br>**center:** 교차축 가운데 정렬<br>**flex-start / flex-end:** 교차축 시작/끝 정렬<br>`align-items: center;` | flex 컨테이너의 교차축(세로) 방향 정렬 |
| `gap` | `px` `%`<br>flex·grid 자식 요소 사이 간격을 한 번에 지정. margin과 달리 바깥쪽 끝에는 여백이 생기지 않음<br>`gap: 5px;` | flex(또는 grid) 자식 요소 사이 간격 |
| `flex-wrap` | **nowrap:** 기본값. 한 줄 유지(넘치면 축소)<br>**wrap:** 공간 부족 시 다음 줄로 넘김<br>`flex-wrap: wrap;` | flex 자식 요소의 줄바꿈 허용 여부 |

<br>

**아이템(자식) 속성**

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `flex-grow` | 숫자 (기본값 0)<br>남는 공간을 나누어 가지는 비율. 0이면 늘어나지 않는다<br>`flex-grow: 1;` | 늘어나는 비율 |
| `flex-shrink` | 숫자 (기본값 1)<br>공간이 부족할 때 줄어드는 비율. 0이면 줄어들지 않는다<br>`flex-shrink: 0;` | 줄어드는 비율 |
| `flex-basis` | `px` `%` `auto`<br>요소의 기본 크기. `width`와 겹치므로 `flex-grow`를 쓸 때는 `width`를 지정하지 않는다<br>`flex-basis: 200px;` | 기본 크기 |
| `flex` | `flex-grow flex-shrink flex-basis` 순 단축 속성<br>`flex: 1 1 300px;` | flex 아이템 단축 속성 |
| `align-self` | **stretch:** 교차축을 꽉 채움<br>**flex-start / flex-end / center:** 교차축 시작 / 끝 / 가운데<br>`align-self: flex-end;` | 아이템 하나만 교차축 정렬을 따로 지정 |

<br>

<span style="color:gray">`flex-wrap: wrap`과 `flex-basis`를 함께 쓰면 화면 폭에 따라 한 줄에 놓이는 개수가 자동으로 달라진다. 카드, 푸터처럼 반응형으로 줄바꿈되는 영역에 많이 쓴다.</span>

<br>

- 예제 코드: [Flex 방향, 정렬, 줄바꿈](../05_Layout/01Flex.html)
- 예제 코드: [Flex 전체 폭 고정 버전](../05_Layout/01Flex+.html)
- 예제 코드: [Flex 자식 속성](../05_Layout/02Flex.html)

---

### Flex 레이아웃 구성

> 네비게이션 바, 카드, 미디어 콘텐츠, 푸터를 flex로 구성하는 대표 패턴이다.

<br>

| **영역** | **구성** |
| --- | --- |
| 네비게이션 바 | 부모 `display: flex`와 `justify-content: space-between`으로 로고는 왼쪽, 메뉴는 오른쪽 끝에 배치한다 |
| 카드 | `flex-wrap: wrap`과 `flex: 1 1 300px`로 폭에 따라 줄 수가 변하게 한다 |
| 미디어 콘텐츠 | 이미지와 글을 나란히 놓고, 좁아지면 줄바꿈으로 세로로 쌓이게 한다 |
| 푸터 | 섹션 여러 개를 `flex: 1 1 250px`로 균등 분배한다 |
| 반응형 | `@media (max-width: 1080px)`에서 `flex-direction: column`으로 세로 배치로 바꾼다 |

<br>

- 예제 코드: [Flex 레이아웃 연습](../05_Layout/03Layout_prtc.html)
- 예제 코드: [Flex 레이아웃 연습 답](../05_Layout/04%5B답%5DLayout.html)
- 예제 코드: [KREAM 레이아웃](../05_Layout/06KREAM_LAYOUT.html)

---

### Grid

> 행과 열을 기준으로 요소를 배치하는 레이아웃이다. 부모에 `display: grid`를 지정하고 열과 행의 구조를 정의한다. Flex는 한 방향, Grid는 행과 열 두 방향을 다룬다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `grid-template-columns` | 열 너비를 공백으로 나열<br>`fr`: 남은 공간의 비율<br>`repeat(횟수, 값)`: 같은 값 반복<br>`minmax(최소, 최대)`: 크기 범위<br>**auto-fit:** 들어갈 수 있는 만큼 열을 자동 생성<br>`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` | 열 구조 |
| `grid-template-rows` | 행 높이를 공백으로 나열<br>`grid-template-rows: 1fr 1fr 1fr;` | 행 구조 |
| `grid-template-areas` | 영역 이름을 행 단위 문자열로 나열<br>`grid-template-areas: 'header header' 'sidebar main';` | 영역 이름으로 배치 정의 |
| `grid-area` | 자식에 영역 이름 지정<br>`grid-area: header;` | 자식이 차지할 영역 |
| `justify-items` `align-items` | **center / start / end / stretch**<br>`justify-items`: 가로, `align-items`: 세로 | 셀 안에서 아이템 정렬 |

<br>

- 예제 코드: [Grid 기본, 영역, 반응형, 정렬](../05_Layout/05Grid.html)
- 예제 코드: [Grid 연습](../05_Layout/05Grid_연습.html)

---

### 그 외

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `float` | **left:** 왼쪽으로 띄워 배치<br>**right:** 오른쪽으로 띄워 배치<br>**none:** 기본값<br>`float: left;` | 요소를 흐름에서 분리해 좌우 배치 |
| `cursor` | **pointer:** 손가락 모양. 클릭 가능한 요소임을 표시<br>**default:** 기본 화살표<br>**not-allowed:** 금지 모양<br>`cursor: pointer;` | 마우스를 올렸을 때의 커서 모양 |

<br>

---

<br>

**Layout 요약**

<aside>

> display: block, inline, inline-block, none, flex, grid <br>
Flex: 한 방향 배치 (justify-content 주축, align-items 교차축, flex-wrap 줄바꿈, flex 자식 크기) <br>
Grid: 행과 열 배치 (grid-template-columns, grid-template-areas, fr, repeat, minmax)

</aside>

<br>

### Link
[MDN Flexbox](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/CSS_layout/Flexbox), [MDN Grid](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/CSS_layout/Grids)
