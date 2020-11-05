const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const questionSchema = new Schema({ 
    body: {
        type: String,
        required: [true, 'enter question'],
        minlength: [10, 'question must be least 10 characters long'],
    },
    category: {
        type: String,
        required: [true, 'enter category'],
        minlength: [4, 'category must be least 4 characters long'],
    },
    answers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'answer'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('Question', questionSchema);