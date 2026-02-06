let marks = 25;
let grade = "";
if (marks < 50) {
  grade = "Poor";
} else if (marks < 65) {
  grade = "Good";
} else if (marks < 80) {
  grade = "Very Good";
} else {
  grade = "Excellent";
}

console.log("Student Marks:", marks);
console.log("Grade:", grade);
