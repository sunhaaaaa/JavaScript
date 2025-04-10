/*
alert-> 알려줌
prompt-> 입력 받음
comfirm-> 확인 받음

alert
메시지를 띄우기 확인 버튼 누르기 전싸지 사라지지 않음
사용자와 상호작용이라기 보다는 알리는 용더(비번틀림, 필수값)

prompt 
사용자에게 값을 입력 받을 때 사용
*/

/*const name =prompt("이름을 입력하세요.", "2020-10-");
alert("환영합니다. "+ name +"님");

prompt()는 브라우저 환경에서만 동작하는 함수이기 때문이기 때문에
현재 Node.js 환경에서 스크립트를 실행하고 있기에
prompt 같은 브라우저 내장 함수는 사용할 수 없다. 

두번째 값은 default 값

const isAdult = confirm("당신은 사람입니까?");
console.log(isAdult);

confirm 또한 브라우저 함수

단점
1. 스크립트 일시 정지
2. 스타일링 할 수 없음
-> 하지만 장점이 많아 여전히 자주 사용된다. 
*/
