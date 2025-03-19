// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

actually there is a mistake in splice method....splice not includes last index value but it takes number of values given from starting index.....for ex: arr = [2,3,4,5,6,7,8,9] and then console.log(arr.splice(3,4)); gives 5,6,7,8.....however thank u so much hitesh sir for such valuable series...you are my favourite teacher


My notes of this video: 
// Array can be a group of mixed datatypes. It may include number, string or anther array too
// It has zero based indexing.
// arrays are resizable
// the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies.
// A shallow copy (original copy) of an object is a copy whose properties share the same references (point to the same underlying values) 
// A deep copy (duplicate copy) of an object is a copy whose properties do not share the same references
// Array is always defined under []

let arr = [1,2,"pranjal",true,5];// is same as
let arr_ = new Array(1,2,3,4);

// to add elements
arr.push(6);
console.log(arr);

//to delete last value
arr.pop();
console.log(arr);

// To insert elements at the start. but it is not good as all the elements get shifted increasing the load
arr.unshift(10);
console.log(arr);

// To delete elements at the start
arr.shift();
console.log(arr);

// Does it include the specified element. Returns boolean
console.log(arr.includes(56));

// Index of element that does'nt exist is -1
console.log(arr.indexOf(90)); 


// Most important interview question: difference betn slice and splice
let Myarr = [1,2,3,4,5];
console.log("A ",Myarr);// The original array

let slice = Myarr.slice(1,3);// slices out element from 1 to 2 excluding 3 and original array remains same
console.log(slice);
// After slicing
console.log("B ",Myarr);

let splice = Myarr.splice(1,3);// splices out elements permanently from 1 to 3 including 3 too and manipulates the original array
console.log(splice);
// after splicing
console.log("C ", Myarr);
*/