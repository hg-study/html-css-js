# Node

### DOM 노드 탐색

> DOM은 HTML 문서를 트리 구조의 객체로 나타낸 것이다. 트리의 각 요소를 노드라 하며, 선택 메서드로 노드를 찾아 스타일과 내용을 바꾼다.

<br>

| **메서드** | **설명** |
| --- | --- |
| `getElementById("id")` | id로 요소 1개 선택 |
| `getElementsByClassName("class")` | class로 요소 모음 선택 |
| `getElementsByTagName("tag")` | 태그로 요소 모음 선택 |
| `querySelector("선택자")` | CSS 선택자로 첫 번째 요소 선택 |
| `querySelectorAll("선택자")` | CSS 선택자로 모든 요소 선택 |
| `setAttribute("속성", 값)` | 요소의 속성 지정 |

<br>

- 예제 코드: [노드 탐색](../07_Node/01Select.html)

---

### form 접근

> `document.forms`나 `name` 속성으로 form과 안의 input에 접근한다. 값은 `value`로 읽는다.

<br>

```javascript
const formEl = document.joinForm;        // name="joinForm"
const name = formEl.username.value;      // name="username"
```

<br>

- 예제 코드: [form 접근](../07_Node/02FormAccess.html)

---

### class 추가와 제거

> `classList`로 요소의 class를 다룬다. CSS에 class별 스타일을 미리 만들어 두고 class만 바꿔 화면을 변경한다.

<br>

| **메서드** | **설명** |
| --- | --- |
| `classList.add("class")` | class 추가 |
| `classList.remove("class")` | class 제거 |
| `classList.toggle("class")` | 있으면 제거, 없으면 추가 |
| `classList.contains("class")` | 포함 여부 확인 |

<br>

- 예제 코드: [class 추가와 제거](../07_Node/03ClassEvent.html)

---

### 노드 생성과 삭제

> `createElement`로 만든 노드를 `appendChild`로 문서에 연결하면 화면에 나타난다. 연결된 노드는 `remove`로 제거한다.

<br>

| **메서드** | **설명** |
| --- | --- |
| `createElement("tag")` | 새 요소 생성 |
| `appendChild(노드)` | 자식의 마지막에 연결 |
| `prepend(노드)` | 자식의 맨 앞에 연결 |
| `remove()` | 요소 제거 |
| `textContent` | 요소의 텍스트 읽기와 쓰기 |
| `contentEditable` | 요소를 직접 수정 가능하게 지정 |

<br>

- 예제 코드: [노드 생성과 삭제](../07_Node/04CreateNode.html)
- 예제 코드: [표 입력, 수정, 삭제 연습](../07_Node/05TablePrtc.html)
- 예제 코드: [표 입력, 수정, 삭제 답](../07_Node/05Table답.html)
- 예제 코드: [드래그로 항목 순서 변경](../07_Node/06DragSort.html)
- 예제 코드: [TO DO 앱](../09_Todo/index.html)

<br>

---

<br>

**Node 요약**

<aside>

> 탐색: getElementById, querySelector 등 <br>
class 제어: classList.add, remove, toggle <br>
생성과 삭제: createElement, appendChild, prepend, remove

</aside>

<br>

### Link
[MDN 문서 객체 모델](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)
