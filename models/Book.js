const mongoose = require("mongoose");

//define book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
      author: {
        type: String,
        required: true
    },
    rating: {        
        type: Number,
        required: true
    },
    read: {
        type: Boolean,
        default: true
    }
});
module.exports = mongoose.model('Book', bookSchema);