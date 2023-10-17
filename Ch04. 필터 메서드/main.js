/*
필터 메서드
- 필터메서드는 선택된 문서객체를 다시 재선택하는 메서드이다.

first() : 선택된 문서객체 중 첫번째 객체를 재선택하는 메서드
last() : 선택된 문서객체 중 마지막 객체를 재선택하는 메서드
even() : 선택된 문서객체 중 짝수 객체를 재선택하는 메서드
odd() : 선택된 문서객체 중 홀수 객체를 재선택하는 메서드
eq(n) : 선택된 문서객체 중 배열번호가 n번인 객체를 재선택하는 메서드
filter(기준) : 선택된 문서객체 중 매개변수의 기준에 맞는 객체를 재선택하는 메서드
not(기준) : 선택된 문서객체 중 매개변수의 기준이 아닌 것을 재선택하는 메서드
add('선택자') : 선택된 문서객체와 매개변수의 선택자를 추가로 선택하는 메서드
*/

$(document).ready(function () {
  //선택자방식
  //$("h1:first").css("color", "red");

  //first
  $("h1").first().css("color", "red");

  //last
  $("h1").last().css("color", "red");

  //even
  $("h1").even().css("background", "pink");

  //odd
  $("h1").odd().css("background", "lightblue");

  //eq
  $("h1").eq(2).css("text-decoration", "underline");

  //filter
  $("h1").filter(".second").css("font-weight", "normal");

  //not
  $("h1").not(".second").css("font-style", "italic");

  //add
  $("h1").add("h5").css("font-size", 40);
});
