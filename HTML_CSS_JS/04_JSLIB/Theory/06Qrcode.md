# Qrcode

### QR 코드

> `qrcode-generator` 라이브러리로 문자열을 QR 코드로 만든다. 데이터를 넣고 `make()`로 만든 뒤 SVG 태그로 화면에 표시한다.

<br>

| **함수** | **설명** |
| --- | --- |
| `qrcode(version, level)` | QR 객체 생성. version `0`은 자동, level은 오류 정정 수준(`L` 낮음, `M`, `Q`, `H` 높음) |
| `addData(문자열)` | QR 코드에 담을 데이터 |
| `make()` | QR 코드 생성 |
| `createSvgTag({scalable: true})` | 크기 조절이 가능한 SVG 태그 문자열 반환 |

<br>

- 예제 코드: [QR 코드 생성](../06_Qrcode/01Qrcode.html)

<br>

---

<br>

**Qrcode 요약**

<aside>

> qrcode(0, 'L') 생성 후 addData, make, createSvgTag <br>
SVG를 요소에 넣어 표시하고 click 이벤트로 주소 이동

</aside>

<br>

### Link
[qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator)
