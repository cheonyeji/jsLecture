/*
// 이벤트 : 유저가 웹사이트에 방문하여 하는 모든 동작
// 이벤트 핸들러 : 이벤트가 발생했을 때 코드를 실행시키는 것

// 이벤트 등록 : 하나의 이벤트만 등록(listen) / 여러개의 이벤트를 등록
// ex. 요소를 더블클릭했을 때 / 요소에 마우스포인터를 올렸을 때

// $("요소선택").이벤트종류(이벤트핸들러 함수)
// $("#btn").click(function () {
//   console.log("클릭됨!");
// });

// document.querySelector("#btn").addEventListener("click", function(){
//     console.log("클릭됨");
// })

// 이벤트의 종류들
// 로딩 이벤트
// load() ready() error()

// 마우스 이벤트
// click() dblclick()
// mouseout() mouseover() hover()
// mousedown() mouseup() mouseenter() mouseleave() mousemove()
// scroll()

// 포커스 이벤트
// focus()
// focusin() focusout()
// blur()
// change()

// 키보드 이벤트
// keypress()
// keydown() keyup()

// 단독 이벤트 등록 방법
// $("요소선택").이벤트등록메서드(이벤트핸들러 함수)
function btnClickHandler() {
  console.log("클릭됨!");
}

$("#btn").click(btnClickHandler);

// 그룹 이벤트 등록 메서드
// 1.
// $("요소선택").on("이벤트종류1 이벤트종류2", function() {})

// 2.
// $("요소선택").on({
//    "이벤트종류1 이벤트종류2" : function() {}
// })

// 3.
// $("요소선택").on({
//  "이벤트종류1" : function() {},
//  "이벤트종류2" : function() {}
// })

// btn요소에 마우스를 올리거나 키보드를 사용해서 버튼에 포커스를 맞출 때
// 1.
$("#btn").on("mouseover focus", function () {
  console.log("이벤트 발생!");
});

// 2.
$("#btn").on({
  "mouseover focus": function () {
    console.log("이벤트 발생2");
  },
});

// 3.
$("#btn").on({
  mouseover: function () {
    console.log("이벤트 발생3");
  },
  focus: function () {
    console.log("이벤트 발생3");
  },
});

$("#btn").mouseover(function () {});
$("#btn").focus(function () {});

// 강제로 이벤트를 발생시키기
// 사용자에 의해 이벤트X *핸들러*에 의해 이벤트O

// 1. $("이벤트 대상").단독이벤트등록메서드();
// 2. $("이벤트 대상").trigger("이벤트종류");
$("#btn").click();
$("#btn").trigger("click");

// 이벤트를 제거하는 메서드 : off()
// $("이벤트 대상").off("제거할 이벤트의 종류"); // <- "이벤트1 이벤트2 이벤트n"
$("#btn").off("click mouseover focus");

//////////////////////////////////////////////////

// 로딩 이벤트
// 유저가 브라우저에서 HTML 문서를 요청하여 HTML 문서의 로딩이 완료되는 순간!

// ready() : 유저가 사이트를 방문할때 요청한 HTML 문서(documnet)의
//           로딩이 완료된 순간 이벤트 발생
// $(document).ready(function () {
//   console.log($("img").height());
// });

// jQuery 3.0기준 on()을 통해서만 사용 가능. 단독메서드로는 사용X
// load() : 외부에 연동된 소스(iframe, img, video)의 로딩이 끝났을 때
// $(window).on("load", function () {
//   console.log($("img").height());
// });

// 마우스 이벤트
// click() : 클릭했을 때
// dblclick() : 더블클릭했을 때
$("img").click(function () {
  console.log("한번 클릭됨");
});
$("img").dblclick(function () {
  console.log("두번 클릭됨");
});
// $("img").dblclick(); // 강제 이벤트 발생!

// a 태그나 form 태그의 기본 이벤트를 차단하는 방법
$("a").click(function (event) {
  event.preventDefault(); // 기본 이벤트 차단
  console.log(event);
  console.log("a태그가 클릭됨");
});

// $("button").click(function (e) {
//   e.preventDefault();
//   console.log("제출버튼이 클릭됨");
// });

$("button").click(function () {
  console.log("제출버튼이 클릭됨");
  return false; // 기본 이벤트 차단 방법 2번째
});

// mouseover() / mouseout() / hover() 메서드
// mouseover() : 선택한 요소에 마우스를 올릴 때마다
// $("a").mouseover(function () {
//   console.log("mouseover() 발생");
// });

// mouseout() : 선택한 요소에서 마우스가 벗어날 때마다
// $("a").mouseout(function () {
//   console.log("mouseout() 발생");
// });

/////////// mouseover() , mouseout() : 이벤트 버블링 발생
// -> 직계 부모요소에서 이벤트가 전달이 되어 내가 target으로 설정한 요소와
// 실제 이벤트가 발생한 요소가 다를 수 있음 (버그 발생 가능)
// preventDefault() 사용 가능

// mouseover + mouseout -> hover!
// hover() : 선택한 요소에서 마우스가 올라가거나 벗어날때 각각
//           올라갈때 / 벗어날 때 따로 핸들러를 실행시킬 수 있음
$("a").hover(
  function () {
    console.log("mouseover() 발생시 실행");
  },
  function () {
    console.log("mouseout() 발생시 실행");
  }
);

// mouseenter() / mouseleave() 메서드
// mouseenter() : 대상 요소의 경계범위에 마우스가 들어올 때
// mouseleave() : 대상 요소의 경계범위에서 마우스가 완전히 나갈 때

// mouseenter(), mouseleave() 메서드는 이벤트 버블링X
// 내가 설정한 **해당 요소에서만** 이벤트가 발생!
// preventDefault() 사용 불가

$("#box_1").mouseover(function () {
  console.log("mouseout() 이벤트 발생");
  $("#box_1").css("background-color", "green");
});
$("#box_1").mouseout(function () {
  console.log("mouseout() 이벤트 발생");
  $("#box_1").css("background-color", "yellow");
});

$("#box_2").mouseenter(function () {
  console.log("mouseleave() 이벤트 발생");
  $("#box_2").css("background-color", "violet");
});
$("#box_2").mouseleave(function () {
  console.log("mouseleave() 이벤트 발생");
  $("#box_2").css("background-color", "salmon");
});
*/

// 이벤트 버블링 개념
/*
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("-------");
});

document.querySelector("p").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("-------");
});

document.querySelector("div").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("-------");
});
*/

// click()을 쪼개놓은 느낌~
// mouseup() : 마우스 커서를 뗐을 때
// mousedown() : 마우스 커서를 누를 때
$("h1").mouseup(function () {
  console.log("mouseup() 발생");
});
$("h1").mousedown(function () {
  console.log("mousedown() 발생");
});

// mousemove() : 선택한 요소 안에서 마우스를 움직일 때 발생
$(document).mousemove(function (event) {
  // 아래의 값을 사용하여 현재 위치값을 화면 속 x : _ y: _에 출력
  $(".posX").text(event.pageX);
  $(".posY").text(event.pageY);
});

// scroll() : 스크롤 이벤트
// scrollTop() : 스크롤바의 수직 위치 반환 (jQuery)
// scrollLeft() : 스크롤바의 수평 위치를 반환 (jQuery)
$(window).on("scroll", function () {
  $(".top").text($(this).scrollTop());
  $(".left").text($(this).scrollLeft());
});

// 포커스 이벤트
// 포커스 : 마우스로 a / input 태그를 클릭 or Tab 누를 때 생성

// focus() : 대상 요소로 포커스가 이동 시 (= mouseover)
// blur() : 대상 요소에서 다른 요소로 포커스가 이동 시 (= mouseout)

$("#user_id, #user_pw").on("focus", function () {
  $(this).css("background-color", "salmon");
});
$("#user_id, #user_pw").on("blur", function () {
  $(this).css("background-color", "skyblue");
});

// focusin, focusout -> 버블링을 통해 전파!
// focusin() : 대상 요소의 하위 요소 중 입력 요소로 포커스 이동 시
// focusout() : 대상 요소의 하위 요소 중 입력 요소에서
//              외부 요소로 포커스 이동 시

$("#form1").on("focusin", function () {
  $(this).css("background-color", "salmon");
});
$("#form1").on("focusout", function () {
  $(this).css("background-color", "skyblue");
});

// 키보드 접근성을 고려해서 프론트엔드 코드를 짜자~~~~
// 마우스 & 키보드 두가지 경우를 모두 고려!
$("button").on("mouseover focus", function () {});
$("button").on("mouseout blur", function () {});

// change() : 선택한 폼 요소의 value값의 변화를 감지
$("select").on("change", function () {
  $(".result").text($(this).val());
});

// 키보드 이벤트
// keydown() : 키보드를 눌렀을 때 (거의 모든 키를 받아옴)
// keyup() : 키보드를 눌렀다 떼는 순간에
// keypress() : 키보드를 눌렀을 때
//              (기능키-F1~F12, ALT, CTRL, Shift,... 이벤트발생X)

// $("#user_input").keydown(function () {
//   console.log($(this).val());
// });

// 유저가 방향키 입력했을 때 해당 방향키 관련 처리
function keyEventHandler(e) {
  let result = "";
  switch (e.keyCode) {
    case 37:
      result = "LEFT";
      break;
    case 38:
      result = "TOP";
      break;
    case 39:
      result = "RIGHT";
      break;
    case 40:
      result = "BOTTOM";
      break;
  }

  if (result) $("#user_input").val(result);
}
$(document).keydown(keyEventHandler);

// 그룹 이벤트 등록 및 삭제
// on() : 2개 이상의 이벤트를 등록.
// 사용 방식에 따라 이벤트를 등록한 이후에
// 동적으로 생성되거나, 복제한 요소에도 이벤트가 적용

// bind() : 2개 이상의 이벤트를 등록.

// delegate() : 선택한 요소의 하위 요소에 이벤트를 등록!
// 사용 방식에 따라 이벤트를 등록한 이후에
// 동적으로 생성되거나, 복제한 요소에도 이벤트가 적용

// one() : 1개 이상의 이벤트를 등록,
// 지정한 이벤트 1번 발생 시 자동 해제.

// off() : on() 메서드로 등록한 이벤트를 제거
// unbind() : bind() 메서드로 등록한 이벤트를 제거
// undelegate() : delegate() 메서드로 등록한 이벤트를 제거
