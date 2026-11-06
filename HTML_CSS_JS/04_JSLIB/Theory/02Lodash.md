# Lodash

### Lodash

> 배열, 객체, 함수를 다루는 유틸리티 함수 모음 라이브러리다. CDN을 불러오면 전역 객체 `_`로 사용한다.

<br>

| **함수** | **설명** |
| --- | --- |
| `_.throttle(함수, 시간)` | 지정한 시간(ms) 동안 한 번만 함수를 실행. 스크롤처럼 자주 발생하는 이벤트의 실행 횟수를 줄인다 |
| `_.debounce(함수, 시간)` | 마지막 호출 뒤 지정한 시간이 지나야 실행. 입력이 멈춘 뒤 검색할 때 사용 |

<br>

```javascript
// 스크롤 이벤트를 0.1초에 한 번만 처리
window.addEventListener('scroll', _.throttle(() => {
    console.log(window.scrollY);
}, 100));
```

<br>

- 예제 코드: [throttle](../02_Lodash/01Throttle.html)

<br>

---

<br>

**Lodash 요약**

<aside>

> 전역 객체 `_` <br>
throttle: 일정 시간에 한 번만 실행, debounce: 호출이 멈춘 뒤 실행

</aside>

<br>

### Link
[Lodash 공식 문서](https://lodash.com/docs)
