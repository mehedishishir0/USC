const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
  clgAge:{
    type:String,
    required:true,
  },
  clgAbout:{
    type:String,
    required:true
  },
  princlpal:{
    type:Object,
    required:true
  }
})

const aboutModel = mongoose.model('aboutModel',aboutSchema)
module.exports = aboutModel