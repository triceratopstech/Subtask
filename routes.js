 // app/routes.js

// grab the nerd model we just created
var db = require('./models');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/tasks', function(req, res) {
            db.Tasks.findAll().then((tasks) => {res.json(tasks)});
        });

        app.get('/api/relationships', function(req, res) {
            db.TaskRelationships.findAll().then((taskrelationships) => {res.json(taskrelationships)});
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./src/index.html'); // load our public/index.html file
        });

    };