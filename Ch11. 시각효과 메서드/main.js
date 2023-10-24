/*
시각효과 메서드
- 문서객체를 사라지게 하거나 나타나게 하는 것을 의미한다.

show() : 좌측상단 기준으로 요소를 나타나게 하는 메서드
hide() : 좌측상단 기준으로 요소를 사라지게 하는 메서드
toggle() : show()와 hide() 메서드를 번갈아가며 실행하는 메서드
slideDown() : 상단 기준으로 요소를 나타나게 하는 메서드
slideUp() : 상단 기준으로 요소를 사라지게 하는 메서드
slideToggle() : slideDown()과 slideUp() 메서드를 번갈아가며 실행하는 메서드
fadeIn() : 투명도 기준으로 요소를 나타나게 하는 메서드
fadeOut() : 투명도 기준으로 요소를 사라지게 하는 메서드
fadeToggle() : fadeIn()과 fadeOut() 메서드를 번갈아가며 실행하는 메서드

시각효과 메서드 매개변수
- ex) show(시간, 콜백함수)
- 시간 매개변수는 생략, fast, slow, 밀리초단위가 올 수 있다.
- 콜백함수는 시각효과 메서드가 실행된 후 주고 싶은 명령을 작성한다.
*/

$(document).ready(function () {
  //hide, show, slideUp, slideDown, fadeOut, fadeIn
  //생략, slow, fast, 밀리초단위
  $("button")
    .eq(0)
    .click(function () {
      $("p").fadeOut(3000);
    });
  $("button")
    .eq(1)
    .click(function () {
      $("p").fadeIn(3000);
    });

  //toggle, slideToggle, fadeToggle
  $(".btn1").click(function () {
    $(this).next().toggle("slow");
  });
  $(".btn2").click(function () {
    $(this).next().slideToggle("slow");
  });
  $(".btn3").click(function () {
    $(this).next().fadeToggle("slow");
  });

  //매개변수에 콜백함수 사용
  $(".btn4").click(function () {
    $(this)
      .next()
      .toggle("slow", function () {
        $(this).css("background-color", "lightblue");
      });
  });
  $(".btn5").click(function () {
    $(this)
      .next()
      .slideToggle("slow", function () {
        $(this).css("background-color", "lightblue");
      });
  });
  $(".btn6").click(function () {
    $(this)
      .next()
      .fadeToggle("slow", function () {
        $(this).css("background-color", "lightblue");
      });
  });
});
