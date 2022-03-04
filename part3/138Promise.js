//비동기 처리 객체
//언젠가 완료될 일(계산), 완료되면 값을 반환, 실패하면 이유를 반환

//대기중 Pending
//이행됨 Fulfilled
//거부됨 Rejected
//.then(onFulfilled, onReject) 완료되거나 실패했을 때 호출할 함수
//.catch(onReject) 거부됐을 때 호출될 함수


function promiseforHomework(mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            if(mustDo) {
                resolve({
                    result: 'homework-result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
        }, 3000);
    });
};

const promiseA = promiseforHomework(true);
console.log('promiseA created.');

const promiseB = promiseforHomework();
console.log('promiseB created.');

promiseA.then(v => console.log(v))
promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));