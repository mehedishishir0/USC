const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    img:{
        type:Array,
        required:true
    }
})

const sliderModel = mongoose.model('slider',sliderSchema) 
module.exports = sliderModel