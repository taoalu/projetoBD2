const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projetoDB');
mongoose.Promise = global.Promise;

