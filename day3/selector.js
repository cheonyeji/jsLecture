// 인접 관계 선택자
// 직접 선택자로 요소를 먼저 선택 후 해당 요소와 가까이에 있는 요소를 선택

// 부모 (나를 감싸고 있는 가장 가까운 요소)
// $("li").parent().css("border", "1px solid red");

// 하위 요소. 선택자 뒤에 '띄어쓰기'를 통해 구분
// $("#wrap h1").css("color", "blue");

// 자식 요소. 선택한 요소를 기준으로 지정한 자식 요소만!
// 현재 #wrap의 자식은 #inner-wrap
// $("#wrap > h1").css("color", "red"); // h1태그가 없기에 적용X
// $("#inner-wrap").children("h1").css("color", "red");
// $("#wrap").children().css("border", "1px solid blue");

// css 적용방법 2가지
// $("#inner-wrap > h1").css("color", "red").css("border", "1px solid blue");
// $("#inner-wrap > h1").css({ color: "red", border: "1px solid blue" });

// 형(이전) / 동생(다음) 요소
// $("#target").prev().css("color", "red");
// $("#target").next().css("color", "green");
// $("#target").next().next().css("color", "green");
// $("#target + li").css("color", "purple"); // next()와 동일

// 전체 형(이전) / 전체 동생(다음)
// $("#target").prevAll().css("color", "red");
// $("#target").nextAll().css("color", "blue");

// 전체 형제 요소
// $("#target").siblings().css("color", "red");

// 범위 제한 전체 형(이전) / 동생(다음) 요소
// $("#target").prevUntil(".content0").css("color", "red");
// $("#target").nextUntil(".content4").css("color", "blue");

// 모든 상위 요소
// $("#target").parents().css("border", "1px solid red");

// 상위 요소 중 원하는 요소만
// $("#target").parents("#inner-wrap").css("border", "1px solid red");

// 상위 요소 중 가장 가까운 요소만!
// closest("요소 선택")
$("#target").closest("ul").css("border", "1px solid red");
