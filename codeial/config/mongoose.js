//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todoapp_db');

//acquire the connection (to check if its is successful)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connection in db'));

//up and running then print the messages
db.once('open', function () {
    console.log('Successfully Connected to the database');
});