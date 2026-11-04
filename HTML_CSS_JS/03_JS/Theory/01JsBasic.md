# JsBasic

### JavaScript 정의

> 자바스크립트는 웹 페이지를 동적으로 만들고 사용자와 상호작용하게 하는 프로그래밍 언어다. HTML은 구조(Structure), CSS는 디자인(Style), JavaScript는 동작(Behavior)을 담당한다.

<br>

| **특징** | **설명** |
| --- | --- |
| 인터프리터 언어 | 별도의 컴파일 없이 웹 브라우저에서 위에서부터 순차적으로 실행한다 |
| 동적 타이핑 | 변수의 타입이 실행 중에 결정된다 |
| 객체 기반 언어 | 프로토타입 기반의 객체지향 언어다. 자바(Java)와는 별개의 언어다 |
| 인터랙티브 웹 | 정적인 HTML 페이지에 마우스 반응, 데이터 처리 같은 동적인 요소를 구현한다 |

<br>

**Java와 JavaScript의 차이**

| **항목** | **Java** | **JavaScript** |
| --- | --- | --- |
| 언어 종류 | 컴파일 언어 | 인터프리터 언어 |
| 실행 환경 | JVM | 웹 브라우저 또는 Node.js |
| 주 용도 | 백엔드, 안드로이드 등 | 웹 프론트엔드 중심 |
| 문법 유사성 | 이름만 비슷하고 문법은 매우 다르다 | |

<br>

---

### 동작 방식

> `<script>` 태그로 HTML에 삽입하거나 `.js` 파일로 분리해 연결한다. 브라우저의 JavaScript 엔진(V8, SpiderMonkey 등)이 코드를 해석해 실행하고, DOM(Document Object Model)을 조작해 페이지를 바꾼다.

<br>

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <style>
        /* CSS 작성 */
    </style>
</head>
<body>
    <!-- HTML 작성 -->
    <script>
        // JS 작성
    </script>
</body>
</html>
```

<br>

<span style="color:gray">`<script>`는 body 하단에 두면 HTML을 먼저 읽은 뒤 실행된다. head에 둘 때는 `defer` 속성을 쓴다.</span>

<br>

---

### 코드 삽입과 확인

> HTML 태그 안에 직접 JS를 쓰는 방식은 코드가 지저분해지고 유지보수가 어려워 권장하지 않는다. 확인용 출력은 콘솔을 쓴다.

<br>

| **코드** | **설명** | **비고** |
| --- | --- | --- |
| `onclick` | 버튼을 클릭했을 때 속성 값의 JS 코드를 실행하는 인라인 이벤트 핸들러 | 사용 지양. 대안은 `addEventListener` |
| `javascript:void(0)` | `a` 태그의 `href`에 써서 링크 이동과 새로고침 없이 JS 동작만 실행 | |
| `console.log()` | 개발자 도구(F12) 콘솔에 값을 출력해 디버깅 | |
| `alert()` | 팝업창으로 메시지 표시 | |
| `typeof` | 값이나 변수의 자료형을 문자열로 반환 | |
| `document.write()` | 괄호 안 내용을 페이지에 즉시 삽입. 태그도 렌더링한다. `writeln`은 자동 줄바꿈 | 사용 지양. 화면 로딩 후 실행하면 문서가 초기화된다 |
| `.innerHTML` | 요소 안의 HTML 내용을 가져오거나 바꾼다 | 보안 위험으로 사용 지양. 대안은 `.textContent`, `.insertAdjacentHTML()` |

<br>

<span style="color:brown">`document.write()`와 `.innerHTML`은 입력값에 스크립트가 들어갈 수 있는 보안 위험이 있어 지양한다.</span>

<br>

- 예제 코드: [HTML에 JS 직접 삽입](../01_Basic/01InlineEvent.html)
- 예제 코드: [document.write](../01_Basic/02DocumentWrite.html)
- 예제 코드: [getElementById, innerHTML](../01_Basic/03InnerHTML.html)

<br>

---

<br>

**JsBasic 요약**

<aside>

> JS: 웹 페이지에 동작을 담당하는 인터프리터 언어 (HTML 구조, CSS 디자인, JS 동작) <br>
삽입: script 태그 또는 js 파일, 태그 안 직접 삽입은 지양 <br>
확인: console.log, typeof

</aside>

<br>

### Link
[MDN JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
