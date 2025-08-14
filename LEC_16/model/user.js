const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserData = new Schema({
  Name: String,
  email: String,
  password: String
});

module.exports=mongoose.model('User', UserData);