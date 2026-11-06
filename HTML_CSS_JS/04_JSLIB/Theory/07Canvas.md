# Canvas

### Canvas

> HTML의 `<canvas>` 요소에 JavaScript로 그림을 그리는 기능이다. `getContext('2d')`로 얻은 그리기 도구(context)로 선, 도형, 글자를 그린다.

<br>

| **속성, 메서드** | **설명** |
| --- | --- |
| `getContext('2d')` | 2D 그리기 도구 |
| `lineWidth`, `strokeStyle`, `lineCap` | 선 굵기, 색, 끝 모양 |
| `beginPath()` | 새 경로 시작 |
| `moveTo(x, y)`, `lineTo(x, y)` | 시작점 이동, 해당 위치까지 선 경로 추가 |
| `stroke()` | 경로를 실제로 그린다 |
| `clearRect(x, y, 너비, 높이)` | 영역을 지운다 |

<br>

**그림판 동작**

| **이벤트** | **동작** |
| --- | --- |
| `mousedown` | 그리기 시작 |
| `mousemove` | 누른 상태에서 이동하면 선을 그린다 |
| `mouseup` | 그리기 종료, `beginPath()`로 경로를 끊는다 |

<br>

- 예제 코드: [Canvas 그림판](../07_Canvas/01Canvas.html)
- 예제 코드: [Canvas 그림판 JS](../07_Canvas/01Canvas.js)

<br>

---

<br>

**Canvas 요약**

<aside>

> canvas.getContext('2d')로 도구를 얻어 moveTo, lineTo, stroke로 그린다 <br>
마우스 이벤트(mousedown, mousemove, mouseup)로 그림판 구현

</aside>

<br>

### Link
[MDN Canvas](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API)
