# Javascript functions

Generally speaking, a function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.

In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are

## Introduction

Every function in JavaScript is a Function object. See Function for information on properties and methods of Function objects.

To return a value other than the default, a function must have a return statement that specifies the value to return. A function without a return statement will return a default value. In the case of a constructor called with the new keyword, the default value is the value of its this parameter. For all other functions, the default return value is undefined.

The parameters of a function call are the function's arguments. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function, as shown in the following example:

``` javascript
/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);
```
The this keyword does not refer to the currently executing function, so you must refer to Function objects by name, even within the function body.

## Defining functions

There is a special syntax for declaring functions (see function statement for details):

```javascript
function name([param[, param[, ... param]]]) {
   statements
}
```
- **name:**
The function name.
- **param:**
The name of an argument to be passed to the function.
- **statements:**
The statements comprising the body of the function.

## The function expression (function expression)

A function expression is similar to and has the same syntax as a function declaration (see function expression for details). A function expression may be a part of a larger expression. One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions. Function expressions are not hoisted onto the beginning of the scope, therefore they cannot be used before they appear in the code.

```javascript
function [name]([param[, param[, ... param]]]) {
   statements
}
```

- **name:**
The function name. Can be omitted, in which case the function becomes known as an anonymous function.
- **param:**
The name of an argument to be passed to the function.
- **statements:**
The statements comprising the body of the function.

Here is an example of an anonymous function expression (the name is not used):
```javascript
var myFunction = function() {
    statements
}
```

It is also possible to provide a name inside the definition in order to create a named function expression:

```javascript
var myFunction = function namedFunction(){
    statements
}
```

One of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error.

As we can see, both examples do not start with the function keyword. Statements involving functions which do not start with function are function expressions.

When functions are used only once, a common pattern is an [IIFE (Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)).

``` javascript
(function() {
    statements
})();
```
IIFE are function expressions that are invoked as soon as the function is declared.

## The generator function declaration (function* statement)

There is a special syntax for generator function declarations (see function* statement for details):
```javascript
function* name([param[, param[, ... param]]]) {
   statements
}
```
- **name:**
The function name.
- **param:**
The name of an argument to be passed to the function.
- **statements:**
The statements comprising the body of the function.
## The generator function expression (function* expression)

A generator function expression is similar to and has the same syntax as a generator function declaration (see [function* expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*) for details):
```javascript
function* [name]([param[, param[, ... param]]]) {
   statements
}
```
- **name:**
The function name. Can be omitted, in which case the function becomes known as an anonymous function.
- **param:**
The name of an argument to be passed to the function.
- **statements:**
The statements comprising the body of the function.
## The arrow function expression (=>)
An arrow function expression has a shorter syntax and lexically binds its this value (see arrow functions for details):
```javascript
([param[, param]]) => {
   statements
}

param => expression
```
- **param:**
The name of an argument. Zero arguments need to be indicated with ().  For only one argument, the parentheses are not required. (like foo => 1)
- **statements or expression:**
Multiple statements need to be enclosed in brackets. A single expression requires no brackets. The expression is also the implicit return value of the function.
## The Function constructor
As all other objects, Function objects can be created using the new operator:
```javascript
new Function (arg1, arg2, ... argN, functionBody)
```
- **arg1, arg2, ... argN:**
Zero or more names to be used by the function as formal parameters. Each must be a proper JavaScript identifier.
- **functionBody:**
A string containing the JavaScript statements comprising the function body.

Invoking the Function constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.
## The GeneratorFunction constructor
As all other objects, GeneratorFunction objects can be created using the new operator:
```javascript
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```
- **arg1, arg2, ... argN:**
Zero or more names to be used by the function as formal argument names. Each must be a string that conforms to the rules for a valid JavaScript identifier or a list of such strings separated with a comma; for example "x", "theValue", or "a,b".
- **functionBody:**
A string containing the JavaScript statements comprising the function definition.

Invoking the GeneratorFunction constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.
