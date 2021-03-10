"use strict" ;

// General scores
let scores_original = [18, 20, 23, 19, 30, 27, 24, 24, 23, 24, 18];
let scores = Array.from(scores_original);
// Remove 2 lowest scores
scores.sort((a,b) => (a-b));
scores.shift();
scores.shift();

// Add 2 new scores at the end, equal to the rounded average of the existing scores
let avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
console.log("Avg score: %d", avg);
scores.push(avg);
scores.push(avg);

// Compare the scores before and after the "improvement", showing the averages in both cases
console.log("\n");
let avg_original = Math.round(scores_original.reduce((a,b) => a + b, 0) / scores_original.length);
console.log(scores_original + "\nOriginal Scores avg:" + avg_original);
avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
console.log(scores + "\nImproved Score avg:" + avg);