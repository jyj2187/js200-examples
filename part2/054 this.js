this.valueA = 'a';  // Window 객체를 가리킨다.
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
    console.log(this);  // Window 객체를 가리킨다.
}
function checkThis2() {
    "use strict";   // 엄격한 모드
    console.log(this);  // undefined
}
checkThis();
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}
const product1 = Product('bag', 2000);
// new 키워드 없이 호출하면 Window 객체를 가리킨다.
console.log(window.name);
console.log(window.price);  
const product2 = {
    name: 'bag2',
    price: 3000,
    getVAT() {
        return this.price / 10; // product2의 price 3000
    }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();  // 일반적인 함수 호출 => 전역 객체 가리킨다.
console.log(VAT2); // 전역에 저장된 2000

const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);  // bind 메소드로 this의 값을 전역에서 product2로 변경

const counter1 = {
    count: 0,
    addAfter1Sec() {
        setTimeout(function () {
            this.count += 1;    // 중첩 함수에선 전역 객체를 가리킨다. NaN
            console.log(this.count);
        }, 1000);
    }
};
counter1.addAfter1Sec();

const counter2= {
    count: 0,
    addAfter1Sec() {
        setTimeout(() => {  // 화살표 함수는 작성 시점에서 부모환경의 this
            this.count += 1;    // 단, 변경 불가능.
            console.log(this.count);
        }, 1000);
    }
};
counter2.addAfter1Sec();