//.set 추가
//.get 값을 가져옴
//.delete 삭제
//.has 있는지 확인
//.size 요소 개수 확인
//.keys, .values, .entries 요소 나열

// 객체 순환 for-of, foreach

const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log('Keys Info.');
for (let key of map.keys()) {
    console.log(key);
}

console.log('Values Info.');
for (let value of map.values()) {
    console.log(value);
}

console.log('[for-of, entries]');
for (let [key, value] of map.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}
console.log('[for-of]');
for (let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}
console.log('[forEach]');
map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
})

// 순환 두번째 방법

const map2 = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map2.set((value) => value * 2, num);
}

for (let [func, value] of map2) {
    console.log(func(value));
}