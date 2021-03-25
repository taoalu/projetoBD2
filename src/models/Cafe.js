const mongoose = require('mongoose');

const CafeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
    },
    avaliable: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    imgUrl: {
        type: String,
        require: true,
        default: "https://imgur.com/gallery/B68MhUu",
    }
});

const Cafe = mongoose.model('Cafe', CafeSchema);

module.exports = Cafe;