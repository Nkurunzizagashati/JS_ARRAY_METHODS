// FLAT METHOD
// If you have an array nested inside another and you want to have all
// the elements in one array, you can use flat()
// flat() takes in the depth, what I mean is forexample you might have
// an array with one elemet which is an array also and that element has
// an array also in it's elements you might use for example the value of
// depth as 1 for example to retrieve the elements of the array in the parent
// array go on the same level as the parent array's elements.

const array = [1, 2, [3, 4, [5, 6]], 7, 8];

const flatenedArray = array.flat(1);

console.log(flatenedArray); // it logs [1, 2, 3, 4, [5, 6], 7, 8]

const flattenedArray2 = array.flat(2);
console.log(flattenedArray2); // it logs [1, 2, 3, 4, 5, 6, 7, 8]

// SOMETIMES YOU MAY NOT KNOW HOW MANY LEVELS OF NESTING YOU HAVE
// IN YOUR ARRAY AND YOU WANT ALL OF THE ELEMENTS TO BE IN ONE PARENT ARRAY

// In that case you can use "infinity" as the value of depth

const flattenedArray3 = array.flat(Infinity);

console.log(flattenedArray3); // it logs [1, 2, 3, 4, 5, 6, 7, 8]
