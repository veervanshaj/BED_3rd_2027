const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserData = new Schema({
  Name:{
    type: String,
    require:true
  },
  email: String,
  password: String,
  blogs:[{
    type:mongoose.Types.ObjectId,
    ref:'Blog'
  }]
});

module.exports=mongoose.model('User', UserData);