var hometown = [
    {name: '진', place: '과천'},
    {name: '남준', place: '일산', city:'고양'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
];

var isHometown = function(h, name) {    // 템플릿 리터럴${} 사용을 위해선 백틱(`)을 사용해야 한다.
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을(를) 찾습니다.`);

    if (h.name === name) {
        console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()) {  //shift()는 배열의 앞에서부터 값을 하나씩 빼내오는 함수.
    if (!h.name || !h.place || !h.city) continue;

    var result = isHometown(h, '호석');
    if (result) break;
}

var i = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];
do{
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while (i < 4);

console.log(hometown);