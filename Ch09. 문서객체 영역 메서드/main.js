/*
문서객체 영역 메서드
width() : 요소의 너비를 설정하거나 반환
height() : 요소의 높이를 설정하거나 반환
innerWidth() : 요소의 너비를 반환(padding만 포함)
innerHeight() : 요소의 높이를 반환(padding만 포함)
outerWidth() : 요소의 너비를 반환(padding, border 포함)
outerHeight() : 요소의 높이를 반환(padding, border 포함)
outerWidth(true) : 요소의 너비를 반환(padding, border, margin 포함)
outerHeight(true) : 요소의 높이를 반환(padding, border, margin 포함)

- box-sizing: border-box; 속성을 적용하면 padding과 border 수치를
  width()/height() 영역 안으로 설정한다.
  기본값은 box-sizing: content-box; 이다.
*/

$(document).ready(function () {
  //box-sizing: border-box; 속성 미적용 (게터)
  let result1 = $(".area1").width();
  let result2 = $(".area1").innerWidth();
  let result3 = $(".area1").outerWidth();
  let result4 = $(".area1").outerWidth(true);

  $(".w1").html(result1);
  $(".w2").html(result2);
  $(".w3").html(result3);
  $(".w4").html(result4);

  //box-sizing: border-box; 속성 적용 (게터)
  let result5 = $(".area2").width();
  let result6 = $(".area2").innerWidth();
  let result7 = $(".area2").outerWidth();
  let result8 = $(".area2").outerWidth(true);

  $(".w5").html(result5);
  $(".w6").html(result6);
  $(".w7").html(result7);
  $(".w8").html(result8);

  //width(), height() 메서드의 세터
  //매개변수가 한개인 경우만 세터를 가진다
  let getWidth = $(".area3").width();
  $(".getWidth").html(getWidth);

  $(".area3").click(function () {
    $(".area3").width(200);
    $(".area3").height(200);

    let getWidth = $(".area3").width();
    $(".getWidth").html(getWidth);
  });
});
