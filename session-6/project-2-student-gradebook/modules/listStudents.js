const students = require('../data/students');
const calculateAverage = require('./calculateAverage');

function listStudents() {
  if (students.length === 0) {
    console.log('No students in the gradebook.');
    return students;
  }

  console.log('Students:');
  students.forEach((student) => {
    console.log(`- ${student.name}: average ${calculateAverage(student.grades).toFixed(2)}`);
  });

  return students;
}

module.exports = listStudents;
