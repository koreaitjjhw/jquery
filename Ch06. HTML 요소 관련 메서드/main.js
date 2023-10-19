/*
HTML 요소 관련 메서드
- text(), html() : 문서객체 안의 내용을 가져오거나 추가할 때 사용하는 메서드
- attr(), prop() : 문서객체 속성의 값을 가져오거나 속성을 추가하는 메서드
- removeAttr() : 문서객체 속성을 제거하는 메서드

text(), html() 비교
- 문서객체의 컨텐츠를 컨트롤하는 메서드
- 둘 다 게터와 세터를 가지고있다.
- 가장 큰 차이는 태그문자를 문자로 인식하는지, 태그로 인식하는지이다.

attr(), prop() 비교
- 문서객체의 태그 속성을 컨트롤하는 메서드
- 둘 다 게터와 세터를 가지고있다.
- 가장 큰 차이는 속성값을 가지고 올 때의 차이다.
- attr()메서드는 html의 입장에서, prop() 메서드는 javascript의 입장에서 가져온다.
*/

$(document).ready(function () {
  //text(), html()
  //매개변수가 없는 경우(게터)
  let text1 = $(".text1").text();
  let text2 = $(".text2").html();

  console.log(text1);
  console.log(text2);

  //매개변수가 한개인 경우(세터)
  $(".text3").text("<a href='#'>링그태그</a>");
  $(".text4").html("<a href='#'>링그태그</a>");

  //매개변수가 함수인 경우(세터)
  $(".box1 h1").text(function (index) {
    return "title tag" + (index + 1);
  });

  $(".box2 p").html(function (index) {
    return "paragraph tag" + (index + 1);
  });

  //attr(), prop()
  //매개변수가 한개인 경우(게터)
  let src1 = $("img").attr("src");
  let src2 = $("img").prop("src");

  $(".img1").html(src1);
  $(".img2").html(src2);

  //매개변수가 두개인 경우(세터)
  $("#chk1").attr("checked", "checked"); // checked, undefined
  $("#chk2").prop("checked", "checked"); // true, false

  //매개변수가 객체인 경우(세터)
  //prop을 사용해도 되지만 보통 attr메서드를 더 많이 사용한다.
  //   $("img").attr({
  //     width: 800,
  //     height: 500,
  //   });

  //매개변수가 함수인 경우(세터)
  $(".cat").attr("width", function (index) {
    return (index + 1) * 100;
  });

  //속성 삭제 메서드
  $("img").first().removeAttr("width");
});
