/*To solve problems with var declarations, ES6 introduced two new types of variable declarations in JavaScript, using the keywords let and const. 
TypeScript, being a superset of JavaScript, also supports these new types of variable declarations.*/
let num1:number=5;
function tableofnumber(){
    let i:number=1
    while(i<11)
    {
        let ans:number = num1*i ;
        console.log(ans);
        i=i+1;
    }

}
tableofnumber();