// MAP METHOD LOOPS ON EACH ITEM OF AN ARRAY, PERFORM A SPECIFIED ACTION ON THEM AND RETURNS A NEW ARRAY

const array = [1, 2, 3, 4, 5];

const newArray = array.map((item, index) => {
	console.log(item);
});

console.log(newArray); // this will log an array with five undefined items since we didn't return anything in the map method
// [undefined, undefined, undefined, undefined, undefined]

const newArray2 = array.map((item, index) => {
	return item * 2;
});

console.log(newArray2); // this will log [2, 4, 6, 8, 10]
