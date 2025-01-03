const today = new Date();
console.log(console);
console.warn("console");
console.error("console");
console.info("console");
console.debug('This is a debug message');
console.assert(2 + 2 === 5, 'Error: 2 + 2 is not equal to 5');
console.table([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]);

console.table([
    ['John', 30, 45],
    [10, 20, 30]
]);

console.group('Group Name');
console.log('Message 1');
console.log('Message 2');
console.groupEnd();

console.groupCollapsed('Group Name');
console.log('Message 1');
console.log('Message 2');
console.groupEnd();

let table = [];
for (let i = 0; i < 10; i++) {
    table.push(i);
}
console.time('Timer');
table.map(item => console.log(item));
console.timeEnd('Timer');
console.dir(console);
console.createTask('Task Name');

// Array method
Array.map();
Array.filter();
Array.filter();
Array.reduce();
Array.reduceRight();
Array.fill();
Array.find();
Array.indexOf();
Array.lastIndexOf();
Array.findIndex();
Array.includes();
Array.pop();
Array.push();
Array.shift();
Array.unshift();
Array.splice();
Array.slice();
Array.join();
Array.reverse();
Array.sort();
Array.some();
Array.every();
Array.from();
Array.of();
Array.isArray();
Array.at();
Array.copyWithin();
Array.flat();
Array.flatMap();
// given by copilot ❤️
Array.keys();
Array.values();
Array.entries();
Array.forEach();
Array.concat();
Array.toString();
Array.toLocaleString();
Array.length;
Array[Symbol.iterator]();
Array[Symbol.unscopables]();
Array[Symbol.species]();
Array[Symbol.match]();
Array[Symbol.replace]();
Array[Symbol.search]();
Array[Symbol.split]();