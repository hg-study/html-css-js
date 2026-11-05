# Async

### 동기와 비동기

> 동기는 코드를 위에서 아래로 차례대로 실행하고 앞 작업이 끝나야 다음 작업을 실행한다. 비동기는 작업이 끝나기를 기다리지 않고 다음 코드를 먼저 실행한다.

<br>

| **구분** | **설명** |
| --- | --- |
| 동기(Synchronous) | 실행 흐름이 직관적이지만 오래 걸리는 작업이 있으면 전체가 지연된다 |
| 비동기(Asynchronous) | 네트워크 요청, 파일 읽기처럼 오래 걸리는 작업에 유용. 콜백, Promise, async/await로 처리한다 |

<br>

<span style="color:gray">자바스크립트는 싱글 스레드라 한 번에 하나의 작업만 처리한다. 비동기 함수는 브라우저가 대신 기다렸다가 끝나면 콜백을 실행한다.</span>

<br>

- 예제 코드: [동기와 비동기 정보](../08_Async/00Info.html)
- 예제 코드: [동기와 비동기 실행 순서](../08_Async/01SyncAsync.html)

---

### 타이머

| **함수** | **설명** |
| --- | --- |
| `setTimeout(콜백, 시간)` | 지정한 시간(ms) 뒤에 콜백을 한 번 실행하고 id를 반환 |
| `clearTimeout(id)` | 예약한 setTimeout 취소 |
| `setInterval(콜백, 시간)` | 지정한 간격(ms)으로 콜백을 반복 실행하고 id를 반환 |
| `clearInterval(id)` | 반복 중단 |

<br>

- 예제 코드: [setTimeout](../08_Async/02SetTimeout.html)
- 예제 코드: [setInterval](../08_Async/03SetInterval.html)

---

### Promise와 async/await

> `Promise`는 비동기 작업의 결과를 나타내는 객체다. 성공하면 `resolve(값)`, 실패하면 `reject(오류)`를 호출하고 `then`으로 성공, `catch`로 실패를 처리한다. `async/await`는 Promise를 동기 코드처럼 읽히게 쓰는 문법이다.

<br>

| **구분** | **설명** |
| --- | --- |
| `new Promise((resolve, reject) => {})` | 비동기 작업을 Promise로 감싼다 |
| `then(성공 콜백)`, `catch(실패 콜백)` | 결과 처리 |
| `async function` | 항상 Promise를 반환하는 함수 |
| `await Promise` | Promise가 끝날 때까지 기다린 뒤 결과를 받는다. `async` 함수 안에서만 사용 |

<br>

- 예제 코드: [Promise와 async/await](../08_Async/04PromiseAsync.html)

<br>

---

<br>

**Async 요약**

<aside>

> 동기는 순차 실행, 비동기는 기다리지 않고 다음 코드 실행 <br>
타이머: setTimeout(한 번), setInterval(반복), clear로 취소 <br>
Promise: resolve, reject, then, catch, async/await로 순서 제어

</aside>

<br>

### Link
[MDN 비동기 JavaScript](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/Asynchronous_JavaScript)
