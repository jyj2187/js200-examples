const str = 'hello';

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const products = [{name: 'bag'}, {name: 'Notebook'}];

for (item of products) {
    console.log(item.name);
}

const iter2 = products[Symbol.iterator]();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());