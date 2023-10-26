/*
폼 관련 메서드
change() : 요소값이 변경되었을 때 이벤트를 발생시키는 메서드
submit() : 폼 전송을 제어하는 메서드
*/

$(document).ready(function () {
  //change
  //checkbox
  $("#allChk").change(function () {
    let chk = $(this).prop("checked");
    if (chk) {
      $(this).prevAll().prop("checked", true);
    } else {
      $(this).prevAll().prop("checked", false);
    }
  });

  //select
  $("#fruit").change(function () {
    // let fruit = $(this).val();
    let fruit = $("#fruit option:selected").val();

    $(".sel").html("선택하신 과일은 " + fruit + "입니다.");
  });

  //submit
  //submit은 데이터를 전송시키는게 아니고 이벤트의 개념만 가진다.
  $("#joinForm").submit(function (e) {
    e.preventDefault();

    let val1 = $("#id").val();
    let val2 = $("#password").val();

    if (val1 == "" || val2 == "") {
      alert("값을 모두 작성하세요.");
    } else {
      alert("회원가입이 완료되었습니다.");
      //데이터를 전송하는 자바스크립트 문법
      document.joinForm.submit();
    }
  });
});
