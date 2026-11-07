# Scss Control

### 반복문 @for

> 숫자 범위를 반복하며 같은 형태의 스타일을 만든다. `@for $i from 시작 through 끝 { }` 에서 `$i`는 인덱스 변수다.

<br>

| **키워드** | **설명** |
| --- | --- |
| `through` | 끝 숫자를 포함 (1부터 10까지) |
| `to` | 끝 숫자를 포함하지 않음 (1부터 9까지) |
| `#{$i}` | 보간. 변수 값을 선택자나 속성 이름 안에 넣는다 |

<br>

```scss
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) { width: 100px * $i; }
}
```

<br>

- 예제 코드: [@for](../05_For/For.scss)

---

### 내장 함수

> Sass가 기본으로 제공하는 함수다. 색을 조작하는 함수를 많이 쓴다.

<br>

| **함수** | **설명** |
| --- | --- |
| `mix($색1, $색2)` | 두 색을 섞는다 |
| `lighten($색, %)`, `darken($색, %)` | 밝게, 어둡게 |
| `saturate($색, %)` | 채도를 높인다 |
| `invert($색)` | 색 반전 |
| `rgba($색, 투명도)` | 투명도 지정 |

<br>

- 예제 코드: [내장 함수](../07_BuiltIn/BuiltIn.scss)

<br>

---

<br>

**Scss Control 요약**

<aside>

> @for $i from 1 through 10: 범위를 반복해 스타일 생성, #{$i}로 값 삽입 <br>
내장 함수: mix, lighten, darken, saturate, invert, rgba

</aside>

<br>

### Link
[Sass 내장 모듈](https://sass-lang.com/documentation/modules/)
