const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema ({
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  facebookId: {
    type: String,
    unique: true,
    sparse: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

module.exports = mongoose.model ('auth', authSchema);
