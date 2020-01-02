'use strict';

const array = () => {
	const arr = [];
	const fn = i => arr[i];
	fn.push = x => arr.push(x);
	fn.pop = () => arr.pop();
	return fn;
};


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined

module.exports = { array };
