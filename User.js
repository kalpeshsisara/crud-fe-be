const mongoose = require('mongoose');

const schema1 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports =  mongoose.model('data111', schema1);

// module.exports = users

// tZIuT51rAcZFEGlJ
// mongodb+srv://kalpesh:<password>@cluster0.dpargyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0