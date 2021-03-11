"use strict" ;

// Merge the other two exercises with objects (Courses + Marks)

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
}

const wa1 = new Exam("1234", "Web Application 1", 6, 28, false, "09-03-2021");
const ml = new Exam("1235", "Machine Learning", 6, 25, false, "10-03-2021");

const exams = new ExamList(); 

exam.add(wa1);
exam.add(ml);