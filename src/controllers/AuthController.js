const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const mUser = await User.create(req.body);
    } catch (error) {
        console.log(res.status(400).send('Erro na criação do usuário'));
    }

});

module.exports = app => app.use('/auth', router);