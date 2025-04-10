/*문자열 변수는 항상 "을 이용한다. 
alert-> 경고창 띄우기
console.log-> 로고 띄우기

let-> 한 번 선언 후 다른 값으로 바꿀 수 있음
const-> 한 번 선언 후 절대로 바뀌지 않는 상수
예를 들어 파이, 생일 등 -> 대문자가 좋음

팁: 모든 변수를 const로 잡고 바뀔 여지가 있으면 let으로 변경한다. 

변수에 대한 규칙들
1. 변수는 문자, 술자 $와 _만 사용 가능
2. 예약어 안 됨
3. 첫 글자는 숫자 안 됨
4. 가급적 대문자 사용
5. 변수명은 읽기 쉽고 이해하기 쉽게 

`-> 백틱은 문자열 내부의 변수를 표현할 때 쓴다. 
*/
const name ="Mike";

const age= 30;
const PI= 3.14;

const name1 ="Mike"
const name2= 'Mike'
const name3= `Mike`

const message = "I'm a boy.";
const message2= 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 =`나는 ${30+1}살 입니다`;


console.log(message4);

/*
null-> 존재하지 않는다. 
undefined-> 값이 할당되지 않았다.
-> 변수를 선언만 하고 아무것도 할당하지 않았을 때
*/

//typeof 얀산자
//-> 다른 개발자가 작성한 변수의 타입을 알아야 할 때, API를 타입에 따라 다른 방식으로 처리해야 할 때
//const name ="Mike"
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "XXX");
console.log(typeof null);//object: 객체형 
console.log(typeof undefined);
