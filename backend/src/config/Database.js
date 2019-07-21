const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teste:teste@api-patients-jr0x7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose;

