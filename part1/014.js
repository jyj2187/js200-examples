var store = {snack: 1000, flower: 5000, beverage: 2000};

for (var item in store) {
    if (!store.hasOwnProperty(item)) continue; // 객체 안에 속성이 있는지 없는지 확인

    console.log(item + '는(은) 가격이 ' + store[item] + ' 입니다.');
}