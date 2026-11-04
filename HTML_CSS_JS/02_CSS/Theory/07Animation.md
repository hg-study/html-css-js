# Animation

- [transition](#transition)
- [transform](#transform)
- [transform 3D](#transform-3d)
- [animation](#animation)
- [슬라이더와 메뉴 만들기](#슬라이더와-메뉴-만들기)

<br>

---

### transition

> 속성 값이 바뀔 때 변화를 즉시 보여주지 않고 지정한 시간 동안 부드럽게 전환한다. `:hover` 같은 상태 변화와 함께 쓴다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `transition` | `시간` (예: `.5s`, `200ms`)<br>`속성 시간 속도 지연` 순으로 함께 지정 가능<br>`transition: .3s;` | 속성 변화에 걸리는 시간 |

<br>

<span style="color:gray">기본 상태에 쓴 시간은 원래대로 돌아올 때, `:hover` 상태에 쓴 시간은 `hover`가 시작될 때 적용된다.</span>

<br>

- 예제 코드: [transition 기본](../06_Animation/01Transition.html)
- 예제 코드: [transition 활용](../06_Animation/02Transition.html)

---

### transform

> 요소를 이동, 확대, 회전, 기울인다. 요소가 차지하는 공간(문서 흐름)에는 영향을 주지 않고 화면에 그려지는 모양만 바뀐다.

<br>

| **함수** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `translate(x, y)` | `px` `%`<br>`translateX()` `translateY()`는 한 방향만 이동<br>`transform: translate(200px, 100px);` | 위치 이동 |
| `scale(x, y)` | 배율 (1이 원래 크기)<br>`transform: scale(2, 2);` | 크기 조정 |
| `rotate(각도)` | `deg`<br>`transform: rotate(270deg);` | 회전 |
| `skew(각도)` | `deg`<br>`transform: skew(30deg);` | 기울이기 |

<br>

<span style="color:gray">여러 변형은 공백으로 나열해 한 번에 적용한다. `transform: translate(850px, 850px) scale(2,2) rotate(270deg);`</span>

<br>

- 예제 코드: [transform](../06_Animation/03Transform.html)

---

### transform 3D

> 원근감(`perspective`)을 주고 X, Y축을 기준으로 회전해 입체감을 만든다. 카드 뒤집기처럼 앞면과 뒷면이 있는 요소에 쓴다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `perspective` | `px`<br>작을수록 왜곡이 크다<br>부모에 지정하면 자식 전체에 적용, `transform: perspective(50px)`로 요소 단위 지정 가능 | 원근감을 주는 시야 거리 |
| `rotateY(각도)` `rotateX(각도)` | `deg`<br>`transform: rotateY(180deg);` | Y축, X축을 기준으로 회전 |
| `transform-style` | **flat:** 기본값<br>**preserve-3d:** 자식 요소의 3D 변형을 유지<br>`transform-style: preserve-3d;` | 자식의 3D 공간 유지 여부 |
| `backface-visibility` | **visible:** 기본값<br>**hidden:** 뒤집혀 뒷면이 보일 때 숨김<br>`backface-visibility: hidden;` | 뒷면 표시 여부 |
| `transform-origin` | `center` `top` `left` `px` `%`<br>`transform-origin: center;` | 변형의 기준점 |

<br>

- 예제 코드: [perspective](../06_Animation/05Transform3D.html)
- 예제 코드: [카드 뒤집기](../06_Animation/06Transform3D.html)

---

### animation

> `@keyframes`로 움직임의 단계를 정의하고, `animation` 속성으로 요소에 적용한다. transition이 두 상태 사이를 전환한다면 animation은 여러 단계를 자동으로 반복 실행할 수 있다.

<br>

| **속성** | **포함되는 값** | **설명** |
| --- | --- | --- |
| `@keyframes 이름` | `from` `to` 또는 `0%` ~ `100%`<br>`@keyframes moving { from {left: 0;} to {left: 100px;} }` | 움직임의 단계를 정의 |
| `animation-name` | `@keyframes` 이름<br>`animation-name: moving;` | 적용할 keyframes |
| `animation-duration` | `s` `ms`<br>`animation-duration: 5s;` | 한 번 실행하는 시간 |
| `animation-iteration-count` | 숫자<br>**infinite:** 무한 반복<br>`animation-iteration-count: infinite;` | 반복 횟수 |
| `animation-direction` | **normal:** 기본값. 매번 처음부터 실행<br>**alternate:** 갈 때와 올 때를 번갈아 실행<br>**reverse:** 거꾸로 실행<br>`animation-direction: alternate;` | 진행 방향 |
| `animation-timing-function` | 아래 속도 곡선 표 참고<br>`animation-timing-function: linear;` | 속도 곡선 |
| `animation-play-state` | **running:** 기본값<br>**paused:** 일시 정지<br>`animation-play-state: paused;` | 실행, 정지 |

<br>

**속도 곡선**

| **값** | **설명** |
| --- | --- |
| `ease` | 느리게 시작해 빨라지다가 느리게 끝난다. 기본값 |
| `ease-in` | 느리게 시작해 점점 빨라진다 |
| `ease-out` | 빠르게 시작해 점점 느려진다 |
| `ease-in-out` | 느리게 시작해 느리게 끝난다. ease보다 가운데가 완만하다 |
| `linear` | 처음부터 끝까지 일정한 속도 |

<br>

- 예제 코드: [animation 기본](../06_Animation/07Animation.html)
- 예제 코드: [여러 요소](../06_Animation/08Animation.html)
- 예제 코드: [keyframes 퍼센트](../06_Animation/09Animation.html)
- 예제 코드: [속도 곡선](../06_Animation/10Animation.html)

---

### 슬라이더와 메뉴 만들기

> transition, transform, animation에 앞에서 배운 선택자(`:checked`, `~`)를 조합해 자바스크립트 없이 움직이는 요소를 만든다.

<br>

| **방식** | **구성** |
| --- | --- |
| 자동 이동 슬라이더 | 목록 전체를 감싸 `overflow: hidden` 영역 안에서 `@keyframes`로 `left`를 이동하고, `hover` 시 `animation-play-state: paused` |
| 버튼 슬라이더 | `radio`는 숨기고 `label`을 버튼으로 사용. `:checked~.slider-wrapper`로 선택된 버튼에 따라 `left` 값을 바꾼다 |
| 햄버거 메뉴 | `checkbox`는 숨기고 `label` 안의 `span` 3개로 선을 그린다. `:checked`일 때 선을 `rotate`, `translate`해 X로 바꾸고 `~`로 메뉴 영역을 표시한다 |

<br>

- 예제 코드: [사이트 메뉴](../06_Animation/04Sitemenu.html)
- 예제 코드: [자동 슬라이더](../06_Animation/12Slider.html)
- 예제 코드: [버튼 슬라이더](../06_Animation/13Slider.html)
- 예제 코드: [슬라이드 3장](../06_Animation/14Slider.html)
- 예제 코드: [쇼핑몰 메인 연습](../06_Animation/11prtc.html)

<br>

---

<br>

**Animation 요약**

<aside>

> transition: 두 상태 사이를 부드럽게 전환 <br>
transform: translate, scale, rotate, skew로 모양 변형 (3D는 perspective와 rotateY) <br>
animation: @keyframes로 단계를 정의하고 animation-* 속성으로 반복 실행

</aside>

<br>

### Link
[MDN CSS 애니메이션](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_animations)
