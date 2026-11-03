# BoxModel

### CSS Box Model
 
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

- 예제 코드: [Block · Inline 요소 & Box Model](../../01_HTML/02Basic.html)
- 예제 코드: [Block vs Inline](../01_Basic/01Block_vs_Inline.html)

<br>

---

### 크기

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

<br>

- 예제 코드: [너비 높이](../01_Basic/03WidthHeight.html)
- 예제 코드: [Margin](../02_Box/01Margin.html)
- 예제 코드: [Padding](../02_Box/02Padding.html)

<br>

---

### 영역

> 요소의 테두리, 외곽선, 그림자, 박스 크기 계산 방식을 제어하는 속성들이다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `border` | `굵기 스타일 색상` 순 단축 속성<br>**solid:** 실선 <br>**dashed:** 파선 <br>**dotted:** 점선<br>**none:** 선 없음 <br>**double:** 이중 실선<br>`border: 1px solid black;` | 테두리 |
| `border-top` `border-right` `border-bottom` `border-left` | `border`와 같은 형식으로 방향별 지정<br>`border-top: 2px dashed red;` | 방향별 테두리 |
| `border-radius` | `px` `%`<br>값 순서는 왼쪽 위부터 시계 방향<br>**a:** 네 모서리 공통<br>**a b:** 왼쪽 위, 오른쪽 아래 / 오른쪽 위, 왼쪽 아래<br>**a b c:** 왼쪽 위 / 오른쪽 위, 왼쪽 아래 / 오른쪽 아래<br>**a b c d:** 왼쪽 위 / 오른쪽 위 / 오른쪽 아래 / 왼쪽 아래<br>**50%:** 정사각형이면 원형<br>`border-radius: 8px;` | 테두리 모서리 곡률 |
| `border-collapse` | **collapse:** 이중 테두리 → 단일 선<br>**separate:** 기본값. 이중 테두리<br>`border-collapse: collapse;` | 테이블 테두리 병합 방식 |
| `box-sizing` | **content-box:** 기본값. width/height = 콘텐츠 영역만<br>**border-box:** width/height에 padding · border 포함 계산<br>`box-sizing: border-box;` | 박스 크기 계산 기준 |
| `box-shadow` | `x y blur spread color` 순<br>**inset:** 내부 그림자<br>`box-shadow: 2px 4px 8px rgba(0,0,0,0.2);` | 박스 그림자 |
| `overflow` | **visible:** 기본값. 넘친 내용 그대로 표시<br>**hidden:** 넘친 내용 잘라 숨김<br>**scroll:** 항상 스크롤바 표시<br>**auto:** 내용이 넘칠 때만 스크롤바 표시<br>`overflow: hidden;` | 콘텐츠가 요소 밖으로 넘칠 때 처리 방식 |
| `overflow-x` `overflow-y` | `overflow`와 같은 값<br>가로, 세로 방향만 따로 지정<br>`overflow-x: hidden;` | 방향별 넘침 처리 |
| `outline` | `굵기 스타일 색상` 순. border와 유사하지만 레이아웃에 영향 없음<br>`outline: 2px solid red;` | 윤곽선. 레이아웃 공간 차지 안 함 |

<br>

<span style="color:gray">`outline: none;`은 클릭(focus) 시 브라우저가 기본으로 그리는 테두리를 제거할 때 자주 쓰인다.</span>

<br>

<br>

- 예제 코드: [Border](../02_Box/03Border.html)
- 예제 코드: [BoxSizing](../02_Box/04BoxSizing.html)
- 예제 코드: [Overflow](../02_Box/05Overflow.html)

<br>

### Link
[MDN 박스 모델](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Styling_basics/Box_model)
