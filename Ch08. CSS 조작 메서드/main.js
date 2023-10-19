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
});
