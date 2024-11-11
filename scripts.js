let student = [];

function addStudent() {
  let studentName = document.getElementById("studentName").value;
  let branch = document.getElementById("branch").value;
  let rollNum = parseInt(document.getElementById("rollNum").value);
  let grade = document.getElementById("grade").value;
  let cgpa = parseFloat(document.getElementById("cgpa").value);
  let cardContainer = document.getElementById("cardContainer");

  let studentObject = {
    name: studentName,
    branch: branch,
    rollNum: rollNum,
    grade: grade,
    cgpa: cgpa,
  };

  student.push(studentObject);
  console.log(student);
