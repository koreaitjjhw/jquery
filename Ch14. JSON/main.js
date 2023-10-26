/*
JSON
- JSON은 javascript object nation의 약자
- 자바스크립트에서 데이터를 객체 표기법으로 나타내는 것을 의미한다.
- JSON을 사용하는 이유는 웹 서버와 데이터를 교환하기 위해서

JSON 문법
- javascript 객체에서 키명을 큰따옴표로 처리해준 형태
- js: {key1: value1, key2: value2}
- json: {"key1": value1, "key2": value2}

JSON 값
- 문자열, 숫자, 객체, 배열, true/false, null 중에 하나여야 합니다.
- 문자: {"name": "홍길동"}
  숫자: {"age": 30}
  boolean: {"email": true}
  객체: {"member": {"name": "홍길동", "age": 30, "email": true}}
  배열: {"member": ["홍길동", "김길동", "박길동"]}
  null: {"tel": null}

JSON.parse()
- JSON형태의 문자열을 객체 데이터로 바꿔줍니다.
JSON.stringify()
- 객체 데이터를 JSON형태의 문자열로 바꿔줍니다.
*/

/*
localStorage
- 브라우저에서 제공하는 API로 데이터를 저장할 수 있다.
- 데이터의 영속성은 동일한 컴퓨터, 동일한 브라우저를 사용할 때만 해당된다.
- 데이터를 저장할 때 문자열 데이터 타입만 지원한다.
- setItem() 메서드는 저장소에 데이터를 저장한다. 매개변수는 (키, 값)
- getItem() 메서드는 저장에서 데이터 항목을 검색한다. 매개변수는 (키)

API
- 라이브러리는 함수들의 집합이라면, API는 라이브러리에 접근하기 위한 규칙을 정의한 것
*/

$(document).ready(function () {
  //JSON.parse()
  let originData =
    '{"name": "홍길동", "age": 30, "email": "test@naver.com", "birth": "2020-01-01"}';
  console.log(typeof originData);

  let changeData = JSON.parse(originData);
  console.log(changeData);

  //날짜타입은 JSON에서 객체로 변환될 때 허용되지 않는다.
  let birth = new Date(changeData.birth);

  $(".name").html(changeData.name);
  $(".age").html(changeData.age);
  $(".email").html(changeData.email);
  $(".birth").html(birth);

  //JSON.stringify()
  let objectData = {
    name: "전길동",
    age: 50,
    birth: "1999-10-10",
  };

  console.log(objectData);
  console.log(typeof objectData);

  let jsonData = JSON.stringify(objectData);

  console.log(jsonData);
  console.log(typeof jsonData);

  //localStorage
  //데이터 저장
  let myObj = { name: "홍길동", age: 99, birth: "2000-02-02" };
  let myJson = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJson);

  //데이터 호출
  let json = localStorage.getItem("testJSON");
  let obj = JSON.parse(json);
  console.log(obj);
});
