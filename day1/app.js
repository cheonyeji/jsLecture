// documnet -> html 문서 파일을 가져옴
document.write("<h4>js를 시작했어요!</h4>");

// 1. js 대소문자 구분
// 날짜 객체
new Date();
// New date(); <- 에러!

// 2. 코드 한 줄 작성 후 세미콜론!!!
document.write("hi");
document.write("bye");

// 3. 큰따옴표 작은따옴표 겹침 주의
// 앞에 백슬래쉬 붙여주거나 작은따옴표 적기
document.write("선생님이 '필기를 해'라고 말씀하셨다");

// 변수 선언
var age1 = 18; // <- 이제 사용하지 맙시다~~~~

// es6(ECMA2015)
// 변수 -> 재할당(수정) 가능/불가능

// constant : 상수. 수정 절대 불가능!
// 생성과 동시에 할당 필수
const age2 = 18;
// age2 = 23; (에러 발생. 재할당 불가능한데 했음)

// let : 수정 및 재할당 자유로움
let age3 = 18;
age3 = "20살부터 성인";
// console.log(age3); // 브라우저의 Console 영역에 문자열 출력!

// JS에서 사용하는 자료형
// 1. 문자형 -> String
let firstName = "천";

// 문자열 데이터에 HTML 태그를 포함하여 출력 시, 태그로 잘 인식!
let lastName = "<h1>예지</h1>";

// 2. 숫자형 -> Number
let age4 = 18;
// (숫자만 있는!!) 문자열 데이터 -> Number 자료형으로 변환!
let age5 = Number("18");

// 문자열 데이터 -> Number 자료형으로 강제 변환 -> Not a Number(NaN)으로 변환
let age6 = Number("18살");

// 3. 논리형 -> Boolean (true / false)
let isLogined = true;
isLogined = false;

let check = Boolean(""); // truthy, falsy 의 개념이 존재한다!
// 엔간해서는 값이 들어있다 -> true 형변환
// null, 0, undefined, "", NaN, ... -> false 형변환

// 4. 빈 데이터 (null, undefined)
let tmp; // undefined : 변수에 값을 등록하지 전 상태! (의도X)
let tmp2 = null; // null : 변수에 저장된 데이터를 비울 때! (의도O)

// 자료형이 뭔데? -> typeof
// string, number, boolean, undefined -> typeof 출력 시 본인 자료형 그대로
// ! typeof NaN -> Number
// ! typeof null -> object (객체) (null이라는 이름의 자료형XXXXXX)

// 변수 선언 시 주의사항
let $num1, _num2, num3; // 숫자로 시작하는것X

// 연산자
// 산술 연산자 : + - * / %

// console.log(typeof (3 + "3")); // + 연산자 : 하나라도 문자열이 등장 시 문자열 결합으로 작동

// 대입 연산자 : = += -= *= /= %=
let test = 1;
test += 2; // test = test + 2;
// console.log(test);

// 증감 연산자 : ++ --
test = 1;
// console.log(test++); // 후위 증감. console.log() 실행 후 값이 증가

// console.log(test);
// console.log("----------");
test = 1;
// console.log(++test); // 전위 증감. console.log() 실행 전 값이 증가

// console.log(test);

// 비교 연산자 : > < >= <= == != === !==
// == vs === -> 더 정확한 ===을 쓰자!
// console.log(3 == "3"); // 숫자를 비교할 경우, 표기된 숫자만 일치하면 true 반환
// console.log(3 === "3"); // 숫자를 비교할 경우, 표기된 숫자 & 자료형까지 일치하면 true 반환

// 논리 연산자 : &&(and) ||(or) !(not)
// && : 하나라도 false가 존재하면 false로 반환
// || : 하나라도 true가 존재하면 true로 반환
// ! : 반대값을 반환
test = 1;

// && 나 || 연산자의 평가 결과는 반드시 불리언 값이 아닐 수도 있다.

// 첫번째 피연산자 "dog"의 경우, Truthy 값 -> true 평가
// 하지만 이 시점에서는 아직 && 연산을 수행할 수가 없다! 그래서 우리는 두번째 피연산자 "cat"으로 넘어감
// 두번째 피연산자가 && 연산자 표현식의 평가 결과를 결정!!!!!!
// 이때의 && 연산자는 논리 연산 결과를 결정하는 두번째 피연산자, "cat"을 그대로 반환!
// (&&, || 둘다 논리 연산의 결과를 결정하는 피연산자의 타입을 변환하지 않고! 그대로 반환)
// console.log("dog" && "cat"); // 단축평가 -> "cat"

// 단축 평가 : 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 생략.
// console.log(false || "미완료");

// 연산자 우선순위
// 1. ()
// 2. ++, -- ! (단항 연산자)
// 3. 산술 4. 비교 5. 논리 6. 대입
// console.log((3 + 4) * 2);

// 삼항 조건 연산자
// 조건식 ? 조건식이 참일때 사용할 결과값 : 거짓일때 사용할 결과값
test = 1;
// console.log(test > 1 ? "맞습니다" : "거짓입니다");

// 제어문 : 프로그램의 흐름을 제어
// 조건을 만족하는 여부에 따라 흐름을 제어하는 조건문 : if - else if - else
// 변수에 일치하는 경우에 따라 코드를 제어하는 선택문 : switch
// 특정 코드를 여러 번 반복해서 실행할 수 있는 반복문 : for, while, do while

// 조건문
if (1 > 3) {
  // 실행문
} else if (1 > 2) {
  // 실행문
} else if (1 > 1) {
  //
} else {
  //
}

// 조건식 부분에 true/false가 아닌 요소가 오더라도,
// truthy/falsy에 따라 처리함!
// if ("월요일") {
//   if (true) {
//     console.log("오늘 하루도 얼마 남았다~~~~");
//   }
// } else {
//   console.log("falsy한 친구들");
// }

// 선택문 (switch)
let flag = 1;
switch (flag) {
  case 1:
    console.log("첫번째 조건");
    break;
  case "naver":
    console.log("두번째 조건");
    break;
  default:
    console.log("기본값");
}

// 반복문
// while : 조건식을 만족할 때까지 계속 반복
flag = 5;
while (flag < 5) {
  console.log(flag);
  flag++;
}

// do while : 반드시! 한번은 코드를 실행하고 조건식을 검사
// do {
//   console.log(flag);
//   flag++;
// } while (flag < 5);

// for문 : 조건식을 만족할때까지 계속 반복
// for(초기값 ; 조건식; 증감식) { }
for (let i = 1; i < 10; i++) {
  if (i == 5) {
    break; // 반복문을 탈출하고 싶을 때
  }
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("----------");

for (let i = 1; i < 10; i++) {
  if (i % 2 != 0) {
    continue; // continue : 뒤의 코드 무시, 바로 조건식으로 이동
  }
  console.log(i);
}

// 객체
// smartphone.turnOn();
// console.log(smartphone.company);

// 자바스크립트의 객체 종류
// 1. 내장 객체 -> String, Date, Array, Math
// 가장 기본 객체 생성
const sample = new Object();

// 날짜 정보 객체 : Date
const date = new Date();
// get~~~ : 날짜 정보를 가져올 때
console.log(date.getDay()); // 요일 정보 : 0(일요일) ~ 6(토요일)
console.log(date.getMonth()); // 월 정보 : (현재 월-1)
console.log(date.getTime()); // 1970.1.1~지금까지 경과한 시간 밀리초로 계산
// set~~~ : 날짜 정보를 수정할 때

// 오늘부터 연말까지 며칠이 남았을까? -> JS 계산
const lastDay = new Date(2023, 11, 31); // 2023-12-31
let diff = lastDay.getTime() - date.getTime();
// 1초 = 1000ms. 1분 = 60초. 1시간 = 60분. 1일 = 24시간
// 1000*60*60*24
diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
document.write("<h3>연말까지 " + diff + "일이 남았습니다</h3>");

// 수학 객체 : Math
Math.abs(); // 절댓값
Math.max(2, 3, 4, 5, 6, 199); // 넘겨받은 숫자 중 가장 큰 값
Math.min(1, 2, 3, 4, 5, 6); // 넘겨받은 숫자 중 가장 작은 값
Math.pow(2, 4); // 2^4 (숫자, 제곱값)
Math.random(); // 0~1사이의 난수

Math.PI;
Math.sqrt(4); // 제곱근값

Math.ceil(); // 소숫점 첫번째 자리에서 올림
Math.round(); // 소숫점 첫번째 자리에서 반올림
Math.floor(); // 소숫점 첫번째 자리에서 내림

// 0~10까지의 난수
console.log(Math.random() * 10);

// 0~10까지의 정수 난수
console.log(Math.floor(Math.random() * 11));

// 120~150사이의 정수 난수
Math.floor(Math.random() * 31); // 0~30까지 난수
Math.floor(Math.random() * 31) + 120; // 120~150까지 난수를 생성

// 배열 : 여러 개의 데이터를 묶어서 저장하고자 할 때
// 배열을 생성할 때 공간 제한XXXXXXX
// 방식 1.
const arr = new Array();
arr[0] = 1;
arr[1] = 2;

// 방식 2.
const arr2 = new Array(1, 2);

// 방식 3.
const arr3 = [1, 2];

// Array에서 제공하는 메서드 및 속성
// join(연결문자) : 배열 데이터를 연결 문자 기준으로 이어붙여서 반환
console.log(arr.join("/"));

arr.reverse(); // 데이터 역순으로
arr.sort(); // 데이터 오름차순 정렬

let startIdx = 0;
let endIdx = 1;
console.log(arr.slice(startIdx, endIdx)); // 첫번째인자~마지막인자 전까지

arr.concat(arr2); // 배열 2개를 하나로 결합
arr.pop(); // 마지막 인덱스의 데이터를 반환 후 삭제
arr.push(3); // 마지막 인덱스에 새로운 데이터 추가

arr.shift(); // 첫번째 인덱스의 데이터를 반환 후 삭제
arr.unshift(3); // 첫번째 인덱스에 새로운 데이터를 추가

arr.length; // 배열의 길이 값 (-> 마지막 인덱스 값)
// arr.length=10; // -> 배열의 길이를 10칸으로 늘려버림!!!! (empty칸)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 문자열 String

// 2. 브라우저 객체 모델 (BOM)
// window, screen, location, history, navigator ....
// window.location.href = "https://www.naver.com";

// 3. 문서 객체 모델 (DOM) : HTML 문서 구조
