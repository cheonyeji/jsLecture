// 1. 세번째 li태그(내용2)를 선택하여 배경을 yellow 적용
$("li:nth-child(3)").css("background-color", "yellow");
$("li").eq(2).css("background-color", "yellow");

// 2. 2n번째 li 태그 선택하여 글자색 red 적용
$("li:nth-child(2n)").css("color", "red");

// 3. 가장 마지막에 '내용4' 요소 삽입 (li태그 사용)
$("ul").append("<li>내용4</li>");
