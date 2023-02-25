$.ajax({
  url: "/database",
  dataType: "json",
  success: function (data) {
    // data로부터 id, first_name, last_name, email 요소를 받아와서
    // <table></table> 요소 안에 각각 <tr> </tr> 안에 <td></td> 데이터로서 넣어주세요
    // <table>
    // <tr>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    // </tr>
    //</table>
    // 반복문으로 data 안의 개수만큼 처리 (for...in)

    // $("<table />") -> table 태그를 새롭게 생성하겠다!

    if (data.length > 0) {
      let tableElement = $("<table />");
      for (let i in data) {
        let row = $("<tr />").append(
          $("<td />").text(data[i].id),
          $("<td />").text(data[i].first_name),
          $("<td />").text(data[i].last_name),
          $("<td />").text(data[i].email)
        );

        tableElement.append(row);
      }

      $(".wrap").append(tableElement);
    }
  },
  error: function () {
    alert("DB JSON로드에 실패했습니다....");
  },
});
