# Leaflet

- [Leaflet](#leaflet)
- [배경지도 타일 변경](#배경지도-타일-변경)
- [마커와 팝업](#마커와-팝업)
- [역지오코딩](#역지오코딩)
- [마커 클러스터링](#마커-클러스터링)

<br>

---

### Leaflet

> 오픈소스 지도 라이브러리다. 지도 영역(`div`)을 만들고 `L.map`으로 지도를 생성한 뒤, 배경지도 타일을 `L.tileLayer`로 추가한다. 이 실습은 Leaflet 1.3.3 기준이다.

<br>

```javascript
var map = L.map('map').setView([35.8714, 128.6014], 13);   // 중심 좌표(위도, 경도), 줌 레벨
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
```

<br>

- 예제 코드: [Leaflet 기본 지도](../08_Leaflet/01_Basic/01Basic.html)

---

### 배경지도 타일 변경

> 배경지도는 타일 이미지 주소로 정한다. 한국 지도(다음, 티맵, 구글)는 좌표계가 달라 `Leaflet.KoreanTmsProviders` 플러그인으로 `crs`를 지정한다.

<br>

| **지도** | **설정** |
| --- | --- |
| OSM, CartoDB | `L.tileLayer(주소)` |
| 다음 | `crs: L.Proj.CRS.Daum`, `L.tileLayer.koreaProvider('DaumMap.Street')` |
| 구글 | `crs: L.Proj.CRS.Google`, `koreaProvider('GoogleMap.Street')` |
| 티맵 | `crs: L.Proj.CRS.TMap`, `koreaProvider('TMap.Street')` |

<br>

- 예제 코드: [OSM 지도](../08_Leaflet/02_Tile/01OsmMap.html)
- 예제 코드: [구글 지도](../08_Leaflet/02_Tile/02GoogleMap.html)
- 예제 코드: [다음 지도](../08_Leaflet/02_Tile/03DaumMap.html)
- 예제 코드: [티맵](../08_Leaflet/02_Tile/04TMap.html)
- 예제 코드: [CSV 맛집 지도](../08_Leaflet/02_Tile/05TasteSpot.html)
- 예제 코드: [뉴욕 갤러리 지도, Qwen](../08_Leaflet/02_Tile/06NycGalleriesQwen.html)
- 예제 코드: [뉴욕 갤러리 지도, Perplexity](../08_Leaflet/02_Tile/07NycGalleriesPerplexity.html)
- 예제 코드: [서울 야경 명소 대시보드 1](../08_Leaflet/02_Tile/08SeoulNightView2.html)
- 예제 코드: [서울 야경 명소 대시보드 2](../08_Leaflet/02_Tile/09SeoulNightView3.html)

---

### 마커와 팝업

> `L.marker([위도, 경도])`로 마커를 만들어 지도에 추가하고, `bindPopup`으로 클릭하면 열리는 말풍선을 붙인다. `L.icon`으로 마커 이미지를 바꾼다.

<br>

| **구분** | **설명** |
| --- | --- |
| `L.icon({iconUrl, iconSize, iconAnchor})` | 커스텀 아이콘. `iconAnchor`는 아이콘에서 좌표에 닿는 지점 |
| `marker.on('이벤트', 함수)` | `mouseover`, `mouseout`, `click`, `contextmenu` 이벤트 처리 |
| `openPopup()`, `closePopup()` | 팝업 열기, 닫기 |
| `setLatLng()`, `setOpacity()` | 위치, 투명도 변경. 우클릭으로 마커가 마우스를 따라다니게 만드는 데 사용 |

<br>

- 예제 코드: [마커 추가](../08_Leaflet/03_Marker/index.html)

---

### 역지오코딩

> 지도를 클릭한 좌표로 주소를 조회하는 것을 역지오코딩이라 한다. Nominatim API에 `fetch`로 요청하고, 응답 JSON의 `display_name`을 팝업에 표시한다.

<br>

- 예제 코드: [지도 우클릭으로 주소 조회](../08_Leaflet/04_Geocoder/index.html)

---

### 마커 클러스터링

> 가까운 마커를 하나의 원으로 묶어 표시한다. `leaflet.markercluster` 플러그인의 `L.markerClusterGroup`에 마커를 추가한 뒤 그룹을 지도에 올린다. `maxClusterRadius`는 묶는 반경(px)이다.

<br>

- 예제 코드: [마커 클러스터링](../08_Leaflet/05_Cluster/index.html)

<br>

---

<br>

**Leaflet 요약**

<aside>

> 지도: L.map().setView() + L.tileLayer().addTo() <br>
한국 지도 타일: KoreanTmsProviders 플러그인과 crs 지정 <br>
마커: L.marker, bindPopup, L.icon, on(이벤트) <br>
역지오코딩: Nominatim + fetch, 클러스터링: L.markerClusterGroup

</aside>

<br>

### Link
[Leaflet 공식 사이트](https://leafletjs.com/)
