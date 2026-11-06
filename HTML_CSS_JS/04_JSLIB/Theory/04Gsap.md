# Gsap

### GSAP

> HTML 요소를 움직이는 JavaScript 애니메이션 라이브러리다. `gsap.to("선택자", {옵션})`으로 요소를 현재 상태에서 지정한 값까지 움직인다.

<br>

| **옵션** | **설명** |
| --- | --- |
| `duration` | 애니메이션 시간(초) |
| `delay` | 시작 전 대기 시간(초) |
| `x`, `y` | 가로, 세로 이동 거리(px) |
| `rotate` | 회전(도). `720`은 두 바퀴 |
| `scale` | 크기 배율 |
| `opacity` | 투명도(0~1) |
| `ease` | 움직임 방식. `steps(10)`은 10단계로 끊어서, `elastic`은 고무줄처럼 튕기며 이동 |
| CSS 속성 | `backgroundColor`, `width`, `fontSize`처럼 CSS 속성도 지정 가능 |

<br>

- 예제 코드: [gsap.to](../04_Gsap/01GsapTo.html)

<br>

---

<br>

**GSAP 요약**

<aside>

> gsap.to("선택자", {duration, x, y, rotate, scale, opacity, ease}) <br>
CSS 속성도 값으로 변경 가능

</aside>

<br>

### Link
[GSAP 공식 문서](https://gsap.com/docs/v3/)
