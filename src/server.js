const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb+srv://taoalu:thi15ago87@cluster0.nzpzi.mongodb.net/projetoBD2?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode\n",
        this.address().port,
        app.settings.env
    );
});