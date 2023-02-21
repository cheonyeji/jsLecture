// 문자열 String : 문자형 데이터를 객체로 취급!

// 문자열 객체 생성
let str1 = "hello";
str1 = new String("hello world world");

console.log(str1.charAt(1)); // 인덱스 번호에 해당하는 문자 반환
console.log(str1[1]); // 마치 배열처럼 처리 가능

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
// 없으면 -1 반환
console.log(str1.indexOf("world"));

// 오른쪽에서부터 일치하는 문자를 찾아~
console.log(str1.lastIndexOf("world"));

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 찾은 문자 반환
// 없으면 null 반환
console.log(str1.match("@orld"));

// 왼쪽부터 원하는 문자를 찾아, 제일 먼저 찾은 문자를 치환
// 원본을 건드리지 X 새로운 문자열 반환!!!
console.log(str1.replace("world", "javascript"));

// indexOf() : 문자열과 일치하는 데이터
// vs
// search() : 문자열, 정규표현식(문자 패턴)과 일치하는 데이터
// 특정 문자를 포함하는 여부 체크 -> (ex. 비밀번호에 허용되는 특수문자 시리즈)
console.log(str1.search("world"));

// slice(a[, b]) : a개의 문자를 자르고, b번째 이후에 문자를 자른 후 남은 문자 반환
// 원본건드리지X 새로운 문자열 반환
// -1은 뒤에서부터 첫번째 글자
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31)); // "the lazy dog."
console.log(str.slice(4, 19)); // "quick brown fox"
console.log(str.slice(-4)); // "dog."
console.log(str.slice(-9, -5)); // "lazy"

// substring(a[, b]) : 문자열 a~b까지를 반환 (b번째 인덱스는 포함되지 않음!)
// 원본 건드리지X 새로운 문자열 반환
// 만약 b를 입력하지 않는 경우, 끝까지~
console.log(str.substring(4, 9));

// 구분 문자를 기준으로 문자 데이터를 쪼개서 새로운 배열에 저장 후 반환
// 원본 건드리지 X 새로운 배열 반환
const result = str.split(" ");
console.log(result);

// 문자열 -> 전부 대문자
// 원본 건드리지 X 새로운 문자열 반환
console.log(str1.toUpperCase());

// 문자열 -> 전부 소문자
// 원본 건드리지 X 새로운 문자열 반환
console.log(str1.toLowerCase());

// 글자 수 속성(필드)
console.log(str1.length);

console.log(str1.concat(" 2023!"));
console.log(str1 + " 2023!");

// trim() : 문자열의 양쪽 공백을 제거
// trimEnd() : 오른쪽 공백만 제거
// trimStart() : 왼쪽 공백만 제거
const str2 = "       hello      ";
console.log(str2.trim());

// 2. 브라우저 객체 모델 (BOM)
// window, screen, location, history, navigator ....
// window.location.href = "https://www.naver.com";

// 3. 문서 객체 모델 (DOM) : HTML 문서 구조
