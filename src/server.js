const express = require('express');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;

// set up our express app
const app = express();

const MONGO_ATLAS_URI = 'mongodb+srv://taoalu:thi15ago87@cluster0.nzpzi.mongodb.net/projetoBD2?retryWrites=true&w=majority';

// connect to mongodb
//mongoose.connect(MONGO_ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log('Connected to Database!' + mongoose.mongo.Admin);
});

var connection = mongoose.createConnection(
    MONGO_ATLAS_URI,{useNewUrlParser: true, useUnifiedTopology: true});
connection.on('open', function() {
    // connection established
    new Admin(connection.db).listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        var allDatabases = result.databases;    
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode\n",
        this.address().port,
        app.settings.env
    );
});