/*TypeScript introduced a new data type called Tuple. 
There are other data types such as number, string, boolean etc. in TypeScript which only store a value of that particular data type. 
Tuple is a new data type which includes two set of values of different data types.*/

var nam: string = 'Navdeep Duvedi';

var id: number =48;

var employee : [string,number] = ['Navdeep Duvedi',48];

//Array Of tuple

var employee2 : [string,number][] = [['Navdeep Duvedi',48],['Rishab',49],['Anmol',50]];


//Accessing element in Tuples

console.log(employee[0])

console.log(employee[1])

//Adding Element into Tuples

employee.push('Rishabh',2)


console.log(employee);

