/*
문서객체 관련 메서드
- 문서객체를 추가/이동/복제/삭제 한다.

append() : $('A').append('B'); - A의 마지막 자손으로 B를 추가하는 메서드
prepend() : $('A').prepend('B'); - A의 첫번째 자손으로 B를 추가하는 메서드
after() : $('A').after('B'); - A의 동생으로 B를 추가하는 메서드
before() : $('A').before('B'); - A의 형으로 B를 추가하는 메서드
appendTo() : $('A').appendTo('B'); - B의 마지막 자손으로 A를 추가하는 메서드
prependTo() : $('A').prependTo('B'); - B의 첫번째 자손으로 A를 추가하는 메서드
insertAfter() : $('A').insertAfter('B') - B의 동생으로 A를 추가하는 메서드
insertBefor() : $('A').insertBefore('B') - B의 형으로 A를 추가하는 메서드
clone() : $('선택자').clone(); - 선택된 문서객체를 복제하는 메서드
remove() : $('선택자').remove(); - 선택된 문서객체 자체를 삭제하는 메서드
empty() : $('선택자').empty(); - 선택된 문서객체 내부의 자손/후손 삭제하는 메서드
*/

$(document).ready(function () {
  //동적으로 문서객체 생성
  let newObj = $("<div>");
  newObj.attr("class", "obj2");

  //추가/이동 메서드
  //append()
  $(".btn1").click(function () {
    $(".box").append(newObj);
  });

  //prepend()
  $(".btn2").click(function () {
    $(".box").prepend(newObj);
    //이렇게 추가하면 동적할당이 아니라 이동이 안되고 계속 추가됌
    //$(".box").prepend('<div class="obj2"></div>');

    //선택자와 메서드를 반대로 적을 뿐 결과는 같다
    //$(newObj).prependTo(".box");
  });

  //after()
  $(".btn3").click(function () {
    $(".box").after(newObj);
  });

  //before()
  $(".btn4").click(function () {
    $(".box").before(newObj);
  });

  //복제 메서드
  //clone()
  $(".btn5").click(function () {
    //그냥 복제하면 요소가 많아져서 first() 메서드로 첫번째만 복제
    $(".obj1").first().clone().appendTo(".box");
  });

  //삭제 메서드
  //remove()
  $(".btn6").click(function () {
    $(".box").remove();
  });

  //empty()
  $(".btn7").click(function () {
    $(".box").empty();
  });
});
