"use strict" ;

console.log("\nValue variables:");
let a = "abc";  // Variable
a = 3;
const b = 6;    // Constant
var c = 7;      // Old method to define a variable. It can be redeclared. These variables are also
// pushed at the beginning of the code and available before their real declaration.

console.log(a);

// b = 5 is an Assignment to constant variable error.

c = a // This is a pointer assegnation, not a duplication of the same variable/object.


// SCOPE
console.log("\nScope:");

function example(x) {
    let variable = 1;
        if(x > 1){ // Scope
            let variable = 2;
        }
    console.log(variable);  // Output is 1, not 2 because of the scope. !!with "var" it changes!!
}

example(2);



// COMPARISONS
console.log("\nComparisons:");
a = 3;
c = "3";
console.log(a == c); // == same value by converting types
console.log(a === c);// === same value and same type


// Copying and referencing
console.log("\nCopying and referencing:");
let v = [1, 2];
let alias = v;  // Reference
let copy = Array.from(v);   // Copy of the array
copy[1] = 3;
console.log(v[1]);
console.log(copy[1]);


// Truly and Falsely data.
// !!Careful because null and empty elements can be true or false, depending on the element itself by definition.
// Different from python


// For ... of using iterable (like for ... in in python)
console.log("\nFor ... of");
let list = [1, 2, 3];
for (let element of list) {
    console.log(element);
}