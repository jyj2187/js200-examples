const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
numArr1.sort(function(a, b) {return a - b;});
numArr2.sort(function(a, b) {return b - a;});

const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Chloe'},
]
objArr.sort(function(a,b) {
    if (a.name > b.name) return 1;  // a가 b보다 크면 a를 b 앞에 정렬
    else if (b.name > a.name) return -1;    // b가 a보다 크면 b를 a 앞에 정렬
    else return 0;  // 둘의 값이 같으면 변경하지 않음
})

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);