var presentStudents = require('./students')

var pickedStudent = presentStudents[Math.round(Math.random() * 4)];

module.exports = pickedStudent;

