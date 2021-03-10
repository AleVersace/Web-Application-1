/* 
Functional Programming:
Using functions with data strings instead of loops 
*/

/*
Every library in js uses callbacks
*/

"use strict" ;

// Callbacks are function passed as argument in another function
function createQuote(quote, callback) {
    const myQuote = "This is my quote: " + quote;
    callback(myQuote);
}

createQuote("I'm too strong!", (x)=>{console.log(x)})   // Callback call

let a = [1, 3, 20, 19, 4, 7, 103, 67];
a.sort((x, y) => (x-y));    // Parallel operation with functional programming
console.log(a);

// Lots of operation (filter(), map(), forEach(), reduce(), ... )

// Create a custom filter
function myFilter(a, criteria) {
    let res = [];
    for (let elem of a)
        if (criteria(elem))
            res.push(elem);
    return res;
}

// All elements greater than 18
let b = myFilter(a, (x) => (x > 18));
console.log(b);

debugger ;