/* 
In Javascript Objects may exist without Classes.
We may add, delete, redefine a property or a method at any time. 
Property are always "public" (if we talk in Java).
An object is an Unordered Collection of properties: name and value. 
Property names are unique in each object and are identified as strings.
Property values are types, arrays or even functions and objects.
*/

"use strict" ;

let point = {x: 2, y: 5};

let book = {
    author: "Enrico",
    title: "Learning JS",
    for: "students",
    pages: 520,
};

console.log(point);
console.log(book);

let person = book.author;
let name = book["author"];
console.log(person + "\n" + name);
book.author = "Anna";
book["author"] = "Cloe";
console.log(book.author + "\n");

// Another method to create objects
let a = {c: 3};   // different from a[c] = 3 that adds a property
console.log(a);

for (let name in book) {    // Iterates on properties
    console.log(name);
}

let keys = Object.keys(book);
let entries = Object.entries(book);
console.log(entries);

let book2 = Object.assign({}, book);    // Shallow copy! an object (target object, source object)
book2.time = 2;
console.log(book);


// Functions
console.log("\nFunctions:");     // Functions are also objects

function square(x) {    // 1
    let y = x * x;
    return y;
}
let n = square(3);      // Missing parameters is not an error (are setted as undefined)
const sq = square;      // Another name for square funtion

const fn = function(params) {   // 2 Function expression
    /* do something */
}

const fnt = (params) => {
    /* do something */
}

const operations = [function(x) {return x+1}, function(x) {return x-1}];
let b = operations[0](3);   // 4
console.log(b);


// Nested Functions
console.log("\nNested Functions:")
function hypotenuse(a, b) {
    const square = x => x*x;
    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3, 4));


// Closures
console.log("\nClosures:");
function count() {
    let c = 0;          // This is fundamental because increment fucntion is going to use it as a starting point!
    let increment = () => {c = c + 1; return c;};
    return increment;   // We are returning a function!!    
}

let counter = count();  
console.log(counter());
console.log(counter());
let counter2 = count();
console.log(counter2());
console.log(counter());



