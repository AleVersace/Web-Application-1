"use strict" ;

// Try promises on db

const sqlite = require('sqlite3');
const db = new 
sqlite.Database('/home/ale/Documents/uni/magistrale/webapp1/notes/basicjs/asynchronous_programming/numbers.sqlite', (err) => {
    if(err) throw err;
});

// Count rows
function countRows() {      // Function promise
    return new Promise((resolve, reject) => {
        db.all("SELECT COUNT(*) as tot FROM numbers", (err, rows) => {
            if (err)
                throw(err);
            else {
                resolve(rows[0].tot);
            }
        });
    });
}

function insertNumber() {
    return new Promise((resolve, reject) => {
        db.run("insert into numbers(num) values(1)", (err) => {
            if(err) reject(err);
            else resolve();
        });
    });
}



// Still we don't have asynchronous code! Careful!!
console.log("before");
insertNumber().then(() => countRows().then((val) => {console.log(val)}));
console.log("after");
