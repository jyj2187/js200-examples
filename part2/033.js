const symbol = Symbol();
const hello = Symbol('hello'); // symbol에 값을 할당할 수 있지만, 디버깅 용도로 고유의 값은 변하지 않는다.

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol')); // 각 symbol()은 고유의 값을 가진다.
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationality = Symbol('nationality');  // symbol을 객체의 키로 사용할 수 있다.
const user = {
    name: 'jay'
};
user[nationality] = 'korean';   // user 객체 안에 name, nationality 두 개의 키가 있다.
console.log(user[nationality]);

for (let key in user) {  // symbol이 객체의 키로 사용되면 루프를 통해 키를 가져올 수 없다.
    console.log(key);   // 이 경우엔 name만 출력된다.
}
console.log(Object.keys(user)); // 마찬가지로 객체 및 JSON에 대한 메소드로도 불러올 수 없다.
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

// getOwnPropertySymbols를 사용하면 가져올 수 있다.
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);