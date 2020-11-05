const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');





const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'enter email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'enter a valid email']
    },
    name: {
        type: String,
        required: [true, 'enter name'],
        minlength: [2, 'name must be at least 2 characters long'],
    },
    password: {
        type: String,
        required: [true, 'enter password'],
        minlength: [6, 'the password must be at least 6 characters long'],
    },
        questions:[{
        type: Schema.Types.ObjectId,
        ref: 'question'
    }]


});








//pre-save encryption:
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//login user:
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;