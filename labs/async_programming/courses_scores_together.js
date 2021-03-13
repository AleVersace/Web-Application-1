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
    this.toString = () => {
        this.exams.forEach((e) => {console.log("Name:%s Code:%s CFU:%s Score:%s", e.name, e.code, e.cfu, e.mark)})
        return "";
    };
}


// Return a Promise Examlist resolving it from a db request 
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
                    let exam = new Exam(row.code, row.name, row.CFU, row.score, row.laude, dayjs(row.datepassed));
                    list.add(exam);
                }
                resolve(list);
            }
        });
    });
}

// Return a Promise Exam from the db filtered by courseCode
function find(courseCode) {
    const sql = "SELECT course.code, course.name, course.CFU,\
    score.score, score.laude, score.datepassed\
    FROM course LEFT JOIN score ON course.code=score.coursecode\
    WHERE course.code=?";       // Just a single exam!
    return new Promise((resolve, reject) => {
        db.all(sql, courseCode, (err, rows) => {
            if(err)
                throw err;
            else {
                let exam = new Exam(rows[0].code, rows[0].name, rows[0].CFU, rows[0].score, rows[0].laude, dayjs(rows[0].datepassed));
                resolve(exam);
            }
        });
    });
}

function afterDate(date) {
    const sql = "SELECT course.code, course.name, course.CFU,\
    score.score, score.laude, score.datepassed\
    FROM course LEFT JOIN score ON course.code=score.coursecode\
    WHERE score.datepassed>=?";       // List of exams after a given date
    return new Promise((resolve, reject) => {
        db.all(sql, date, (err, rows) => {
            if(err)
                throw err;
            else {
                let exams = new ExamList();
                for(let row of rows)
                    exams.add(new Exam(row.code, row.name, row.CFU, row.score, row.laude, dayjs(row.datepassed)));
                resolve(exams);
            }
        });
    });
}

// Add an exam in the db
function addExam(exam) {
    const sql1 = "INSERT into course(code, name, CFU) values(?, ?, ?)";
    const sql2 = "INSERT into score(coursecode, score, laude, datepassed) values(?, ?, ?, ?)";
    db.run(sql1, exam.code, exam.name, exam.cfu, function (err) {
        if(err) throw err;
        console.log("\nInserted new raw in table");
    });
    db.run(sql2, exam.code, exam.mark, exam.laude, exam.date, function (err) {
        if(err) throw err;
        console.log("\nInserted new raw in table");
    });

}

//TODO: getWorst(num) function that I'm not able to understand.

async function main() {

    await addExam(new Exam("1234X2", "Web Application 1", 6, 28, false, "2021-03-09"));
    
    let list = await getAll();
    console.log(list.toString());

    let exam = await find("02LSEOV");
    console.log(exam);
    
    let date = dayjs('2021-01-01').format('YYYY-MM-DD');
    console.log(date.toString());
    list = await afterDate(date);
    console.log(list.toString());
}

main();