//An if statement can include one or more expressions which return boolean. If the boolean expression evaluates to true, a set of statements is then executed.

var a : number = 20;

var b: number = 30;

var c: number = 30;
if(a>b)
{
    console.log("a is greater than b ")

}

else
{
    console.log("b is greater than a")

}


//Else-IF

if(c>b)
{
    console.log("c is greater than b ")

}

else if(c == b )
{
    console.log("c and b are equal")

}
else{
    console.log("b is greater than c")


}

//Ternary operator

/*A ternary operator is denoted by '?' and is used as a short cut for an if..else statement. 
It checks for a boolean condition and executes one of the two statements, depending on the result of the boolean condition.*/

let x: number = 10, y = 20;

x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')

