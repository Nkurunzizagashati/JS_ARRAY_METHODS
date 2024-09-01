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

console.log(objectItem); // logs undefined
