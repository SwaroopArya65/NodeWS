const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const addTaskController = require('../controllers/addTask_controller');
const usersController = require('../controllers/users_controller');
const addtask = require('../models/addtask');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.get('/addtask', addTaskController.addTask);



// Creat a variable for access globely in current file.
var addTasksList = [
    {
        description: "Arya Swaroop",
        category: "2223335551",
        duedate: "25-03-2024"
    },
    {
        description: "Arya Swaroop",
        category: "2223335551",
        duedate: "25-03-2024"
    },
    {
        description: "Arya Swaroop",
        category: "2223335551",
        duedate: "25-03-2024"
    }
]


// get all package of express through "app" Object
const app = express();

// Its a just Behave like a middleware. 
// Its use for getting data in encoding formate.
app.use(express.urlencoded());

// Set rout for all the mulitple pages
app.get('/addtask', function (req, res) {
    return res.render('addtask', {
        title: "AddTask",
        addlist: addTasksList
    }); /* send to the browser for display the page. */
});


//getting/fatch a data from home.ejs page.
app.post('/create-task', function (req, res) {
    // addTasksList.push({
    //     description: req.body.description,
    //     category: req.body.category,
    //     duedate: req.body.duedate
    // });
    addtask.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function (err, newaddtask) {
        if (err) {
            console.log('error while creating addtask');
            return;
        }

        console.log('**********', newaddtask);
        return res.redirect('/addtask');
    });
});

module.exports = router;