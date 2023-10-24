/*
애니메이션 효과 메서드
- css속성의 transition 속성과 비슷한 느낌이지만 애니메이션 메서드로 더 디테일하게 사용할 수 있다.

animate() : 애니메이션 효과 메서드
delay() : 애니메이션 효과를 지연시키는 메서드
stop() : 애니메이션 효과를 중지시키는 메서드

animate() 메서드 문법
- animate({css속성정의}, 시간, 콜백함수)
*/

$(document).ready(function () {
  //animate()
  $(".btn1").click(function () {
    $(".block1").animate(
      {
        left: 100,
        top: 100,
      },
      "slow",
      function () {
        $(this).css("background-color", "red");
      }
    );
  });

  //delay()
  $(".btn2").click(function () {
    $(".block2").delay(0).animate({ left: 300 }, 1000);
    $(".block3").delay(500).animate({ left: 300 }, 1000);
    $(".block4").delay(1000).animate({ left: 300 }, 1000);
  });

  //상대값을 사용하여 적용 : +=, -=을 사용한다
  $(".btn3").click(function () {
    $(".block5").animate(
      {
        left: "+=100",
      },
      "slow"
    );
  });

  //정의된 값을 사용하여 적용
  //width, height 같은 속성은 값에 show, hide, toggle 등 시각효과 메서드를 쓸 수 있다.
  $(".btn4").click(function () {
    $(".block6").animate(
      {
        height: "toggle",
      },
      "slow"
    );
  });

  //Queue(대기열) 적용
  //큐는 먼저 쓴 코드 먼저 실행하고, 나중에 쓴 코드를 실행하는 것을 의미한다.
  $(".btn5").click(function () {
    $(".block7").animate(
      {
        left: 300,
      },
      2000
    );
    //시각효과 메서드나 animate() 메서드에 시간차가 있는 경우 뒤에 명령보다 먼저 실행되지만
    //그 시간을 다른 명령이 기다리지는 않는다.
    // $('.block7').css('background-color','red');

    //animate() 메서드끼리는 큐 방식으로 대기해준다.
    $(".block7").animate(
      {
        left: 0,
      },
      2000
    );
  });

  //stop()
  $(".btn6").click(function () {
    //매개변수 기본값은 false, false 이다
    //첫 번째 매개변수가 true일 때는 큐 대기중인 애니메이션 모두 제거
    //두 번째 매개변수가 true일 때는 진행중인 애니메이션 강제 종료
    $(".block7").stop(true, true);
  });
});
