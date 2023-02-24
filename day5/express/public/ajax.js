/*
$.ajax({
    url: "전송할페이지(action url)",
    type: "전송방식(get|post)",
    data: "전송할데이터. 객체 {} 많이 사용",
    dataType: "서버로부터 받아올 데이터 형식(html|xml|json|text)",
})
.done(function() {
    // ajax 요청 성공 시 실행할 코드
})
.fail(function() {
    // ajax 요청 실패 시 실행할 코드
})


*/

$("button").on("click", function () {
  const email = $("input[name=email]").val();
  const password = $("input[name=password]").val();

  $.ajax({
    url: "/login",
    type: "POST",
    data: { email: email, password: password },
    dataType: "JSON",
  })
    .done(function (json) {
      $(".result").text(json.email);
    })
    .fail(function () {
      alert("ajax failed....");
    });
});
