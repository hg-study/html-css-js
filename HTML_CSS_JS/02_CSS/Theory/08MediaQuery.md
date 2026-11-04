# MediaQuery

### 반응형 웹

> 하나의 웹사이트가 PC, 태블릿, 스마트폰 등 접속 기기에 관계없이 화면 크기에 맞춰 자동으로 호환되도록 만드는 방식이다.

<br>

| **구분** | **설명** |
| --- | --- |
| 뷰포트 설정 | `<meta name="viewport" content="width=device-width, initial-scale=1.0">`로 화면 너비를 기기 너비에 맞춘다 |
| 미디어 쿼리 | 조건에 따라 다른 스타일을 적용하는 반응형의 대표적인 방법이다 |
| 유동 단위 | `%`, `vw`, `rem`, `clamp()`와 `flex-wrap` 같은 속성으로 화면에 맞춰 크기와 배치가 변하게 한다 |

<br>

---

### 미디어 쿼리 (@media)

> 화면 너비, 방향 같은 조건을 만족할 때만 안의 스타일을 적용하는 규칙이다.

<br>

```css
@media 장치유형 and (조건) {
    선택자 { 스타일 }
}
```

<br>

| **구분** | **포함되는 값** | **설명** |
| --- | --- | --- |
| 장치 유형 | **all:** 모든 장치. 생략 가능<br>**screen:** 화면<br>**print:** 프린터<br>**tv:** TV | 적용할 장치 |
| `max-width` | `px`<br>`@media (max-width: 1024px)` | 화면 너비가 이 값 이하일 때. 요소 너비가 이 값보다 커지지 않도록 막는다 |
| `min-width` | `px`<br>`@media (min-width: 768px)` | 화면 너비가 이 값 이상일 때 |
| `orientation` | **landscape:** 가로<br>**portrait:** 세로<br>`@media (orientation: landscape)` | 화면 방향 |

<br>

<span style="color:brown">`max-width` 조건은 큰 값을 먼저, 작은 값을 나중에 작성한다. 같은 선택자는 아래에 쓴 규칙이 적용되므로 작은 화면에서 마지막 규칙이 이긴다.</span>

<br>

<span style="color:gray">일반적인 기준: 태블릿 1024px 이하, 모바일 480px 이하. 프로젝트마다 기준 너비는 달라질 수 있다.</span>

<br>

- 예제 코드: [미디어 쿼리 기본](../07_MQ/01MediaQuery.html)
- 예제 코드: [Flex 레이아웃 연습 답 (반응형 적용)](../05_Layout/04%5B답%5DLayout.html)
- 예제 코드: [Grid (반응형 영역 재배치)](../05_Layout/05Grid.html)

---

### link의 media 속성

> css 파일을 화면 너비별로 나누고, `link` 태그의 `media` 속성에 조건을 지정해 조건에 맞는 파일만 적용한다.

<br>

| **파일** | **조건** |
| --- | --- |
| `desktop.css` | 조건 없음. 기본 스타일 |
| `tablet.css` | `media="all and (max-width: 1024px)"` |
| `mobile.css` | `media="all and (max-width: 480px)"` |

<br>

- 예제 코드: [link media](../07_MQ/02LinkMedia.html)

<br>

---

<br>

**MediaQuery 요약**

<aside>

> 반응형: 화면 크기에 맞춰 자동으로 달라지는 웹 <br>
@media all and (max-width: 값): 화면 너비가 값 이하일 때 적용 <br>
링크 방식: link의 media 속성으로 css 파일 단위 적용

</aside>

<br>

### Link
[MDN 미디어 쿼리](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
