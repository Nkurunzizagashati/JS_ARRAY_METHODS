// forEach method is similar to map method, it also loops through each
// and every item of the array, perform the specified action,
//  but unlike map method, it does not return anything.

const array = [1, 2, 3, 4, 5];

// We can print each item of the array using the forEach() method

array.forEach((item, index) => {
	console.log(`at index ${index} we have ${item}`);
});
