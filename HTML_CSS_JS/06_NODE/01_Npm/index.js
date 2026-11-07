// =======================================
// lodash 실습
// npm으로 설치한 lodash를 불러와 배열을 섞고 node로 실행
// =======================================

// require('모듈') : 설치한 패키지를 불러온다(CommonJS). lodash는 관례로 _ 에 담아 사용
const _ = require("lodash");

const arr = [1, 2, 3, 4, 5];

// _.shuffle(배열) : 배열의 순서를 무작위로 섞은 새 배열을 반환
const shuffled = _.shuffle(arr);
console.log("Shuffled:", shuffled);
