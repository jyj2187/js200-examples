//삼항 연산자
// 조건문 ? 표현문1 : 표현문2
// 조건문이 참이면 표현문1, 거짓이면 표현문2

var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right'); // 거짓이라서 Right
var result = condition ? (
    console.log('first expression'), "expression 1"
) : (
    console.log('second expression'), "expression 2"
); // 거짓이라도 second expression 출력

console.log(result);