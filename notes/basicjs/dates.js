"use strict";

let now = new Date(); // sore a time instant with millisecond precision, but it is different based on timezones!
// This creates lots of problems
console.log(now);

// Other libraries well mantained: Day.js, Luxon, (Moment.js)
// Day.js creates immutable objects
// npm install dayjs

