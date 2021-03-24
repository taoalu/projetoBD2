const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projetobd2');
mongoose.Promisse = global.Promisse;

module.exports = mongoose;