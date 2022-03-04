if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);    // global
// console.log(blockScopeValue);   // ReferenceError

let value = 'outside';
if (true) {
    console.log(value);
    let value = 'inside'    // if문 블록 안에서 let으로 변수를 정의하였기 때문에 
    // 실제 let으로 선언이 이루어지기 전까지 일시적으로 접근이 안 되는 영역을 만들고 
    // 그 안에서 접근을 하게 되면 에러 발생
}