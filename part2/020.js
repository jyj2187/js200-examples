var cart = [
    {name: 'clothes', price: 2000},
    {name: 'bag', price: 1000}
];
var numOfItems = `${cart.length} items in the cart.` //템플릿 문자열 저장
var cartTable = 
`<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>`
console.log(numOfItems); //템플릿 문자열 출력
console.log(cartTable); //템플릿 문자열을 이용한 html문서 출력

var personName = 'sale';
var helloString = 'hello ' + personName; // 문자열
var helloTemplateString = `hello ${personName}`; //템플릿 문자열
console.log(helloString === helloTemplateString); //둘의 결과는 같다.
console.log(typeof helloTemplateString); // 스트링