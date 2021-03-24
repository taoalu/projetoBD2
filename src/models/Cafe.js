const mongoose = required('mongoose');

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
    }
});

const Cafe = mongoose.model('Cafe', CafeSchema);

module.exports = Cafe;