let user = {
    name: 'Llems'
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); // 속성 기술자 객체
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, 'name', {
    value: 'Llems',
    enumerable: true,
    configurable: true,
    writable: false // 값 변경 불가 속성
});
console.log(user2.name);
user2.name = 'bbo'; // 값이 변경되지 않는다.
console.log(user2.name);

let user3 = {
    name: 'Llems',
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, 'toString', {
    enumerable: false   // 나열 불가능 속성
});
for (let key in user3) {
    console.log(key);   // toString 속성은 나열되지 않고 name만 출력
}
let user4 = {};
Object.defineProperty(user4, 'name', {
    value: 'Llems',
    enumerable: true,
    configurable: false
});
delete user4.name
console.log(user4);
Object.defineProperty(user4, 'name', {
    writable: true
});