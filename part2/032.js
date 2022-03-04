var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, c } = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >>> ${newA}`);    // 이미 a 값이 있으니 10이 아닌 1
console.log(`newF >>> ${newF}`);    // f는 obj 안에 없으니 새로운 속성 및 값 5로 할당된다.

var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;  // ... 나머지 변수 지시자
console.log(`0) b >>> ${b}`);   // 1
console.log(`0) c >>> ${c}`);   // 2
console.log(`0) rest >>> ${rest}`); // 30, 44, 5

var [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`);   // a의 값은 1이 들어간다. 
console.log(`1) f >>> ${f}`);   // f의 값은 초기화되어 있지 않으니 9가 들어간다.

[a, f] = [f, a];  //값을 서로 바꿈.
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();      // 가운데 네 요소를 제외한 양 쪽 끝 값만 할당
console.log(`3) a >>> ${a}`);   // 배열의 첫번째 값인 1이 들어간다.
console.log(`3) f >>> ${f}`);   // 배열의 마지막 값인 6이 들어간다.