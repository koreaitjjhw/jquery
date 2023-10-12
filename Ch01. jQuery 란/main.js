/* jQuery 란?
- HTML의 조작을 단순화하도록 설계된 크로스 플랫봄 자바스크립트 라이브러리입니다.
- 존 레식이 2006년 뉴욕시 바캠프에서 공식적으로 소개하였다.
- 최근 리액트나 vue.js 같은 자바스크립트 프레임워크가 나오면서 트랜드에 밀리고 있지만
  실무에서 여전히 많이 사용한다.
- jQuery의 목적은 웹사이트에서 javascript를 쉽게 사용할 수 있도록 하는 것이다.
*/

/*
라이브러리 적용
- html, css, javascript 이 세가지는 기본적으로 웹페이지에서 라이브러리 없이 인식하는
  프론트엔드 언어이다.
- 그 외에 자바스크립트 프레임워크들을 사용하려면 라이브러리를 적용해야 한다.
- jQuery를 적용하는 방법은 두 가지가 있다.

1. 다운로드 방식
- jQuery 라이브러리 파일을 다운로드 받아서 <script></script> 태그에 연결하는 방식
 ex) <script src="제이쿼리파일경로"></script>

2. CDN 방식
- 외부 서버(google 등)에 있는 파일을 끌어다 쓰는 방식
 ex) <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
*/

/*
준비구문
-<script></script> 태그가 <body></body> 태그보다 위쪽에 써있는 경우 먼저 코드를 읽기
 때문에 문서객체를 읽지 못한 상태에서 실행되어 명령이 적용되지 않는다.
- 준비구문이란 문서 객체를 먼저 읽고 스크립트구문을 실행하라는 구문이다.
- 준비구문은 크게 세가지 종류를 가진다.

1. $(document).ready(function(){});
- 이미지나 동영상이 다 읽혀지지 않고 DOM만 완성되면 바로 발생하므로 실행속도가 빠르다.

2. $(function(){});
- 위 구문을 줄여서 쓴 축약버전

3. $(window).on('load',function(){});
- 화면에 필요한 요소들이 모두 로딩이 완료된 다음에 실행된다.
- 1번에 비해 속도가 느리다.
- 이미지 높이나 동영상 시간 등을 인식할 때 사용한다.
- 1.8 버전 이하에선 $(window).load(function(){}); 으로 사용한다.
*/

// $(document).ready(function(){});
$(document).ready(function () {
  $("h1").css("color", "red");
});

$(window).on("load", function () {
  let h = $("img").height();
  $(".load").html(h);
});
