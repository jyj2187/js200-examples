// 순환

const arr = [
    {id: 0, name: 'Alpha', age: 6},
    {id: 1, name: 'Bravo', age: 3},
    {id: 2, name: 'Charlie', age: 5},
    {id: 3, name: 'Delta', age: 2},
]

arr.forEach((el) => {
    console.log(el.name);
})