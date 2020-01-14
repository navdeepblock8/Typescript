let num:number = 72062;
let num2:number = 7.2062
//toExponential()

/*The toExponential method returns the exponential notation of a number in string format, based on the specified fraction digits.*/

var a :string = num.toExponential();
console.log(a);
a =  num.toExponential(1);
console.log(a);
a =  num.toExponential(2);
console.log(a);

//toFixed()

/*The toFixed method returns the fixed-point notation of a number in string format*/

var a :string = num2.toFixed();
console.log(a);
a =  num2.toFixed(1);
console.log(a);
a =  num2.toFixed(2);
console.log(a);


//toLocaleString()

/*The toLocaleString method converts the number into a local specific representation of the number.
This function takes in two arguments: the locale, and an optional options argument representing the locale to which you would like to get the equivalent number representation.*/

var a :string  = num.toLocaleString();
console.log(a); //US Representation

//toPrecision()
/*The toPrecision method returns the string representation in exponential or fixed-point to the specified precision.*/

var a :string = num2.toPrecision(1);
console.log(a);
a =  num2.toPrecision(2);
console.log(a);
a =  num2.toPrecision(3);
console.log(a);

//toString()

/*The toString method returns a string representation of the number in the specified base.*/


var a :string = num2.toString();
console.log(a);
a =  num2.toString(2);
console.log(a);
a =  num2.toString(4);
console.log(a);
a =  num2.toString(8);
console.log(a);
a =  num2.toString(16);
console.log(a);
a =  num2.toString(32);
console.log(a);

