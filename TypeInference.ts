//Type Inference in TypeScript

/*TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

Types are inferred by TypeScript compiler when:

Variables are initialized

Default values are set for parameters

Function return types are determined*/



var a = "Navdeep";
var b = 123;

console.log(a); // a will be assigned string type without defining

console.log(b);  // b will be assigned number type without defining




//Type inference in complex objects

/*There may be scenarios where an object may be initialized with multiple types.
We have an array that has the values 10, null, 30, and, 40 . 
TypeScript looks for the most common type to infer the type of the object. In this case, it picks the one thats is compatible with all types i.e. number, as well as null.
In such cases, the TypeScript compiler looks for the most common type to infer the type of the object but does not find any super type that can encompass all the types present in the array.
In such cases, the compiler treats the type as a union of all types present in the array.*/


var arr =[0,1,true]

arr.push(2);

arr.push(false);

//Try by taking a string in array with other types and then adding the another string element into it.

console.log(arr);


