const express = require('express');
const app = express();
const port = 8000;


app.use('/', require('./routers'));

//set up the view engine.
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error occure while running the server: ${err}`);
    }

    console.log(`Successfully fire the server on port number: ${port}`);
});