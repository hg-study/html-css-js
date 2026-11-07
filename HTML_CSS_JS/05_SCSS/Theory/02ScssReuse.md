# Scss Reuse

### Mixin

> 여러 선택자에 같은 스타일을 주입해 재사용하는 스타일 묶음이다. `@mixin 이름 { }`으로 정의하고 `@include 이름;`으로 적용한다. 상속과 달리 선택자끼리 관계가 없어도 자유롭게 쓸 수 있다.

<br>

| **형태** | **설명** |
| --- | --- |
| 기본 | `@mixin box { width: 100px; }` |
| 매개변수 | `@mixin box($size) { width: $size; }` 를 `@include box(200px);` |
| 기본값 | `@mixin box($size: 100px)` 은 인자를 생략하면 100px |

<br>

- 예제 코드: [Mixins](../04_Mixins/Mixins.scss)

---

### Function

> 값을 계산해 돌려주는 함수다. `@function 이름($매개변수) { @return 값; }`으로 정의하고 속성 값 자리에서 호출한다. mixin은 스타일을 적용하고, function은 값을 반환한다.

<br>

```scss
@function ratio($size, $ratio) {
  @return $size * $ratio;
}
.box { height: ratio(100px, .5); }   // 50px
```

<br>

- 예제 코드: [Function](../06_Function/Function.scss)

<br>

---

<br>

**Scss Reuse 요약**

<aside>

> @mixin 정의, @include 적용, 매개변수와 기본값 지정 가능 <br>
@function 정의, @return으로 값 반환

</aside>

<br>

### Link
[Sass @mixin과 @include](https://sass-lang.com/documentation/at-rules/mixin/)
