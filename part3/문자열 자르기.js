console.log('slice 메소드');
const sentence = 'The sun will shine on us again';
// 문자열.slice(시작 인덱스, 종료 인덱스)
console.log(sentence.slice(13)); // 13번째 문자부터 출력
console.log(sentence.slice(13, 24)); // 13번째 문자부터 24번째 문자까지 출력
console.log(sentence.slice(0));  // 0번째 문자부터 출력
console.log(sentence.slice(0, -23)); // 0번째 문자부터 뒤에서 23번째 문자까지 출력
console.log(sentence.slice(50)); // 시작 인덱스가  문자열의 길이보다 크면 빈 값을 반환
console.log(sentence.slice(7, 2)); // 시작 인덱스가 종료 인덱스보다 크면 출력되지 않음

console.log('substring 메소드');
const sentence2 = 'This will be the end of Wakanda';
// 문자열.substring(시작 인덱스, 종료 인덱스)
console.log(sentence2.substring(13)); // 13번째 문자부터 출력
console.log(sentence2.substring(13, 20)); // 13번째 문자부터 20번째 문자까지 출력
console.log(sentence2.substring(0));  // 0번째 문자부터 출력
console.log(sentence2.substring(0, -20)); // 음수를 넣으면 실행하지 않는다
console.log(sentence2.substring(50)); // 시작 인덱스가  문자열의 길이보다 크면 빈 값을 반환
console.log(sentence2.substring(20, 13)); // 시작 인덱스가 종료 인덱스보다 크면 서로의 위치를 바꿔서 실행한다 (13, 20)

console.log('substr 메소드');
const sentence3 = 'Wakanda Forever!!!';
// 문자열.substr(시작 인덱스, 길이)
console.log(sentence3.substr(8)); // 8번째 문자부터 출력
console.log(sentence3.substr(8,7)); // 8번째 문자부터 7개의 문자를 출력
console.log(sentence3.substr(0));  // 0번째 문자부터 출력
console.log(sentence3.substr(-10));  // 뒤에서 10번째 문자부터 출력
console.log(sentence3.substr(0, -3)); // 두번째 인자(길이)에 음수를 넣으면 실행하지 않는다
console.log(sentence3.substr(30)); // 시작 인덱스가  문자열의 길이보다 크면 빈 값을 반환
console.log(sentence3.substr(0, 30)); // 길이가 문자열 길이보다 크면 마지막 문자까지 출력