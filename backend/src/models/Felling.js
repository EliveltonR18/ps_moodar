const mongoose = require('mongoose');

const FellingSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true,
    },
    stress:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('Felling', FellingSchema);