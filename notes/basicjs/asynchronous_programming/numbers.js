'use strict' ;
const sqlite = require('sqlite3');  // Connect the library

const db = new 
sqlite.Database('/home/ale/Documents/uni/magistrale/webapp1/notes/basicjs/asynchronous_programming/numbers.sqlite', (err) => {
    if(err) throw err;
});     // It's asynchronous, so we have to provide the exception handler


// Queries
db.all("SELECT * FROM numbers", (err, rows) => {        // This call will go ahead asynchronously and call the callback at the end.
    if (err)                                            // Lot's of callbacks in sequence could create problems if we want procedural works!!!
        throw(err);
    else {
        for(let row of rows)
            console.log(row.num)
    }
});

console.log("Done!");

db.close();

debugger;