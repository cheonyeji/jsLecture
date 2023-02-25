// Effect 메서드
// $("요소선택").effect메서드(효과 소요 시간, 가속도, 콜백 함수)
// 효과 소요 시간 : 1) "slow" / "normal" / "fast" -> 문자열 중 선택2) 1000 (1초) / 500 (0.5초) -> ms단위
// 가속도 : "swing" (시작&끝 느리게, 중간은 빠르게) / "linear" (일정한 속도로~)
// 콜백 함수 : 효과가 끝난 후 실행할 함수. 생략 가능

// $("#box").slideUp(2000, "linear", function () {
//   alert("좋은 아침입니다!");
// });

// 숨기는 것과 관련
// hide() : 요소 숨김
// fadeOut() : 점점 투명해지다가 사라짐
// slideUp() : 요소가 위로 접히면서 숨겨짐

// 노출하는 것과 관련
// show() : 숨겨진 요소 노출
// fadeIn() : 숨겨진 요소가 점점 선명해짐
// slideDown() : 숨겨진 요소가 아래로 펼쳐짐

// 노출 & 숨김
// toggle() : hide <-> show
// fadeToggle() : fadeIn <-> fadeOut
// slideToggle() : slideDown <-> slideUp

// fadeTo() : 지정한 투명도 적용 (css - opacity 생각)
// $("요소선택").fadeTo(효과 소요 시간, 투명도, 콜백함수)
// 투명도 : 0~1 사이의 값 (1에 가까울수록 선명)

$(".btn2").hide();
$(".btn1").on("click", function () {
  $(".box").slideUp(1000, "linear", function () {
    $(".btn1").hide();
    $(".btn2").show();
  });
});
$(".btn2").on("click", function () {
  $(".box").fadeIn(1000, "swing", function () {
    $(".btn1").show();
    $(".btn2").hide();
  });
});

$(".btn3").on("click", function () {
  $(".box").slideToggle(1000, "linear");
});
$(".btn4").on("click", function () {
  $(".box").fadeTo("fast", 0.3);
});
$(".btn5").on("click", function () {
  $(".box").fadeTo("slow", 1);
});

// 애니메이션(모션) 메서드
// animate() : 선택한 요소에 대해 다양한 motion 적용 가능
// $("요소선택").animate({CSS속성:값, ... }, 적용시간, 가속도, 콜백함수)

// btn6을 클릭했을 때 text1 요소를 폰트사이즈 30px로 증가,
// 왼쪽에서부터 마진값을 500px
// 2초, 일정한 속도로 동작하도록~
// animate() 작업이 종료되면 "모션 완료!"라는 알림창을 띄워주세요

$(".btn6").on("click", function () {
  $(".text1").animate(
    {
      marginLeft: "500px",
      fontSize: "30px",
    },
    2000,
    "linear",
    function () {
      alert("모션 완료!");
    }
  );
});

// btn7을 클릭했을 때
// text2 요소를 왼쪽에서부터 마진값을 50px씩 추가해주세요.
// 1초동안. 기본값 적용 (기본값은 swing)
// 콜백함수 없음
$(".btn7").on("click", function () {
  $(".text2").animate(
    {
      marginLeft: "+=50px",
    },
    1000
  );
});

// 애니메이션 효과 제어 메서드
// effect / animate 등의 동작을 제어
// 애니메이션은 Queue형식으로 First In First Out의 구조를 가짐
// 먼저 호출된 요소가 먼저 실행

// stop() : 현재 실행중인 효과를 모두 정지
// $("요소선택").stop() : 현재 실행중인 효과를 모두 정지.
//                        Queue에 남은 요소는 계속 실행

// $("요소선택").stop(clearQueue[true|false], finish[true|false])
// 기본값은 false
// clearQueue : true -> 큐에서 대기중인 요소를 모두 제거
// finish : true -> 진행중인 애니메이션을 강제 종료

// delay() : 애니메이션의 실행 지연
// $("요소선택").delay(ms단위 지연시간).animate();

$(".text1").animate({ marginLeft: "100px" }, 1000);
$(".text2").delay(2000).animate({ marginLeft: "100px" }, 1000);

function moveElement() {
  $(".text3").animate({ marginLeft: "+=50px" }, 1000);

  $(".text4").animate({ marginLeft: "+=50px" }, 1000);
  $(".text4").stop();

  $(".text5").animate({ marginLeft: "+=50px" }, 1000);
  $(".text5").stop(true, true); // animate를 적용X 단순 CSS 적용처럼!
}

$(".btn8").on("click", moveElement);

// queue() : 큐(Queue)에 적용된 애니메이션 함수를 반환
//           or 큐에 지정한 함수를 추가
//           메서드 실행 시 실행 이후의 모든 애니메이션 취소!

// $("요소선택").queue() : 큐에 들어있는 함수 반환
// $("요소선택").queue(function() {}) : 새로운 함수를 큐에 참가

// dequeue() : queue() 메서드 실행 후 적용된 애니메이션 메서드가 취소X해줌
// $("요소선택").dequeue() : 취소 안되게 해줌~

// $(".text6")
//   .animate({ marginLeft: "200px" }, 1000)
//   .animate({ marginTop: "200px" }, 1000)
//   .queue(function () {
//     $(this).css({ color: "red" });
//     $(this).dequeue(); // 뒤의 animate() 2개를 실행시키기 위해!
//   })
//   .animate({ marginLeft: 0 }, 1000)
//   .animate({ marginTop: 0 }, 1000);

// clearQueue() : 진행 중인 애니메이션을 제외하고 큐에서 대기하는 모든 요소 제거
$(".text6")
  .animate({ marginLeft: "100px" }, 1000)
  .animate({ marginLeft: "200px" }, 1000)
  .animate({ marginLeft: "300px" }, 1000);
$(".text7")
  .animate({ marginLeft: "100px" }, 1000)
  .animate({ marginLeft: "200px" }, 1000)
  .animate({ marginLeft: "300px" }, 1000);

// $(".text7").clearQueue();

// finish() : 선택한 요소의 진행중인 애니메이션을 강제로 완료시점으로 보낸 후 종료
// 단순 CSS 적용 모습처럼 보임!
$(".text7").finish();
