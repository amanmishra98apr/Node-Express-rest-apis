const mongoose = require('../config/dbconfig.js');



const studentSchema = new mongoose.Schema({
    roll: Number,
    name: String,
    branch: String
})



const Student = mongoose.model('Student', studentSchema);

module.exports = Student;