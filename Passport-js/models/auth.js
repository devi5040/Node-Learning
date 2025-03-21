const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema ({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model ('auth', authSchema);
