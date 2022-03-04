// 현재 연 월 일 출력
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());

// UTC 기준 시간 출력
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));

// 두 날짜 사이의 경과 시간 계산
Date.daysDiff = (date1, date2) => {
    if(!(date1 instanceof Date) || !(date2 instanceof Date)) return '';

    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;

    const seconds = Math.floor((diff = diff / 1000) % 60);
    const minutes = Math.floor((diff = diff / 60) % 60);
    const hours = Math.floor((diff = diff / 60) % 24);
    const days = Math.floor(diff / 24);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds}, seconds`
}

var from = new Date(2000, 0, 1);
var to = new Date();

console.log(`From   > ${from}`);
console.log(`To   > ${to}`);
console.log(Date.daysDiff(from, to));