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

Timing Events
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.


6. What is === operator?

The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.
But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.


7. Typecasting is javascript?

Number("5.6.7") //NaN
parseInt("5.5.5") //5
ParseFloat("5.5.5") //5.5

8. What is the 'Strict' mode in JavaScript and how can it be enabled?

Example
"use strict";
x = 3.14;       // This will cause an error because x is not declared

Example
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

9. Describe the properties of an anonymous function in JavaScript?

Anonymous function definition:

var anon = function() {
  alert('I am anonymous');
}
anon();
One common use for anonymous functions is as arguments to other functions. Another common use is as a closure, for which see also the Closures chapter.

Use as an argument to other functions:

setTimeout(function() {
  alert('hello');
}, 1000);


10. What is Callback?

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});

11. What is the difference between null & undefined?

null is an assigned value. It means nothing.
undefined means a variable has been declared but not defined yet.
null is an object. undefined is of type undefined.
null !== undefined but null == undefined.

12. For making array empty what is different between arrayList = [] and arrayList.length = 0?

13. What is the instanceof operator in JavaScript?

14. How to determine something is array?

if (value instanceof Array) {
  alert('value is Array!');
} else {
  alert('Not an array');
}

Array.isArray(value);

variable.constructor === Array


15. Synchronous and asynchronous function?
16. What is type coercion?

Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. 

true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0

17. What is hoisting?

a. varible hoisting

num = 6;
console.log(num); // returns 6
var num;

b. function hoisting
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/


18. What is closure?

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

-----------------------------------------------
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4


