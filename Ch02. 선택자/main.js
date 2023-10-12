/*
선택자
- jQuery는 javascript에서 파생됐기 때문에 객체선택 방식을 사용한다.
- 객체선택이 쉬워진 것이 특징이다.
- 셀렉터라고도 합니다.
*/

/*
Element 관련 선택자
*             : $('*') - 모든 문서객체를 선택
element       : $('h1') - 특정 태그를 모두 선택
#id           : $('#text') - 작성된 아이디값을 갖는 문서객체를 선택
.class        : $('.text') - 작성된 클래스값을 갖는 문서객체를 선택
[속성='값']   : $('input[type=text]') - 해당 요소의 태그속성명과 속성값이 갖는 문서객체를 선택
A > B         : $('div > ul') - 앞에 작성된 요소의 자식인 요소를 선택
A B           : $('div ul') - 앞에 작성된 요소의 후손인 요소를 선택
A + B         : $('h1 + h2') - 앞에 작성된 요소의 바로 뒤에 있는 동위선택자를 선택
A ~ B         : $('h1 ~ h2') - 앞에 작성된 요소 뒤에 있는 모든 동위선택자를 선택
:not()        : $('h1:not(.text)') - 앞에 작성된 요소 중 괄호 안의 클래스명이 아닌 것들 선택
:nth-child(n) : $('div:nth-child(n)') - 해당 요소 중 n번째 작성된 요소를 선택
:first-child  : $('div:first-child') - 해당 요소 중 첫번째로 작성된 요소를 선택
:last-child   : $('div:last-child') - 해당 요소 중 마지막으로 작성된 요소를 선택
:nth-child(odd)  : $('div:nth-child(odd)') - 해당 요소 중 홀수번째 작성된 요소를 선택
:nth-child(even) : $('div:nth-child(even)') - 해당 요소 중 짝수번째 작성된 요소를 선택
:eq(n)        : nth-child(n) 와 같다
:first        : first-child 와 같다
:last         : last-child 와 같다
:odd          : nth-child(odd) 와 같다
:even         : nth-child(even) 와 같다
:gt(n)        : $('div:gt(n)') - 해당 요소 중 배열번호가 n보다 큰 요소를 선택
:lt(n)        : $('div:lt(n)') - 해당 요소 중 배열번호가 n보다 작은 요소를 선택
 -- eq(n), first, last, odd, even, gt, lt 배열 선택자라서 순번이 0부터 시작된다.
*/

/*
input 관련 선택자
:input          : $('*:input') - 모든 input 요소를 선택
:text           : $('input:text') - input 태그 중 type 값이 text인 요소를 선택
:password       : $('input:password') - input 태그 중 type 값이 password인 요소를 선택
:radio          : $('input:radio') - input 태그 중 type 값이 radio인 요소를 선택
:checkbox       : $('input:checkbox') - input 태그 중 type 값이 checkbox인 요소를 선택
:submit         : $('input:submit') - input 태그 중 type 값이 submit인 요소를 선택
:reset          : $('input:reset') - input 태그 중 type 값이 reset인 요소를 선택
:button         : $('input:button') - input 태그 중 type 값이 button인 요소를 선택
:file           : $('input:file') - input 태그 중 type 값이 file인 요소를 선택
:enabled        : $('input:enabled') - input 태그 중 사용가능한 요소를 선택
:disabled       : $('input:disabled') - input 태그 중 사용 불가능한 요소를 선택
:selected       : $('option:selected') - option 태그 중 선택된 요소를 선택
:checked        : $('input:checked') - input 태그 중 체크된 요소를 선택
*/

$(document).ready(function () {
  // 전체 선택자
  $("*").css("font-size", 30);

  // 태그
  $("h3").css("text-decoration", "underline");

  // 아이디
  $("#text01").css("color", "red");

  // 클래스
  $(".odd").css("color", "pink");
  $(".even").css("color", "lightblue");

  // 속성
  $("p[name=name1]").css("color", "blue");
  $("p[name=name2]").css("color", "green");

  // 자손
  $(".list > li").css("font-weight", "bold");

  // 후손
  $("body .listA").css("font-style", "italic");

  // A + B
  $(".listA + li").css("color", "red");

  // A ~ B
  $(".listA ~ li").css("text-decoration", "underline");

  // not
  $(".list > li:not(.listA)").css("list-style", "none");

  // 배열 선택자
  // eq
  //   $("div:nth-child(1)").css("background", "red");
  $("div:eq(0)").css("background", "red");
  $("div:eq(1)").css("background", "orange");
  $("div:eq(2)").css("background", "yellow");
  $("div:eq(3)").css("background", "green");
  $("div:eq(4)").css("background", "blue");
  $("div:eq(5)").css("background", "navy");
  $("div:eq(6)").css("background", "purple");

  // first, last
  $("div:first").css("border-radius", "10px 0 0 10px");
  $("div:last").css("border-radius", "0 10px 10px 0");

  // odd, even
  $("div:odd").css("color", "white");
  $("div:even").css("color", "black");

  // gt, lt
  $("div:gt(3)").css("text-decoration", "underline");
  $("div:lt(3)").css("font-style", "italic");

  // input 선택자
  $("input:text").css("border", "1px solid red");
  $("input:password").css("border", "1px solid blue");
});
