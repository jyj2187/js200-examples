const teacherJay = {
    name: 'Jay',
    age: 30,
    teacherJavaScript: function(student) {
        student.gainExp();
    }
};

const studentBbo = {
    name: 'Bbo',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
};

console.log("Bbo's Exp: " + studentBbo.exp);
teacherJay.teacherJavaScript(studentBbo);
console.log("Bbo's Exp: " + studentBbo.exp);

const studentProto = {
    gainExp: function () {
        this.exp++;
    }
};

const llems = {
    name: 'Llems',
    age: 28,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: 'Bbo',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
llems.gainExp();
llems.gainExp();
console.log(llems);
console.log(bbo);