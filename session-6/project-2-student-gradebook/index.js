const addStudent = require('./modules/addStudent');
const calculateAverage = require('./modules/calculateAverage');
const filterPassed = require('./modules/filterPassed');
const listStudents = require('./modules/listStudents');

addStudent('Mona', [85, 90, 78]);
addStudent('Omar', [55, 62, 58]);
addStudent('Laila', [40, 50, 45]);

listStudents();

const passedStudents = filterPassed();
console.log('Passed students:');
passedStudents.forEach((student) => {
  console.log(`- ${student.name} with average ${calculateAverage(student.grades).toFixed(2)}`);
});
