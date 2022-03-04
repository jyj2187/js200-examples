var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },  // family 안에 member에 나이, 이름, 역할을 저장.
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }   // members의 키들을 모아 그 길이(개수)를 반환.
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(30, 'dangdang', 'dog');

var printMembers = function () {
    var members = family.members;
    for (role in members) {
        console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
    }
};
printMembers();

var members = family.members;
members['nephew'] = { age: 3, name: 'hyun' };
members.niece = { age: 5, name: 'lyn' };
delete members.aunt;
delete members['dog'];
printMembers();