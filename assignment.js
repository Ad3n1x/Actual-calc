//✏️ Question One
//Write a JavaScript program using an anonymous function called processStudent that takes name and score as parameters.
//Create a global variable named schoolName.
//Inside the function:
//- Determine whether the student passed or failed.
//- Assign a grade (A–F) based on the score.
//- Return a sentence showing the student’s name, school, result, and grade.
//- Create a variable inside the function and then try to access it outside the function to test scope.
//Finally, call the function with at least two different students.

//✏️ Question Two
//Write a JavaScript program using an anonymous function called calculator that takes num1, num2, and operator.
//Inside the function:
//- Use conditional statements to perform addition (+), subtraction (-), multiplication (*), and division (/).
//- Handle invalid operators.
//- Handle division by zero.
//- Create a variable inside the function and try to access it outside the function to test scope.
//Call the function multiple times, including cases where the numbers are provided as strings.

let schoolName = "Nova Heights Academy";
function processStudent(name, score) {
    let result = score >= 50 ? "passed" : "failed";
    let grade;
    if (score >= 70) {
        grade = "A,you did exceptionally well!";
    } else if (score >= 60) {
        grade = "B,you did well!";
    } else if (score >= 50) {
        grade = "C,you passed!";
    } else if (score >= 40) {
        grade = "D,you need to improve!";
    }
    else {
        grade = "F,you failed, better luck next time!";
    }
    return `Student: ${name}, School: ${schoolName}, Result: ${result}, Grade: ${grade}`;
}
processStudent("Alice", 85);
console.log(processStudent("Alice", 85));
processStudent("Bob", 45);
console.log(processStudent("Bob", 45));


function displayGrade() {
    let name = document.getElementById("nameinput").value;
    let score = parseFloat(document.getElementById("scoreinput").value);
    let result = processStudent(name, score);
    let grade;
    if (score >= 70) {
        grade = "A";
    } else if (score >= 60) {
        grade = "B";
    } else if (score >= 50) {
        grade = "C";
    } else if (score >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    document.getElementById("gradeinput").value = `Grade: ${grade}`;
    document.getElementById("gradefeedback").value = `Result: ${result}`;
}

function clearInputs() {
    document.getElementById("nameinput").value = "";
    document.getElementById("scoreinput").value = "";
    document.getElementById("gradeinput").value = "";
    document.getElementById("gradefeedback").value = "";
}

function calculator(num1, operator, num2) {
    let result;
    if (operator === "+") { result = num1 + num2; }
    else if (operator === "-") { result = num1 - num2; }
    else if (operator === "*") { result = num1 * num2; }
    else if (operator === "/") {
        if (num2 != 0) {
            result = num1 / num2;
        }
        else {
            result = "Error: Division by zero is not allowed.";
        }
    } else {
        result = "Error: Invalid operator.";
    }
    return result;
}
console.log(calculator(20, "+", 25));
console.log(calculator(20, "-", 5));
console.log(calculator(20, "*", 30));
console.log(calculator(20, "/", 4));
console.log(calculator(20, "/", 0));

console.log(calculator("20", "+", "30"));
console.log(calculator("10", "*", "20"))
console.log(calculator("20", "/", "0"));
console.log(calculator("20", "/", "0"));
console.log(calculator("20", "-", "5"));

let num1input = document.getElementById("num1input").value;
console.log(num1input)

let num2input = document.getElementById("num2input").value;
console.log(num2input)

let operatorinput = document.getElementById("operatorinput").value;
function displayResult() {
    let num1 = Number(document.getElementById("num1input").value);
    let num2 = Number(document.getElementById("num2input").value);
    let operator = document.getElementById("operatorinput").value;

    let result = calculator(num1, operator, num2);

    document.getElementById("operatorsolution").value = result;
}


function displayResult() {
    let num1 = parseFloat(document.getElementById("num1input").value);
    let num2 = parseFloat(document.getElementById("num2input").value);
    let operator = parseFloat(document.getElementById("operatorinput").value);
    let result = calculator(num1, operator, num2);
    document.getElementById("operatorsolution").value = result;
}
let calculateButton = document.getElementById("calculateButton");
function clearFields() {
    document.getElementById("num1input").value = "";
    document.getElementById("num2input").value = "";
    document.getElementById("operatorinput").value = "";
    document.getElementById("operatorsolution").value = "";
}
