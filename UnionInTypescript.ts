//TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type


//Declaring Union type

let num:(string | number);
 num = 123
 console.log(num)
 num = 'Navdeep'

 console.log(num)


 //code on union

 function checkType( test : (string|number|boolean))
 {
   if(typeof(test) == 'string')
   {
       console.log("input is string")

   }
   if(typeof(test) == 'number')
   {
       console.log('input is number')
   }
   if(typeof(test) == 'boolean')
   {
      console.log('input is boolean')

   }
   
 }
 checkType(2555)
 checkType('Navdeep')
 checkType(true)