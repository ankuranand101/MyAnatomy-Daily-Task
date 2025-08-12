const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nietNoida');

// Define Student schema & model
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rollNo: Number
});
const Student = mongoose.model('Student', studentSchema);

// Create and save a student
const abcd = new Student({ name: 'Ankur', age: 20, rollNo: 12345 });
abcd.save().then(() => console.log('Student saved!'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
