const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    body: {
        type: String,
        required: [true, 'enter answer'],
        minlength: [1, 'answer can not be empty'],
    },
    question: 
        {
        type: Schema.Types.ObjectId,
        ref: 'question'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});



module.exports = mongoose.model('answer', answerSchema);




