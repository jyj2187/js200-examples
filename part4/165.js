const util = require('util');

const name = 'Tony';
const greeting = util.format('Hello %s', name); // 내장 모듈
console.log(greeting);