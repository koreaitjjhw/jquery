/*
CSS 조작 메서드
addClass() : $('선택자').addClass('클래스'); - 문서객체에 매개변수 클래스를 추가하는 메서드
removeClass() : $('선택자').removeClass('클래스'); - 문서객체에 매개변수 클래스를 제거하는 메서드
toggleClass() : $('선택자').toggleClass('클래스'); 
  - 문서객체에 매개변수 클래스를 번갈아가면서 추가/제거하는 메서드
css() : $('선택자').css('속성명',속성값); - 문서객체 CSS를 컨트롤하는 메서드

- 메서드 뒤에 Class가 붙으면 전부 매개변수가 하나이다.
- 매개변수 클래스명을 작성할 때 [.]을 붙이지 않는다.
- css() 메서드는 문법이 다양하다.
*/

$(document).ready(function () {
  //addClass(), removeClass()
  //hover() 메서드 - $('선택자').hover(콜백함수,콜백함수);
  $("h2").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );

  //toggleClass()
  $("h4").click(function () {
    $(this).toggleClass("active");
  });

  //css()
  //매개변수가 한개인 경우(게터)
  let color = $("h3").css("color");
  console.log(color);

  //매개변수가 두개인 경우(세터)
  $("h3").css("color", "blue"); //두 번째 매개변수 속성값이 숫자인경우 따옴표 생략

  //매개변수가 객체인 경우(세터)
  $("h3").css({
    backgroundColor: "yellow",
    textDecoration: "underline",
  });

  //매개변수가 함수인 경우(세터)
  $("h3").css("font-size", function (index) {
    //배열된 객체 각각 다른 css를 적용하고 싶을 때 사용
    return (index + 1) * 20;
  });

  //매개변수가 객체와 함수를 같이 사용하는 경우(세터)
  let c = ["red", "green", "blue"];
  $("h1").css({
    //동시에 여러개 적용하거나, 배열된 것을 다르게 적용하고 싶을 때 사용
    backgroundColor: "black",
    color: function (index) {
      return c[index];
    },
  });
});
