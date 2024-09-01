// MAP METHOD LOOPS ON EACH ITEM OF AN ARRAY, PERFORM A SPECIFIED ACTION ON THEM AND RETURNS A NEW ARRAY

const array = [1, 2, 3, 4, 5];

const newArray = array.map((item, index) => {
	console.log(item);
});

console.log(newArray);
