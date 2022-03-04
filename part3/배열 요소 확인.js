const arr = [
    {id: 0, name: 'Alpha', age: 6},
    {id: 1, name: 'Bravo', age: 3},
    {id: 2, name: 'Charlie', age: 5},
    {id: 3, name: 'Delta', age: 2},
]

//some - 배역 요소가 특정 조건을 만족하는지 확인
const isCharlieHere = arr.some(el => el.name == 'Charlie');
const olderThansix = arr.some(el => el.age > 6);
console.log(isCharlieHere);
console.log(olderThansix);

//every - 모든 배열 요소가 특정 조건을 만족하는지 확인
const isAllCharlie = arr.every(el => el.name == 'Charlie');
const youngerThanSevenAll = arr.every(el => el.age < 7);
console.log(isAllCharlie);
console.log(youngerThanSevenAll);

//find 배열의 특정 조건을 충족하는 요소 찾기
arr.push({name: 'Echo', age: 30},);
const myFriend = arr.find(a => a.age == 30);
console.log(myFriend);

//map 요소 일괄 변경
const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});
const arr3 = arr.map(el => el.name);
console.log(arr2);
console.log(arr3);