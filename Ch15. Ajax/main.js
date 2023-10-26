/*
Ajax
- 자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환하는 통신기능이다.

비동기 방식이란
- 웹 페이지를 리로드 하지 않고 데이터를 불러오는 방식
- 웹 페이지를 리로드하면 리소스가 낭비되는데 비동기 방식을 사용하여 낭비를 줄일 수 있다.
- JSON이나, XML 형태로 필요한 데이터만 받아 갱신한다.

ajax 장점
- 웹 페이지 속도 향상
- 서버의 처리가 완료될 때까지 기다리지 않는다.
- 기존 웹에서 불가능했던 UI를 가능하게 해준다.

ajax 단점
- 보안상의 문제가 있을 수 있다.
- 연속으로 데이터 요쳥 시 서버 과부하가 될 수 있다.
- 히스토리 관리가 안된다.

ajax 문법
    $.ajax({
        type: 'get', //타입 지정
        url: 'url지정', //ajax로 요청할 대상 url 지정
        async: false, //default이 true이며 비동기를 의미한다. 생략가능
        dataType: 'json', //받아올 데이터의 자료형 지정
        data: '데이터값', //요청할 때 보낼 데이터 지정
        success: function(data){}, //ajax요청 성공 시 실행할 이벤트 지정
        error: {}, //ajax 요청 실패 시 실행할 이벤트 지정
        complete: {} //ajax 요청 완료 시 실행할 이벤트 지정
    });
*/

$(document).ready(function () {
  $("#listButton").click(getMemberList);
});

function getMemberList() {
  $.ajax({
    type: "get",
    url: "data.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      let array = new Array();
      data.memberList.forEach(function (member) {
        array.push(
          "<li>이름 : " +
            member.name +
            ", 나이 : " +
            member.age +
            ", 생일 : " +
            member.birth +
            ", 연락처 : " +
            member.tel +
            "</li>"
        );
      });
      $("#result").html(array.join(""));
    },
    error: function () {
      alert("ajax 실패");
    },
  });
}
