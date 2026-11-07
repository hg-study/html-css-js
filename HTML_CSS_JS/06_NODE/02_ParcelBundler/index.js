// =======================================
// Parcel과 lodash
// Parcel로 번들링한 index.js에서 import로 lodash를 사용
// =======================================

console.log('HELLO WORLD!');

// --------------------------------
// LODASH
// --------------------------------

// import 패키지 from '이름' : ES 모듈 방식으로 설치한 패키지를 불러온다. Parcel이 번들링해 브라우저에서 사용 가능
import _ from 'lodash'

console.log(_);

// _.join(배열, 구분자) : 배열의 요소를 구분자로 이어 붙인 문자열 반환 (Hello|Parcel)
const result = _.join(['Hello','Parcel',],'|')
console.log(result)
