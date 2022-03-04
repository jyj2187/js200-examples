var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
    // c는 if 문 안에 있지만 var 키워드로 선언되어서 
    // 함수 내에서라면 어디서든 접근 가능
}

print();
// console.log(b);
// 함수 스코프에 정의된 변수 b는 해당 함수 내에서만 접근 가능
// 함수 밖에서는 접근 불가능.

var c = 'global';

function print2() {
    console.log(c);
}

function print3() {
    var c = 'local';
    print2();
}

print2();
print3();
// 자바스크립트는 렉시컬(정적) 스코프.
// 코드를 작성하는 시점에 확정되기 때문에 처음에 작성한 전역 변수('global) 출력.