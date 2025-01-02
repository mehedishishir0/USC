const { addedGallery, getGallery, deleteGallery } = require('../Controllers/ourGalleryControllers')
const upload = require('../middlewares/imgUploder')

const ourGalleryRouter = require('express').Router()

ourGalleryRouter.post('/',upload.single('gallery'),addedGallery)
ourGalleryRouter.get('/',getGallery)
ourGalleryRouter.post('/delete',deleteGallery)


module.exports = ourGalleryRouter

