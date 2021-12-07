const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOKEY || 'mongodb://localhost/husbandoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

module.exports = mongoose.connection