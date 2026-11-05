# Event

- [이벤트](#이벤트)
- [마우스 이벤트](#마우스-이벤트)
- [드래그 앤 드롭](#드래그-앤-드롭)
- [키보드와 입력 이벤트](#키보드와-입력-이벤트)
- [표 만들기 연습](#표-만들기-연습)
- [스크롤, 창 크기, 문서 로딩](#스크롤-창-크기-문서-로딩)

<br>

---

### 이벤트

> 사용자의 동작이나 브라우저의 상태 변화를 이벤트라 한다. `addEventListener("이벤트", 콜백)`으로 요소에 이벤트가 발생했을 때 실행할 함수를 등록한다.

<br>

```javascript
btnEl.addEventListener('click', (e) => {
    console.log(e.target);   // 이벤트가 발생한 요소
});
```

<br>

### 마우스 이벤트

| **이벤트** | **설명** |
| --- | --- |
| `click` | 클릭 |
| `dblclick` | 더블 클릭 |
| `mouseenter`, `mouseleave` | 요소 안으로 들어올 때, 나갈 때. 자식 요소에서는 반복 발생하지 않는다 |
| `mouseover`, `mouseout` | 요소나 자식 요소에 올라갈 때, 벗어날 때 |
| `contextmenu` | 마우스 오른쪽 클릭 |

<br>

- 예제 코드: [마우스 이벤트](../06_Event/01MouseEvent.html)

---

### 드래그 앤 드롭

> 요소를 끌어서 다른 영역에 놓는 동작이다. 대상 영역에서 `dragover`의 기본 동작을 막아야 `drop`이 허용된다.

<br>

| **이벤트** | **설명** |
| --- | --- |
| `dragstart` | 드래그를 시작할 때. 끌고 있는 요소를 변수에 저장 |
| `dragover` | 드래그 중 대상 영역 위에 있을 때. `e.preventDefault()` 필수 |
| `drop` | 놓았을 때. `offsetX`, `offsetY`로 놓은 위치를 얻는다 |

<br>

- 예제 코드: [드래그 앤 드롭](../06_Event/02DragDrop.html)
- 예제 코드: [드래그 앤 드롭과 이동](../06_Event/02DragMove.html)

---

### 키보드와 입력 이벤트

| **이벤트** | **설명** |
| --- | --- |
| `keydown` | 키를 누를 때. `e.key`로 어떤 키인지 확인(`Enter` 등) |
| `keyup` | 키를 뗄 때 |
| `input` | 입력창의 값이 바뀔 때마다 발생 |
| `compositionstart`, `compositionupdate`, `compositionend` | 한글처럼 글자를 조합해 입력할 때 조합의 시작, 진행, 종료 |
| `change` | 체크박스나 select의 선택 값이 바뀔 때. `e.target.checked`로 체크 여부 확인 |

<br>

- 예제 코드: [키보드 이벤트](../06_Event/03KeyEvent.html)
- 예제 코드: [입력 이벤트](../06_Event/04InputEvent.html)
- 예제 코드: [타자연습](../06_Event/05TypingPractice.html)
- 예제 코드: [체크 이벤트](../06_Event/06CheckEvent.html)

---

### 표 만들기 연습

> 행과 열 개수를 입력해 표를 만들고 클릭한 셀을 선택 표시한다. `data-*` 속성은 `dataset`으로 읽는다.

<br>

- 예제 코드: [표 만들기 연습](../06_Event/07TablePrtc.html)
- 예제 코드: [표 만들기 답](../06_Event/07Table답.html)
- 예제 코드: [표 만들기 답 2](../06_Event/07Table답2.html)

---

### 스크롤, 창 크기, 문서 로딩

| **이벤트** | **설명** |
| --- | --- |
| `scroll` | 스크롤할 때. 스크롤 위치에 따라 메뉴를 고정 |
| `resize` | 브라우저 창 크기가 바뀔 때. `window.innerWidth`는 스크롤바를 제외한 창 내부 너비 |
| `DOMContentLoaded` | HTML 문서 구조(DOM)가 모두 만들어졌을 때. 이미지 같은 리소스 로딩은 기다리지 않는다 |

<br>

- 예제 코드: [스크롤 이벤트](../06_Event/08Scroll.html)
- 예제 코드: [창 크기 변경 이벤트](../06_Event/09Resize.html)
- 예제 코드: [DOMContentLoaded](../06_Event/10DomLoad.html)

<br>

---

<br>

**Event 요약**

<aside>

> addEventListener로 이벤트와 콜백 등록 <br>
마우스: click, mouseenter, contextmenu 등, 드래그 앤 드롭: dragstart, dragover(preventDefault), drop <br>
키보드와 입력: keydown, input, change <br>
창: scroll, resize, DOMContentLoaded

</aside>

<br>

### Link
[MDN 이벤트](https://developer.mozilla.org/ko/docs/Web/API/Event)
