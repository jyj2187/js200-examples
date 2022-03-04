/*
const URL = 'http://js.com';
URL = 'http://js.com';

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);
*/

const CONST_USER = {name : 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);

// 불변 객체는 아니라서 내부 상태는 변경 가능
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

// 재할당은 되지 않는다. TypeError
CONST_USER = {name: 'bbo'};