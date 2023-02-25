// 객체 조작

// 1. 객체 편집 : 생성, 복제, 삭제, 변경, 추가

// $("요소선택").html()
// 선택한 요소의 하위 요소를 가져와 문자열로 반환 / 모두 제거하고 새 값으로 바꿀 때
// console.log($("#section_1").html());
// $("#section_1").html("<h3>하하 20분으로 줄었다~^^</h3>");

// $("요소선택").text()
// 선택한 요소에 포함되어 있는 전체 텍스트를 가져옴!
// console.log($("#section_1").text());
// $("#section_1").text("<p>18분 남았다~^^</p>");

// $("요소선택").attr("속성명") : 선택한 요소의 속성 값을 가져옴
console.log($("img").attr("src"));

// $("요소선택").attr("속성명", "새값") : 선택한 요소의 속성 값을 교체

// $("요소선택").removeAttr("속성명") : 선택한 요소의 지정 속성 제거
// const newImgSrc =
//   "https://kr-mb.theepochtimes.com/assets/uploads/2019/11/a58d75581e050bbc5c6acfe08ad418ff.png";

// $("img").attr("src", newImgSrc);
// $("img").removeAttr("alt");

// $("요소선택").addClass("class이름") : 지정한 클래스 값 생성
// $("요소선택").removeClass("class이름") : 지정한 클래스 값 삭제
// $("요소선택").toggleClass("class이름") : 있으면 삭제, 없으면 생성
// $("요소선택").hasClass("class이름") : 클래스값이 있으면 true, 없으면 false

$("#p1").addClass("salmon");
$("#p2").removeClass("salmon");
$("#p4").toggleClass("green");

console.log($("#p5").hasClass("inActive"));

// val() : form 요소의 value 속성값을 가져올 때
// val("새 값") : form 요소의 value 속성값을 업데이트

$("input").val("30분만 하자구~^^");
console.log($("input").val());

// value 속성의 기본값을 알려주는 prop("defaultValue") (html태그에서 준 값)
console.log($("input").prop("defaultValue"));

// prop() : form 요소(select, checkbox, radio)의 상태 속성값을 가져올 때
// prop("checked", true) : form요소의 상태 속성값을 업데이트할 때

$("input").prop("checked"); // -> 만약 체크된 상태면 true 아니면 false
$("input").prop("checked", true); // -> 체크 상태를 true로! (체크표시)
$("input").prop("defaultValue"); // -> 요소의 초기 value 속성 값
$("input").prop("selectedIndex"); // -> selected된 요소의 인덱스 값 반환
$("input").prop("tagName"); // -> 태그 이름
$("input").prop("nodeType"); // -> 노드 타입

// 요소의 속성을 조작할 때 사용
// CSS box-model 했던 부분을 떠올려봅시다
// $("요소선택").height() // padding, border를 제외한 높이를 반환
// $("요소선택").height(100) // 높이를 재설정
// $("요소선택").width() // padding, border를 제외한 너비를 반환
// $("요소선택").width(100) // 너비를 재설정

// $("요소선택").innerHeight() // padding을 포함한 높이를 반환
// $("요소선택").innerHeight(100) // 높이 재설정
// $("요소선택").innderWidth() // padding을 포함한 너비를 반환
// $("요소선택").innderWidth(100) // 너비 재설정

// $("요소선택").outerHeight() // padding, border를 포함한 높이를 반환
// $("요소선택").outerHeight(100) // 높이 재설정
// $("요소선택").outerWidth() // padding, border를 포함한 너비를 반환
// $("요소선택").outerWidth(100) // 너비 재설정

//------------------------------------------------
// 절댓값
// $("요소선택").position().left() // 선택한 요소의 위치 값을 반환
// $("요소선택").position().right()
// $("요소선택").position().top()
// $("요소선택").position().bottom()

// offset : 선택한 요소가 문서에서 수직/수평으로 얼마나 떨어져 있는지!
// 상댓값
// $("요소선택").offset().left()
// $("요소선택").offset().right()
// $("요소선택").offset().top()
// $("요소선택").offset().bottom()
//-------------------------------------------------

// $("요소선택").scrollLeft() // 브라우저의 수평 스크롤 이동 높잇값 반환
// $("요소선택").scrollTop() // 브라우저의 수직 스크롤 이동 높잇값 반환
