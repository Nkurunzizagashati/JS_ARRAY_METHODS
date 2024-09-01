// find() method returns the first elelment of the array that meets the criteria

const array = [1, 2, 'Fabrice', 3, 4];

// Let's find the string in hte above array

const stringItem = array.find((item, index) => {
	return typeof item === 'string';
});

console.log(stringItem); // logs Fabrice

// If no element that meets the criteria, it returns undefined

// Let's find find an element with type 'object' in the above array

const objectItem = array.find((item, index) => {
	return typeof item === 'object';
});
const arrayItem = array.find((item, index) => {
	return Array.isArray(item);
});

console.log(arrayItem); // logs undefined

console.log(objectItem); // logs undefined

// ========================================
// findIndex()
// ========================================

// Unlike find method, findIndex() returns the index of the first element matching
// the specified criteria, if no element found, it returns -1

const indexOfString = array.findIndex((item, index) => {
	return typeof item === 'string';
});

console.log(indexOfString); // logs 2

const indexOfString2 = array.findIndex((item, index) => {
	return Array.isArray(item);
});

console.log(indexOfString2); // logs -1
