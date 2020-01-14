/*TypeScript has type-checking and compile-time checks.
 However, we do not always have prior knowledge about the type of some variables, especially when there are user-entered values from third party libraries. 
 In such cases, we need a provision that can deal with dynamic content. 
The Any type comes in handy here.*/


let a : any;

a= 233
console.log(a)

a= "Navdeep"

console.log(a)

a= false

console.log(a)

//Array Of Any type

let arr:any[] = [22,true]

arr.push('Anmol')

console.log(arr)
