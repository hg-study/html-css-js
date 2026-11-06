# Swiper

### Swiper

> 터치와 마우스로 넘기는 슬라이더를 만드는 라이브러리다. CDN으로 CSS와 JS를 불러온 뒤 `new Swiper('선택자', {옵션})`으로 만든다. HTML은 컨테이너 `.swiper` 안에 `.swiper-wrapper`, 그 안에 `.swiper-slide`를 두는 구조가 필수다.

<br>

```html
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">슬라이드 1</div>
        <div class="swiper-slide">슬라이드 2</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
```

<br>

| **옵션** | **설명** |
| --- | --- |
| `direction` | 슬라이드 방향. `horizontal`(수평), `vertical`(수직) |
| `autoplay` | 자동 재생. `delay`는 넘어가는 간격(ms) |
| `loop` | 마지막 슬라이드 다음에 첫 슬라이드로 이어진다 |
| `effect` | 전환 효과. `slide`(기본), `fade`, `cube`, `coverflow`, `flip` |
| `mousewheel` | 마우스 휠로 슬라이드 이동 |
| `pagination` | 현재 위치 표시. `type`은 `bullets`(기본), `fraction`, `progressbar`, `clickable`은 클릭 이동 |
| `navigation` | 이전(`prevEl`), 다음(`nextEl`) 버튼 요소 지정 |
| `slidesPerView` | 한 화면에 보이는 슬라이드 수 |
| `centeredSlides` | 활성 슬라이드를 가운데 정렬 |

<br>

**제어 메서드**

| **메서드** | **설명** |
| --- | --- |
| `swiper.autoplay.stop()`, `swiper.autoplay.start()` | 자동 재생 정지, 시작 |
| `swiper.slideToLoop(index)` | `loop` 모드에서 해당 슬라이드로 이동 |

<br>

<span style="color:brown">`loop` 모드에서는 Swiper가 슬라이드를 복제하므로 `data-swiper-slide-index`가 실제 번호다. 이동은 `slideTo`가 아니라 `slideToLoop`를 사용한다.</span>

<br>

- 예제 코드: [배너 슬라이더](../01_Swiper/01BasicSwiper.html)
- 예제 코드: [세로 슬라이더](../01_Swiper/02VerticalSwiper.html)
- 예제 코드: [멀티 슬라이더](../01_Swiper/03MultiSlider.html)

<br>

---

<br>

**Swiper 요약**

<aside>

> 구조: .swiper > .swiper-wrapper > .swiper-slide <br>
옵션: direction, autoplay, loop, effect, pagination, navigation, slidesPerView <br>
제어: autoplay.stop, autoplay.start, slideToLoop

</aside>

<br>

### Link
[Swiper 공식 문서](https://swiperjs.com/swiper-api)
