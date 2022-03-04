// 배열 내 값을 누적시킨다.

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
    return acc + el;
}, 0); // 초기값 0(생략가능)

console.log(result);

// 다른 활용 법 : 중첩된 배열을 단일하게 만든다.

const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JS'];

const result2 = arr.reduce((acc, el) =>{
    return acc.concat(el);
}, []);

console.log(result2);