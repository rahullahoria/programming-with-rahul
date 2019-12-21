##How to crack a Javascript Interview?

#Let's see some Javascript Interview question:


1. What is isNaN in Javascript?

This function returns true if the value equates to NaN. Otherwise it returns false.

eg.
isNaN(123) //false
isNaN(-1.23) //false
isNaN(5-2) //false
isNaN(0) //false
isNaN('123') //false
isNaN('Hello') //true
isNaN('2005/12/12') //true
isNaN('') //false
isNaN(true) //false
isNaN(undefined) //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN(0 / 0) //true

2. What are undeclared, null and undefined variables?

Undefined

It means a variable has been declared but has not yet been assigned a value?
var a;
console.log(a); //undefined
console.log(typeof a); // undefined
You can see type is also undefined.

Null

It can be assigned to a variable to represent no value. It is an assignment value?

var b = null;
console.log(b); //null
console.log(typeof b); //object
Here the type is object.

Undeclared

If a variable is not declared then the browser throws error.
console.log(nonDeclaredVariable);
 
// Uncaught ReferenceError: nonDeclaredVariable is not defined
//    at <anonymous>:1:13
 
console.log(typeof nonDeclaredVariable); //undefined




3. What is different between global variable, var & let ?

A JavaScript global variable is declared outside the function or declared with window object. It can be accessed from any function.

Let’s see the simple example of global variable in JavaScript.

<script>  
var value=50;//global variable  
function a(){  
alert(value);  
}  
function b(){  
alert(value);  
}  
</script> 

var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.

for(var i=0;i<10;i++){
console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log(i); //throws an error as "i is not defined" because i is not visible

for(let i=0;i<10;i++){
console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log(i); //throws an error as "i is not defined" because i is not visible




4. What is 'this' keyword in JavaScript?

const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

5. Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any?
6. What is === operator?
7. Typecasting is javascript?
8. What is the 'Strict' mode in JavaScript and how can it be enabled?
9. Describe the properties of an anonymous function in JavaScript?
10. What is Callback?
11. What is the difference between null & undefined?
12. For making array empty what is different between arrayList = [] and arrayList.length = 0?
13. What is the instanceof operator in JavaScript?
14. How to determine something is array?
15. Synchronous and asynchronous function?
16. What is type coercion?
17. What is hoisting?
18. What is closure?
