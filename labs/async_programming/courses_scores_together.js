"use strict" ;

// Exams handle with a db and handle date with dayjs
const sqlite = require('sqlite3');
const dayjs = require('dayjs');
const db = new 
sqlite.Database('/home/ale/Documents/uni/magistrale/webapp1/labs/async_programming/exams.sqlite', (err) => {
    if(err) throw err;
});

// Define a constructor function Exam to create a new object
function Exam(code, name, cfu, mark, laude, date) {
    this.code = code;
    this.name = name;
    this.cfu = cfu;
    this.mark = mark;
    this.laude = laude;
    this.date = date;
}

function ExamList() {
    this.exams = [];
    this.add = (exam)=> (this.exams.push(exam));
    this.find = (courseCode) => {
        const result = this.exams.filter((ex) => ex.code === courseCode);
        if (result.length == 1)
            return result[0];
        else
            return undefined;
    };
    this.afterDate = (date) => {
        let res = this.exams.filter((e) => (e.date > date));
        let final = new ExamList();
        if(res.length > 0)
            res.forEach((e) => final.add(e));
        return final;
    };
    this.listByDate = () => (this.exams.sort((a,b) => (a-b)));
    this.listByScore = () => (this.exams.sort((a,b) => (b-a)));
    this.average = () => {
        let partial = this.exams.reduce((sum, e) => {
            return sum + parseFloat(e.cfu)*parseFloat(e.mark); 
        }, 0,0);
        let avg = parseFloat(partial/this.exam.reduce((sum, e) => {return sum + e.cfu}, 0));
        return avg;
    };
    this.toString = () => ("TODO FINISH FUNCTION");
}


// Use Promise
function getAll() {
    const sql = "SELECT course.code, course.name, course.CFU,\
    score.score, score.laude, score.datepassed\
    FROM course LEFT JOIN score ON course.code=score.coursecode";

    return new Promise((resolve, reject) => {
        db.all(sql, (err, rows) => {
            if(err)
                throw err;
            else {
                let list = new ExamList();

                for (let row of rows) {
                    let exam = new Exam(row.code, row.name, row.cfu, row.score, row.laude, dayjs(row.datepassed));
                    list.add(exam);
                }

                resolve(list);
            }

        });
    });
}

async function main() {
    let list = await getAll();
    console.log(list.toString());
}

main();