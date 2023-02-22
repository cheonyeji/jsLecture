// 탐색 선택자
// 기본 선택자로 가져온 요소는 배열에 담겨 있다
// 위치 탐색 선택자는 배열의 인덱스 값을 통해 접근!

// first / last 선택자
// $("#menu li:first").css("color", "blue"); // [0]
// $("#menu li:last").css("color", "red"); // [-1] or [배열.length-1]

// even / odd 선택자
// $("#menu li:even").css("color", "red"); // 짝수. 인덱스는 0부터 시작~
// $("#menu li:odd").css("color", "blue"); // 홀수. 인덱스는 0부터 시작~

// nth-child(숫자n) 선택자 : 선택한 요소의 무리 중 지정된 숫자의 요소 선택
// $("#menu li:nth-child(2n)").css("color", "black");
// $("#menu li:nth-child(2n+1)").css("color", "blue");

// nth-last-child(숫자) 선택자 : 선택한 요소의 무리 중 지정된 숫자의 요소 중에서도 마지막 위치!
// $("#menu li:nth-last-child(2)").css("color", "blue");

// equal 같다 (eq)
// less than 작다 (lt)
// greater than 더 크다 (gt)

// eq(index) : 선택한 요소 중 지정한 인덱스 요소만
// lt(index) : 선택한 요소 중 지정한 인덱스 보다 작은 요소만
// gt(index) : 선택한 요소 중 지정한 인덱스보다 큰 요소만

// $("#menu li").eq(2).css("color", "skyblue");
// $("#menu li:eq(2)").css("color", "skyblue"); // [2]번쨰 요소
// $("#menu li:lt(2)").css("color", "salmon"); // ~[2]번째 요소 전까지
// $("#menu li:gt(2)").css("color", "violet"); // [2]번째 요소 이후~

// first-of-type / last-of-type : 선택한 요소 중 첫번째 / 마지막 요소만!
// $("#menu li:first-of-type").css("color", "salmon");
// $("#menu li:last-of-type").css("color", "skyblue");

// only-child : 부모 요소에 단 하나뿐인 자식 요소일때만!
// $("li:only-child").css("border", "1px solid salmon");

// slice(startIdx, endIdx) : 선택한 요소의 구간을 지정
// startIdx는 포함, endIdx는 미포함
// $("#menu li").slice(1, 3).css("background-color", "salmon");
