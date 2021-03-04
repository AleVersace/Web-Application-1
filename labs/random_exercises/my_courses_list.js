"use strict" ;

// Manage list of courses
let names = "Web Application 1, Machine Learning & Pattern Recognition, Software Engineering, System and Device Programming";

// Parse string and create an array with a course every array position
let courses = names.split(", ");
console.log(courses);

// Creare a second array with acronyms of the courses (initial letters)
let acronyms = [];
for (let c of courses) {
    let elements = c.split(" ");
    acronyms.push(elements.map( (x) => { x.toUpperCase(); return x[0]; } )
                        .join(""));
}

console.log(acronyms.sort());