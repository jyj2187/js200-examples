var x = 5; // 숫자형
var y = 'five'; // 문자형
var isTrue = true; // Boolean
var empty = null; // null
var nothing // undefined
var sym = Symbol('me'); // Symbol

var item = {
    price : 5000,
    count : 10
}; // 객체(object)
var fruits = ['apple', 'orange', 'kiwi']; // 배열(array)
var addFruit = function (fruit) {
    fruits.push(fruit)
} // 함수(function)
addFruit('watermelon');
console.log(fruits);