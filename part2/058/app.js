import {add, Person, version} from './hello.js';
// personA는 불러오지 않았다.

const result = add(1,2);
const llems = new Person('Llems');

console.log(result);
console.log(llems.name);
console.log(version);

//만약 personA를 불러왔을 때
//personA = 'v2'; <- 오류 발생
// 다른 모듈에서 가져온 이름은 오직 읽기만 가능하다.