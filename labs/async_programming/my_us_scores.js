"use strict" ;

/* 
Js program that converto the scores of exams into the US system
then compute the weighted average in both systems.
This is my solution using a unique list instead of two suggested in the text of the exercise.
*/

function Exam(code, name, CFU, score, computeScoreUS) {
    this.code = code;
    this.name = name;
    this.CFU = CFU;
    this.score = score;
    this.usScore = computeScoreUS(this.score);  // Callback
}

function ExamList() {
    this.usSystem = {'A': 4.0, 'B': 3.0, 'C': 2.0, 'D': 1.0};
    this.exams = [];
    this.add = (exam) => {
        this.exams.push(exam);
    };
    this.avg = () => {
        let subtotal = this.exams.reduce((sum, e) => {return sum + e.score*e.CFU}, 0);
        return subtotal/this.exams.map((e) => e.CFU).reduce((sum, e) => {return sum+e}, 0);
    };
    this.avgUS = () =>  {
        let subtotal = this.exams.reduce((sum, e) => {
            return sum + this.usSystem[e.usScore]*e.CFU;
        }, 0);
        return subtotal/this.exams.map((e) => e.CFU).reduce((sum, e) => {return sum+e}, 0);
    };
    this.toString = () => {
        this.exams.forEach((e) => {console.log("Name:%s Code:%s CFU:%d Score:%d US_Score:%s", e.name, e.code, e.CFU, e.score, e.usScore)})
        return "";
    };
}

function computeScoreUS(score) {
    let usScore;
    if (score >= 27) {
        usScore = 'A';
    } else if (score >= 24 && score <= 26) {
        usScore = 'B';
    } else if (score >= 19 && score <= 23){
        usScore = 'C';
    } else {
        usScore = 'D';
    }
    return usScore;
}

const wa1 = new Exam("1234", "Web Application 1", 6, 28, computeScoreUS);
const ml = new Exam("1235", "Machine Learning", 6, 25, computeScoreUS);

const exams = new ExamList(); 

exams.add(wa1);
exams.add(ml);

console.log(exams.toString());
console.log("Exam weighted averages...\nITA: %d, US: %s", exams.avg(), exams.avgUS());