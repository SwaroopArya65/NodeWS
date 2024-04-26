const mongoose = require('mongoose');

const addtaskschem = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    duedate: {
        type: String,
        require: true
    }
});

const addtask = mongoose.model('addtask', addtaskschem);

module.exports = addtask;