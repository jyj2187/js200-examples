function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));   // 1은 0번째 위치.
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

/*정리
arguments는 전달 인자.
매개변수 수를 정해놓지 않고 여러 인자를 받을 때.
그 함수 안에서만 작동하는 인자.
배열이 아니다. 
Array.prototype.slice.call(arguments)를 호출하여 배열로 바꿀 수 있다.

나머지 매개변수는 기본으로 받을 매개 변수를 정해놓고
추가적으로 전달 받을 변수를 선언하는 것
나머지 매개변수는 배열로 전달되고 
각 변수들은 [나머지] 배열의 요소이다.
*/