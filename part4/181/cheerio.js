const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

fs.readFile('./example.html', (err, data) => {
    if (err) return console.log(err);

    const $ = cheerio.load(data);

    console.log($(`#body`, '#html').find('li').length);
    console.log($(`.son`, '#people').text());
});
request('http://ko.wikipedia.org/wiki/HTML', (err, res, html) => {
    if (err) return console.log(err);
    if (res && res.statusCode >= 400) return console.log(res.statusCode);

    const $ = cheerio.load(html);
    console.log($('div[class=toc]').children().find('a').text());
});

// $(selector, [context], [root]) : 원하는 선택자를 찾는 메소드
// .find() : selector를 필터링하여 일치하는 요소의 현재 세트에서 자손을 가져옵니다.
// .text() : 일치하는 선택자 요소 집합의 텍스트 내용을 가져옵니다. 자손 포함.