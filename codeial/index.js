const express = require('express');
const app = express();
const port = 8000;


app.use('/', require('./routers'));

//set up the view engine.
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('assets')); /* This line of code means its goes to your directory and find out the folder which name is "assets". */

app.listen(port, function (err) {
    if (err) {
        console.log(`Error occure while running the server: ${err}`);
    }

    console.log(`Successfully fire the server on: ${port}`);
});