function checkNumber(val){
    if (typeof val !== 'number') throw 'An Invalid value.';
    console.log('number type value');
}

try {
    checkNumber(100);
    checkNumber('123');
} catch (e) {   // throw 문의 문자열이 대입.
    console.log(`It has occured an error. >>> ${e}`);
} finally {
    console.log('finish');
}

/*
checkNumber(100);
checkNumber('123');
console.log('finish.')
*/