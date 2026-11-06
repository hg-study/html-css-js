# ScrollMagic

### ScrollMagic

> 스크롤 위치에 따라 동작을 실행하는 라이브러리다. 감시할 요소와 발동 시점을 `Scene`으로 정하고, `Controller`에 등록하면 스크롤 상태를 감시한다.

<br>

| **구성** | **설명** |
| --- | --- |
| `ScrollMagic.Scene({})` | 감시 옵션. `triggerElement`는 감시할 요소, `triggerHook`은 화면에서 발동할 위치(0 최상단, 0.5 중앙, 1 최하단) |
| `setClassToggle(요소, 'class')` | 발동하면 class를 추가하고 벗어나면 제거. 애니메이션은 CSS의 `transition`으로 만든다 |
| `addTo(new ScrollMagic.Controller())` | Scene을 Controller에 등록. Controller는 스크롤 상황을 감시하는 제어부 |

<br>

```javascript
new ScrollMagic
    .Scene({ triggerElement: spyedEl, triggerHook: 0.5 })
    .setClassToggle(ballEl, 'move')
    .addTo(new ScrollMagic.Controller());
```

<br>

- 예제 코드: [클래스 토글](../03_ScrollMagic/01ClassToggle.html)
- 예제 코드: [여러 요소 감시](../03_ScrollMagic/02MultiScene.html)

<br>

---

<br>

**ScrollMagic 요약**

<aside>

> Scene: 감시 요소와 발동 위치 <br>
setClassToggle: 발동하면 class 추가, 벗어나면 제거 <br>
Controller: 스크롤 감시

</aside>

<br>

### Link
[ScrollMagic 공식 사이트](https://scrollmagic.io/)
