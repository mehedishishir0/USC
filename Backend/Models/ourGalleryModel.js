const mongoose = require('mongoose')

const ourGallerySchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    }
})

const ourGalleryModel = mongoose.model('ourGallery',ourGallerySchema)
module.exports = ourGalleryModel