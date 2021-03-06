const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();

const Cafe = require('../models/Cafe');

//POST - INSERIR UM NOVO CAFÉ
router.post('/salvarCafe', (req, res) => {
    const data = { name: req.body.name, price: req.body.price, avaliable: req.body.avaliable, createdAt: Date.now(), imgUrl: req.body.imgUrl };

    const newCafe = new Cafe(data);
    if (mongoose.connection.readyState == 1) {
        newCafe.save((error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            }
            // Novo cafe cadastrado
            return res.json({
                data
            });
        });
    } else {
        res.status(500).json({ msg: 'Não conectado a base de dados!' });
    }

});

//GET - LISTAR TODOS OS CAFÉS
router.get('/listarTodos', (req, res) => {
    Cafe.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

//POST - UPDATE
router.post('/updateById', (req, res) => {
    Cafe.updateOne({ _id: req.body.id }, { name: req.body.newName }, function (err) {
        if (err) {
            res.send("Não foi possível atualizar o registro: " + err);
            return;
        }
        res.send("Registro atualizado com sucesso");
        return;
    });
});

//POST - DELETE BY ID
router.post('/deletarCafeById', (req, res) => {
    Cafe.deleteOne({ _id: req.body.id }, function (err) {
        if (err) {
            res.send("Não foi possível deletar o registro: " + err);
            return;
        }
        res.send("Registro deletado com sucesso!");
        return;
    });
});

module.exports = router;