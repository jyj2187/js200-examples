const timer = {
    run: function() {
        if (this.t) console.log('이미 실행된 타이머가 있습니다.');

        this.t = setTimeout(function() {
            console.log('1초 뒤에 실행됩니다.');
        },1000);
    },
    cancel: function(){
        if(this.t) clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.cancel();
timer.run();

setTimeout(() => {
    console.log('JavaScript');
},0);

console.log('200제');
// 이전 setTimeout이 아무리 지연 시간이 0이어도 console.log 다음으로 실행 스택에 쌓인다.