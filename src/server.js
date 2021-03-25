const express = require('express');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;
const morgan = require('morgan');
const bodyParser = require('body-parser');

// set up our express app
const app = express();

const routes = require('./routes/api');

//Mongo Atlas URI
const MONGO_ATLAS_URI = 'mongodb+srv://taoalu:thi15ago87@cluster0.nzpzi.mongodb.net/projetoBD2?retryWrites=true&w=majority';

// connect to mongodb
mongoose.connect(MONGO_ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Check Connection State
mongoose.connection.on('connected', () => {
    console.log(mongoose.connection.readyState == 1 ? "Database Connected\n" : "Database Disconnected\n");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode\n",
        this.address().port,
        app.settings.env
    );
});