// Entry Point 
'Use strict'

var currentTime = require('./modules/time');
var pickedStudent = require('./modules/choose');
var grade = require('./modules/pickGrade');
var gradeModule = require('./modules/saeModules');
var num = require('./modules/loop');
var buzz = require('./modules/fizzB');


var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hi! This is a home route');
})

app.get('/student', (req,res) => {
    res.send("The current time is " + currentTime + ". " + pickedStudent + " got " + grade.getTheWord() + " " + grade.grade + " in " + gradeModule + " module.")
})

app.get('/numbers', (req, res) => {
    res.send(num)
})

app.get('/fizz', (req, res) => {
    res.send(buzz)
})

app.listen(3000, function(){
    console.log('Server is running.');
})