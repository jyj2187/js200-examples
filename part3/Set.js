//.add 값 추가
//.delete 삭제
//.has 확인
//.size 크기 확인

//중복값이 있는 배열을 Set 객체로 변환하면 중복값이 제거된다.
//.keys, .values, .entries 값 나열 keys와 values는 동일하게 처리

// 객체 순환 for-of, foreach

const s = new Set();

s.add('one');
s.add('two');

console.log('Keys Info.');
for (let key of s.keys()) {
    console.log(key);
}

console.log('Values Info.');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for-of, entries]');
for (let [key, value] of s.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}
console.log('[forEach]');
s.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
})