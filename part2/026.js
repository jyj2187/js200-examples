//자료형 변환

console.log("5" + 1);   // 문자열
console.log("5" - 1);   // 숫자
console.log("5" * 2);   // 숫자
console.log("There is " + 5);   // 문자열
console.log("Five" * 2);    // 문자와 숫자는 곱할 수 없다.

console.log('- 연산자 활용');
var str = 5 + "1"
console.log(str);
console.log(typeof str);

var num = +str; // 문자열을 숫자형으로 변환
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);