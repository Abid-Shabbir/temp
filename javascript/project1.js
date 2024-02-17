  "use strict"
//Student Marksheet
var eng, math, comp, phy, bio, avg;
//take user input;
eng = parseInt(prompt("Enter the mark of English"));
math = parseInt(prompt("Enter the mark of Math"))
comp = parseInt(prompt("Enter the mark of Computer"))
phy = parseInt(prompt("Enter the mark of Physics"))
bio = parseInt(prompt("Enter the mark of Biology"))
var name = "Abid";
//parseInt function use in js to convert string into integer
//sum all mark;
var obtain = eng + math + comp + phy + bio;
const TOTAL = 500;
var avg = obtain / 5

//calculate percentage of each subject
function subper(avg) {
    return (avg >= 40) ? "Pass" : "Fail";
}

//grade of each subject
function gradeofsub(obtain) {
    if (obtain >= 80 && obtain <= 100) {
        return "A+"
    }
    else if (obtain >= 70 && obtain < 80) {
        return "Grade A"
    }
    else if (obtain >= 60 && obtain < 70) {
        return "Grade B"
    }
    else if (obtain >= 50 && obtain < 60) {
        return "Grade C"
    }
    else if (obtain >= 40 && obtain < 50) {
        return "Grade D"
    }
    else {
        return "Sorry ! you are fail"
    }
}

// document.write("your obtain mark is: " + obtain + "<br>");
// document.write(" avg mark is: " + Math.round(avg) + "<br>");
var per = calculatePercentage(obtain);
document.write("<b>percentage is: </b> " + Math.round(per) + "%")
//by using else-if condition to find grade
document.write("<div>")

// calculate percentage
function calculatePercentage(obtain) {
    return (obtain / TOTAL) * 100
}

function subjectRemarks(subObtMarks) {
    return (subObtMarks < 34) ? "Fail" : "Pass";
}


var gradeMapping = [
    {min: 90, max: 100, grade: "A++"},
    {min: 80, max: 89, grade: "A+"},
    {min: 70, max: 79, grade: "A"},
    {min: 60, max: 69, grade: "B"},
    {min: 50, max: 59, grade: "C"},
    {min: 40, max: 49, grade: "D"},
    {min: 0, max: 39, grade: "F"}
]

// This mathod calculate grade
function calculateGrade(per) {
    var result;
    for(var i = 0; i <= (gradeMapping.length - 1); i++) {
        if(per > gradeMapping[i].min && per < gradeMapping[i].max) {
            result = gradeMapping[i].grade
            break;
        }
    }

    return result;
}

//table
var table ="<table border = '1px'>"
        +"<tr>"
        +`<th>sriel No</th><th>Subject</th><th> Totalmark</th> <th>Obtain mark</th><th>Grade</th><th>Status</th> `
        +"</tr>"
        +`<td>1</td> <td>English</td> <td>100</td><td>${eng}</td><td>${ gradeofsub(eng) }</td><td>${subjectRemarks(eng)}</td> `
        +"<tr>"
        +`<td>2</td> <td>Math</td> <td>100</td><td>${math}</td> <td>${ gradeofsub(math) }</td><td>${subjectRemarks(math)}</td>`
        +"</tr>"
        +"<tr>"
        +`<td>3</td> <td>Computer</td><td>100</td><td>${comp}</td> <td>${ gradeofsub(comp) }</td><td>${subjectRemarks(comp)}</td>`
        +"</tr>"
        +"<tr>"
        +`<td>4</td> <td>Physcis</td><td>100</td><td>${phy}</td> <td>${ gradeofsub(phy) }</td><td>${subjectRemarks(phy)}</td>`
        +"</tr>"
        +"<tr>"
        +`<td>5</td> <td>Biology</td><td>100</td><td>${bio}</td> <td>${ gradeofsub(bio) }</td><td>${subjectRemarks(bio)}</td>`
        +"</tr>"
        +"<tr>"
        +`<td></td> <td></td><td>total: 500</td><td>Total Obtain marks:${ obtain }</td> <td>Grade: ${calculateGrade(per)}</td> <td>Percentage: ${Math.round(per) }%</td>`
        +"</tr>"
        +"</table>";

document.write(table);
