# Chart

### Chart.js

> 데이터를 `canvas`에 차트로 그려주는 라이브러리다. `new Chart(캔버스, {type, data, options})`로 만든다.

<br>

| **구성** | **설명** |
| --- | --- |
| `type` | 차트 종류. `bar`(막대), `line`(선), `pie`(파이), `doughnut`(도넛), `radar`(레이더), `scatter`(산점도) |
| `data.labels` | 축에 표시할 이름 배열 |
| `data.datasets` | 데이터 묶음 배열. `label`, `data`, `backgroundColor`, `borderColor`, `borderWidth` 지정 |
| `options` | 축(`scales`), 제목과 범례와 툴팁(`plugins`), 애니메이션(`animation`), 클릭(`onClick`) 설정 |

<br>

```javascript
new Chart(ctx, {
    type: 'bar',
    data: { labels: ['A', 'B'], datasets: [{ label: '건수', data: [3, 5] }] },
    options: { scales: { y: { beginAtZero: true } } }
});
```

<br>

- 예제 코드: [막대 차트](../05_Chart/01BarChart.html)
- 예제 코드: [차트 종류](../05_Chart/02ChartTypes.html)

---

### 공공데이터 집계

> 공공데이터(JSON)를 `reduce`로 원하는 기준으로 집계한 뒤 `Object.keys`, `Object.values`로 차트의 labels와 data에 넣는다.

<br>

| **예제** | **설명** |
| --- | --- |
| 중구 맛집 | 음식 종류(`FD_CS`)별 음식점 수를 집계해 막대 차트로 표시 |
| 범죄 통계 | 구조 분해로 대분류와 중분류를 꺼내고 나머지(지역별 건수)를 합산해 대분류별 합계 계산 |

<br>

- 예제 코드: [음식 종류별 맛집 차트](../05_Chart/03RestaurantChart.html)
- 예제 코드: [범죄 대분류별 합계](../05_Chart/04CrimeSum.html)

<br>

---

<br>

**Chart 요약**

<aside>

> Chart.js: new Chart(캔버스, {type, data, options}) <br>
type: bar, line, pie, doughnut, radar, scatter <br>
데이터 집계: reduce로 기준별 합계를 만들고 Object.keys, values로 차트에 전달

</aside>

<br>

### Link
[Chart.js 공식 문서](https://www.chartjs.org/docs/latest/)
