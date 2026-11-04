# Control

### 분기문

> 조건에 따라 실행할 코드를 선택한다. `if`, `else if`, `else`는 위에서부터 차례로 조건을 확인하고, 처음 참인 블록만 실행한다.

<br>

```javascript
if (mode === 'mobile') {
    wrapperEl.classList.add('layout-mobile');
} else if (mode === 'tablet') {
    wrapperEl.classList.add('layout-tablet');
} else {
    wrapperEl.classList.add('layout-desktop');
}
```

<br>

- 예제 코드: [분기문 if](../04_Control/01Branch.html)

---

### 폼 유효성 검증

> 입력값을 `if`, `else if`로 차례로 검증하고, 하나라도 통과하지 못하면 `return false`로 전송을 막는다. 모두 통과하면 `form.submit()`으로 전송한다.

<br>

| **구분** | **설명** |
| --- | --- |
| `submit` 이벤트 | form이 전송될 때 발생. 핸들러에서 `false`를 반환하면 전송이 취소된다 |
| 정규식 `regex.test(문자열)` | 문자열이 정규식과 일치하면 `true`. 비밀번호 규칙 검증에 사용 |
| `value.trim()` | 앞뒤 공백을 제거해 공백만 입력한 경우를 걸러낸다 |

<br>

- 예제 코드: [분기문 활용: 폼 유효성 검증](../04_Control/02FormValidation.html)

---

### 반복문

> 조건이 참인 동안 같은 코드를 반복 실행한다.

<br>

| **구분** | **설명** |
| --- | --- |
| `while (조건) {}` | 조건이 참인 동안 반복. 반복 횟수를 알 수 없을 때 사용 |
| `for (초기값; 조건; 증감) {}` | 반복 횟수가 정해져 있을 때 사용 |
| `break` | 반복문을 즉시 종료 |
| `continue` | 이번 반복을 건너뛰고 다음 반복으로 이동 |

<br>

- 예제 코드: [반복문 while, for](../04_Control/03Loop.html)

<br>

---

<br>

**Control 요약**

<aside>

> 분기문: if, else if, else로 조건에 따라 실행 선택 <br>
유효성 검증: 하나라도 실패하면 return false로 전송 차단 <br>
반복문: while, for, break, continue

</aside>

<br>

### Link
[MDN 제어 흐름](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
