## HTML_CSS_JS

### 목차

- [01_HTML](#01_html)
    - [기본 이론 & 구조](#기본-이론--구조)
    - [Block · Inline 요소 & List](#block--inline-요소--list)
    - [Entity & Emmet](#entity--emmet)
    - [Table](#table)
    - [A Tag](#a-tag)
    - [Img & Video](#img--video)
    - [Form](#form)
- [02_CSS](#02_css)
    - [CSS 기본](#css-기본)
    - [색상 & 글자](#색상--글자)
    - [박스 모델](#박스-모델)
    - [선택자](#선택자)
    - [Position](#position)
    - [레이아웃](#레이아웃)
    - [애니메이션](#애니메이션)
    - [미디어 쿼리](#미디어-쿼리)
    - [Bootstrap](#bootstrap)
- [03_JS](#03_js)
    - [JS 기본](#js-기본)
    - [자료형](#자료형)
    - [객체](#객체)
    - [배열](#배열)
    - [연산자](#연산자)
    - [흐름 제어문](#흐름-제어문)
    - [함수](#함수)
    - [이벤트](#이벤트)
    - [노드 CRUD](#노드-crud)
    - [동기와 비동기](#동기와-비동기)
- [04_JSLIB](#04_jslib)
    - [Swiper](#swiper)
    - [Lodash](#lodash)
    - [ScrollMagic](#scrollmagic)
    - [GSAP](#gsap)
    - [Chart.js](#chartjs)
    - [QR 코드](#qr-코드)
    - [Canvas](#canvas)

<br>

---

### 01_HTML
> HTML 이론 & 실습

[사용 Tag 전체 정리](./HTML_CSS_JS/01_HTML/Theory/02Tag.md)<br>
[사용 Css 전체 정리](#02_css)

#### 기본 이론 & 구조
- [HTML 정의 & 기본 설명 이론](./HTML_CSS_JS/01_HTML/Theory/01BasicTheory.md)
    - [HTML 기본 구조](./HTML_CSS_JS/01_HTML/01Basic.html)

#### Block · Inline 요소 & List
- [Tag 이론](./HTML_CSS_JS/01_HTML/Theory/02Tag.md)
    - [Block · Inline 요소 & Box Model](./HTML_CSS_JS/01_HTML/02Basic.html)
    - [리스트: ul, ol, li, 중첩](./HTML_CSS_JS/01_HTML/03List.html)
    - [리스트 prtc](./HTML_CSS_JS/01_HTML/04Listprtc.html)

#### Entity & Emmet
- [Entity&Emmet 이론](./HTML_CSS_JS/01_HTML/Theory/03Entity&Emmet.md)
    - [엔티티 Entity](./HTML_CSS_JS/01_HTML/05Entity.html)
    - [단축 문법 Emmet](./HTML_CSS_JS/01_HTML/06Emmet.html)

#### Table
- [Table 이론](./HTML_CSS_JS/01_HTML/Theory/04Table.md)
    - [Table 기본&rowspan 병합](./HTML_CSS_JS/01_HTML/07Table.html)
    - [Table prtc](./HTML_CSS_JS/01_HTML/08Tableprtc.html)
    - [시맨틱 Table](./HTML_CSS_JS/01_HTML/09Table.html)

#### A Tag
- [ATag 이론](./HTML_CSS_JS/01_HTML/Theory/05ATag.md)
    - [ATag 스타일 버튼, iframe 연동](./HTML_CSS_JS/01_HTML/10ATag.html)
    - [ATag 페이지 앵커 링크 & 고정 nev](./HTML_CSS_JS/01_HTML/11ATag.html)

#### Img & Video
- [Img&Video 이론](./HTML_CSS_JS/01_HTML/Theory/06Img&Video.md)
    - [Img 삽입](./HTML_CSS_JS/01_HTML/12Img.html)
    - [Video 자동재생, 그라데이션 오버레이](./HTML_CSS_JS/01_HTML/13Video.html)
    - [외부 Video 삽입](./HTML_CSS_JS/01_HTML/14Video.html)

#### Form
> 이론은 Tag와 Css정리본에 추가

- [회원가입 폼 페이지](./HTML_CSS_JS/01_HTML/15Form.html)
    - [회원가입 폼 Css 추가](./HTML_CSS_JS/01_HTML/16Form_add_css.html)
- [회원가입 폼 페이지2](./HTML_CSS_JS/01_HTML/17Form_only_html.html)
    - [회원가입 폼 페이지2 Css 추가](./HTML_CSS_JS/01_HTML/19Form_only_html_css.html)
    - [회원가입 폼 페이지2 bs5 추가](./HTML_CSS_JS/01_HTML/20Form_only_html_bs.html)
    - [회원가입 폼 페이지2 유효성 검사 준비](./HTML_CSS_JS/01_HTML/22Form_Validation.html)
- [네이버 회원가입 폼 실습](./HTML_CSS_JS/01_HTML/18Make_Naver_Form_only_html.html)
- [회원가입 폼 실습](./HTML_CSS_JS/01_HTML/21My_form.html)

<br>

---

### 02_CSS
> CSS 이론 & 실습

#### CSS 기본
- [CssBasic 이론](./HTML_CSS_JS/02_CSS/Theory/01CssBasic.md)
    - [스타일 우선순위](./HTML_CSS_JS/02_CSS/01_Basic/02StylePriority.html)
    - [길이 단위](./HTML_CSS_JS/02_CSS/01_Basic/05단위.html)
    - [글자 크기 단위](./HTML_CSS_JS/02_CSS/01_Basic/08FontSize.html)
    - [글꼴 적용](./HTML_CSS_JS/02_CSS/01_Basic/09FontFamily.html)

#### 색상 & 글자
- [ColorText 이론](./HTML_CSS_JS/02_CSS/Theory/02ColorText.md)
    - [색상 표기](./HTML_CSS_JS/02_CSS/01_Basic/04Color.html)
    - [배경 이미지](./HTML_CSS_JS/02_CSS/01_Basic/06Background.html)
    - [글자 기본 속성](./HTML_CSS_JS/02_CSS/01_Basic/07TextBasic.html)

#### 박스 모델
- [BoxModel 이론](./HTML_CSS_JS/02_CSS/Theory/03BoxModel.md)
    - [Block vs Inline](./HTML_CSS_JS/02_CSS/01_Basic/01Block_vs_Inline.html)
    - [너비 · 높이](./HTML_CSS_JS/02_CSS/01_Basic/03WidthHeight.html)
    - [Margin](./HTML_CSS_JS/02_CSS/02_Box/01Margin.html)
    - [Padding](./HTML_CSS_JS/02_CSS/02_Box/02Padding.html)
    - [Border](./HTML_CSS_JS/02_CSS/02_Box/03Border.html)
    - [BoxSizing](./HTML_CSS_JS/02_CSS/02_Box/04BoxSizing.html)
    - [Overflow](./HTML_CSS_JS/02_CSS/02_Box/05Overflow.html)

#### 선택자
- [Selector 이론](./HTML_CSS_JS/02_CSS/Theory/04Selector.md)
    - [기본 선택자](./HTML_CSS_JS/02_CSS/03_Selector/01BasicSelector.html)
    - [자식, 자손 선택자](./HTML_CSS_JS/02_CSS/03_Selector/02ChildSelector.html)
    - [레이아웃 선택자 구조](./HTML_CSS_JS/02_CSS/03_Selector/03LayoutSelector.html)
    - [형제 선택자](./HTML_CSS_JS/02_CSS/03_Selector/04SiblingSelector.html)
    - [체크박스 커스텀](./HTML_CSS_JS/02_CSS/03_Selector/05Checkbox.html)
    - [체크박스 커스텀 복습](./HTML_CSS_JS/02_CSS/03_Selector/06Checkbox2.html)
    - [링크 상태 가상 클래스](./HTML_CSS_JS/02_CSS/03_Selector/07LinkState.html)
    - [가상 요소](./HTML_CSS_JS/02_CSS/03_Selector/08PseudoElement.html)
    - [구조 가상 클래스](./HTML_CSS_JS/02_CSS/03_Selector/09NthChild.html)

#### Position
- [Position 이론](./HTML_CSS_JS/02_CSS/Theory/05Position.md)
    - [relative, absolute 비교](./HTML_CSS_JS/02_CSS/04_Position/01Relative.html)
    - [absolute 기준 요소](./HTML_CSS_JS/02_CSS/04_Position/02Absolute.html)
    - [GNB 기본 구조](./HTML_CSS_JS/02_CSS/04_Position/03Gnb_origin.html)
    - [서브 메뉴 숨김과 표시](./HTML_CSS_JS/02_CSS/04_Position/04Gnb_01.html)
    - [전체 서브 메뉴 펼침](./HTML_CSS_JS/02_CSS/04_Position/05Gnb_02.html)
    - [호버 시 서브 메뉴 박스 연습](./HTML_CSS_JS/02_CSS/04_Position/05Gnb_prtc.html)
    - [세로 메뉴](./HTML_CSS_JS/02_CSS/04_Position/06Gnb_03.html)
    - [세로 메뉴 기준 위치 변경](./HTML_CSS_JS/02_CSS/04_Position/06Gnb_04.html)
    - [3단 메뉴](./HTML_CSS_JS/02_CSS/04_Position/07Gnb_05.html)
    - [3단 메뉴 연습](./HTML_CSS_JS/02_CSS/04_Position/07Gnb_05prtc.html)
    - [fixed 고정 요소](./HTML_CSS_JS/02_CSS/04_Position/08Fixed.html)
    - [relative, absolute, fixed, sticky 비교](./HTML_CSS_JS/02_CSS/04_Position/09Sticky.html)
    - [z-index](./HTML_CSS_JS/02_CSS/04_Position/10Zindex.html)

#### 레이아웃
- [Layout 이론](./HTML_CSS_JS/02_CSS/Theory/06Layout.md)
    - [Flex 방향, 정렬, 줄바꿈](./HTML_CSS_JS/02_CSS/05_Layout/01Flex.html)
    - [Flex 전체 폭 고정 버전](./HTML_CSS_JS/02_CSS/05_Layout/01Flex+.html)
    - [Flex 자식 속성](./HTML_CSS_JS/02_CSS/05_Layout/02Flex.html)
    - [Flex 레이아웃 연습](./HTML_CSS_JS/02_CSS/05_Layout/03Layout_prtc.html)
    - [Flex 레이아웃 연습 답](./HTML_CSS_JS/02_CSS/05_Layout/04%5B답%5DLayout.html)
    - [Grid 기본, 영역, 반응형, 정렬](./HTML_CSS_JS/02_CSS/05_Layout/05Grid.html)
    - [Grid 연습](./HTML_CSS_JS/02_CSS/05_Layout/05Grid_연습.html)
    - [KREAM 레이아웃](./HTML_CSS_JS/02_CSS/05_Layout/06KREAM_LAYOUT.html)

#### 애니메이션
- [Animation 이론](./HTML_CSS_JS/02_CSS/Theory/07Animation.md)
    - [transition 기본](./HTML_CSS_JS/02_CSS/06_Animation/01Transition.html)
    - [transition 활용](./HTML_CSS_JS/02_CSS/06_Animation/02Transition.html)
    - [transform](./HTML_CSS_JS/02_CSS/06_Animation/03Transform.html)
    - [사이트 메뉴](./HTML_CSS_JS/02_CSS/06_Animation/04Sitemenu.html)
    - [transform 3D, perspective](./HTML_CSS_JS/02_CSS/06_Animation/05Transform3D.html)
    - [카드 뒤집기](./HTML_CSS_JS/02_CSS/06_Animation/06Transform3D.html)
    - [animation 기본](./HTML_CSS_JS/02_CSS/06_Animation/07Animation.html)
    - [여러 요소 animation](./HTML_CSS_JS/02_CSS/06_Animation/08Animation.html)
    - [keyframes 퍼센트](./HTML_CSS_JS/02_CSS/06_Animation/09Animation.html)
    - [속도 곡선](./HTML_CSS_JS/02_CSS/06_Animation/10Animation.html)
    - [쇼핑몰 메인 연습](./HTML_CSS_JS/02_CSS/06_Animation/11prtc.html)
    - [자동 슬라이더](./HTML_CSS_JS/02_CSS/06_Animation/12Slider.html)
    - [버튼 슬라이더](./HTML_CSS_JS/02_CSS/06_Animation/13Slider.html)
    - [슬라이드 3장](./HTML_CSS_JS/02_CSS/06_Animation/14Slider.html)

#### 미디어 쿼리
- [MediaQuery 이론](./HTML_CSS_JS/02_CSS/Theory/08MediaQuery.md)
    - [미디어 쿼리 기본](./HTML_CSS_JS/02_CSS/07_MQ/01MediaQuery.html)
    - [link media 속성](./HTML_CSS_JS/02_CSS/07_MQ/02LinkMedia.html)

#### Bootstrap
- [Bootstrap 이론](./HTML_CSS_JS/02_CSS/Theory/09Bootstrap.md)
    - [회원가입 폼 페이지2 bs5 추가](./HTML_CSS_JS/01_HTML/20Form_only_html_bs.html)

---

### 03_JS
> JavaScript 이론 & 실습

#### JS 기본
- [JsBasic 이론](./HTML_CSS_JS/03_JS/Theory/01JsBasic.md)
    - [HTML에 JS 직접 삽입](./HTML_CSS_JS/03_JS/01_Basic/01InlineEvent.html)
    - [document.write](./HTML_CSS_JS/03_JS/01_Basic/02DocumentWrite.html)
    - [getElementById, innerHTML](./HTML_CSS_JS/03_JS/01_Basic/03InnerHTML.html)

#### 자료형
- [Type 이론](./HTML_CSS_JS/03_JS/Theory/02Type.md)
    - [typeof로 자료형 확인](./HTML_CSS_JS/03_JS/01_Basic/04Type.html)
    - [보간법](./HTML_CSS_JS/03_JS/02_Type/01Interpolation.html)

#### 객체
- [Object 이론](./HTML_CSS_JS/03_JS/Theory/03Object.md)
    - [객체 리터럴](./HTML_CSS_JS/03_JS/02_Type/02Object.html)
    - [객체 연습: 점수 계산](./HTML_CSS_JS/03_JS/02_Type/03ObjectPrtc.html)
    - [객체 연습: 점수 계산 답](./HTML_CSS_JS/03_JS/02_Type/03Object답.html)
    - [객체 연습: 카페, 계좌, 도서관, 주차장](./HTML_CSS_JS/03_JS/02_Type/04ObjectPrtc.html)
    - [Object 함수와 prototype](./HTML_CSS_JS/03_JS/02_Type/08Prototype.html)
    - [prototype 상속](./HTML_CSS_JS/03_JS/02_Type/09Prototype2.html)

#### 배열
- [Array 이론](./HTML_CSS_JS/03_JS/Theory/04Array.md)
    - [배열과 배열 함수](./HTML_CSS_JS/03_JS/02_Type/05ArrayObject.html)
    - [공공데이터 filter, map](./HTML_CSS_JS/03_JS/02_Type/06OpenData.html)
    - [주문받기: 분류별 집계](./HTML_CSS_JS/03_JS/02_Type/07OrderPrtc.html)
    - [주문받기: 분류별 집계 답](./HTML_CSS_JS/03_JS/02_Type/07Order답.html)

#### 연산자
- [Operator 이론](./HTML_CSS_JS/03_JS/Theory/05Operator.md)
    - [연산자](./HTML_CSS_JS/03_JS/03_Operator/00Operator.html)

#### 흐름 제어문
- [Control 이론](./HTML_CSS_JS/03_JS/Theory/06Control.md)
    - [분기문 if](./HTML_CSS_JS/03_JS/04_Control/01Branch.html)
    - [분기문 활용: 폼 유효성 검증](./HTML_CSS_JS/03_JS/04_Control/02FormValidation.html)
    - [반복문 while, for](./HTML_CSS_JS/03_JS/04_Control/03Loop.html)

#### 함수
- [Function 이론](./HTML_CSS_JS/03_JS/Theory/07Function.md)
    - [함수 정의와 호출](./HTML_CSS_JS/03_JS/05_Function/01FunctionBasic.html)
    - [호이스팅](./HTML_CSS_JS/03_JS/05_Function/02Hoisting.html)
    - [스코프](./HTML_CSS_JS/03_JS/05_Function/03Scope.html)
    - [클로저](./HTML_CSS_JS/03_JS/05_Function/04Closure.html)
    - [콜백 함수](./HTML_CSS_JS/03_JS/05_Function/05CallBack.html)

#### 이벤트
- [Event 이론](./HTML_CSS_JS/03_JS/Theory/08Event.md)
    - [마우스 이벤트](./HTML_CSS_JS/03_JS/06_Event/01MouseEvent.html)
    - [드래그 앤 드롭](./HTML_CSS_JS/03_JS/06_Event/02DragDrop.html)
    - [드래그 앤 드롭과 이동](./HTML_CSS_JS/03_JS/06_Event/02DragMove.html)
    - [키보드 이벤트](./HTML_CSS_JS/03_JS/06_Event/03KeyEvent.html)
    - [입력 이벤트](./HTML_CSS_JS/03_JS/06_Event/04InputEvent.html)
    - [타자연습](./HTML_CSS_JS/03_JS/06_Event/05TypingPractice.html)
    - [체크 이벤트](./HTML_CSS_JS/03_JS/06_Event/06CheckEvent.html)
    - [표 만들기 연습](./HTML_CSS_JS/03_JS/06_Event/07TablePrtc.html)
    - [표 만들기 답](./HTML_CSS_JS/03_JS/06_Event/07Table답.html)
    - [표 만들기 답 2](./HTML_CSS_JS/03_JS/06_Event/07Table답2.html)
    - [스크롤 이벤트](./HTML_CSS_JS/03_JS/06_Event/08Scroll.html)
    - [창 크기 변경 이벤트](./HTML_CSS_JS/03_JS/06_Event/09Resize.html)
    - [DOMContentLoaded](./HTML_CSS_JS/03_JS/06_Event/10DomLoad.html)

#### 노드 CRUD
- [Node 이론](./HTML_CSS_JS/03_JS/Theory/09Node.md)
    - [노드 탐색](./HTML_CSS_JS/03_JS/07_Node/01Select.html)
    - [form 접근](./HTML_CSS_JS/03_JS/07_Node/02FormAccess.html)
    - [class 추가와 제거](./HTML_CSS_JS/03_JS/07_Node/03ClassEvent.html)
    - [노드 생성과 삭제](./HTML_CSS_JS/03_JS/07_Node/04CreateNode.html)
    - [표 입력, 수정, 삭제 연습](./HTML_CSS_JS/03_JS/07_Node/05TablePrtc.html)
    - [표 입력, 수정, 삭제 답](./HTML_CSS_JS/03_JS/07_Node/05Table답.html)
    - [드래그로 항목 순서 변경](./HTML_CSS_JS/03_JS/07_Node/06DragSort.html)
    - [TO DO 앱](./HTML_CSS_JS/03_JS/09_Todo/index.html)

#### 동기와 비동기
- [Async 이론](./HTML_CSS_JS/03_JS/Theory/10Async.md)
    - [동기와 비동기 정보](./HTML_CSS_JS/03_JS/08_Async/00Info.html)
    - [동기와 비동기 실행 순서](./HTML_CSS_JS/03_JS/08_Async/01SyncAsync.html)
    - [setTimeout](./HTML_CSS_JS/03_JS/08_Async/02SetTimeout.html)
    - [setInterval](./HTML_CSS_JS/03_JS/08_Async/03SetInterval.html)
    - [Promise와 async/await](./HTML_CSS_JS/03_JS/08_Async/04PromiseAsync.html)

---

### 04_JSLIB
> JavaScript 라이브러리 이론 & 실습

#### Swiper
- [Swiper 이론](./HTML_CSS_JS/04_JSLIB/Theory/01Swiper.md)
    - [배너 슬라이더](./HTML_CSS_JS/04_JSLIB/01_Swiper/01BasicSwiper.html)
    - [세로 슬라이더](./HTML_CSS_JS/04_JSLIB/01_Swiper/02VerticalSwiper.html)
    - [멀티 슬라이더](./HTML_CSS_JS/04_JSLIB/01_Swiper/03MultiSlider.html)

#### Lodash
- [Lodash 이론](./HTML_CSS_JS/04_JSLIB/Theory/02Lodash.md)
    - [throttle](./HTML_CSS_JS/04_JSLIB/02_Lodash/01Throttle.html)

#### ScrollMagic
- [ScrollMagic 이론](./HTML_CSS_JS/04_JSLIB/Theory/03ScrollMagic.md)
    - [클래스 토글](./HTML_CSS_JS/04_JSLIB/03_ScrollMagic/01ClassToggle.html)
    - [여러 요소 감시](./HTML_CSS_JS/04_JSLIB/03_ScrollMagic/02MultiScene.html)

#### GSAP
- [GSAP 이론](./HTML_CSS_JS/04_JSLIB/Theory/04Gsap.md)
    - [gsap.to](./HTML_CSS_JS/04_JSLIB/04_Gsap/01GsapTo.html)

#### Chart.js
- [Chart.js 이론](./HTML_CSS_JS/04_JSLIB/Theory/05Chart.md)
    - [막대 차트](./HTML_CSS_JS/04_JSLIB/05_Chart/01BarChart.html)
    - [차트 종류](./HTML_CSS_JS/04_JSLIB/05_Chart/02ChartTypes.html)
    - [음식 종류별 맛집 차트](./HTML_CSS_JS/04_JSLIB/05_Chart/03RestaurantChart.html)
    - [범죄 대분류별 합계](./HTML_CSS_JS/04_JSLIB/05_Chart/04CrimeSum.html)

#### QR 코드
- [QR 코드 이론](./HTML_CSS_JS/04_JSLIB/Theory/06Qrcode.md)
    - [QR 코드 생성](./HTML_CSS_JS/04_JSLIB/06_Qrcode/01Qrcode.html)

#### Canvas
- [Canvas 이론](./HTML_CSS_JS/04_JSLIB/Theory/07Canvas.md)
    - [Canvas 그림판](./HTML_CSS_JS/04_JSLIB/07_Canvas/01Canvas.html)
    - [Canvas 그림판 JS](./HTML_CSS_JS/04_JSLIB/07_Canvas/01Canvas.js)
