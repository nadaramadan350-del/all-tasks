const students = require('../data/students');

function addStudent(name, grades) {
  const student = { name, grades };
  students.push(student);
  console.log(`${name} was added to the gradebook.`);
  return student;
}

module.exports = addStudent;
