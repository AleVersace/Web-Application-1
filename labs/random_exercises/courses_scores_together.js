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
    
}

let exams = new ExamList(); 

//TODO: finish 