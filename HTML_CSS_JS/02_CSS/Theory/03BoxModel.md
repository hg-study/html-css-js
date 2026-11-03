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
