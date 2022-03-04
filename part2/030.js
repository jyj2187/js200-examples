var address = 'Seoul';
var members = {};
var addFamily = function (age, name, role) {
    this.members[role] = { age, name };
};  // family 안에 member에 나이, 이름, 역할을 저장.
var getHeadcount = function () {
    return Object.keys(this.members).length;
};   // members의 키들을 모아 그 길이(개수)를 반환.

// 미리 선언한 속성들을 객체 변수에 삽입. 
var family = { address, members, addFamily, getHeadcount };

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(30, 'dangdang', 'dog');
console.log(family.getHeadcount());

console.log(family)