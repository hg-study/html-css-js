# Selector

### 기본 선택자

> 선택자는 스타일을 적용할 HTML 요소를 고르는 규칙이다. 중괄호 앞에 쓰고, 선택된 요소에 중괄호 안의 스타일이 적용된다.

<br>

| **선택자** | **형식** | **설명** |
| --- | --- | --- |
| 전체 | `*` | 문서의 모든 요소를 선택한다<br>`* { box-sizing: border-box; }` |
| 요소 | `div` | 태그 이름이 같은 요소를 모두 선택한다<br>`div { margin: 10px; }` |
| id | `#id_01` | id가 같은 요소 하나를 선택한다. 문서에서 id는 유일해야 한다<br>`#id_01 { background-color: red; }` |
| class | `.cl` | class가 같은 요소를 모두 선택한다. 서로 다른 태그에도 쓸 수 있다<br>`.cl { background-color: royalblue; }` |
| 그룹 | `A, B` | 여러 선택자에 같은 스타일을 한 번에 적용한다<br>`#id_01, .cl { border-radius: 50px; }` |

<br>

- 예제 코드: [기본 선택자](../03_Selector/01BasicSelector.html)

---

### 결합자

> 선택자 두 개를 연결해 요소 사이의 관계(부모와 자식, 형제)로 대상을 좁힌다.

<br>

| **선택자** | **형식** | **설명** |
| --- | --- | --- |
| 자식 | `A > B` | A의 바로 아래 단계 자식 B만 선택한다. 손자 이하는 선택하지 않는다<br>`.parent>div { border: 1px solid; }` |
| 자손 | `A B` | A 안에 포함된 모든 하위 B를 단계와 상관없이 선택한다<br>`.parent p { color: orange; }` |
| 일반 형제 | `A ~ B` | A 뒤에 오는 같은 부모의 형제 B를 모두 선택한다<br>`.c2~p { background-color: orange; }` |
| 인접 형제 | `A + B` | A 바로 다음에 오는 형제 B 하나만 선택한다<br>`.c2+p { width: 200px; }` |

<br>

<span style="color:gray">레이아웃은 `.wrapper>header>nav`처럼 자식 선택자를 이어 써서 영역별로 선택하면 다른 영역과 스타일이 섞이지 않는다.</span>

<br>

- 예제 코드: [자식, 자손 선택자](../03_Selector/02ChildSelector.html)
- 예제 코드: [레이아웃 선택자 구조](../03_Selector/03LayoutSelector.html)
- 예제 코드: [형제 선택자](../03_Selector/04SiblingSelector.html)
